const express = require('express')
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const gcs = require('@google-cloud/storage')()
const mkdirp = require('mkdirp-promise')
const os = require('os')
const path = require('path')
const _ = require('lodash')
const epubParser = require('@gxl/epub-parser').default
const fs = require('fs')
const omitUndefinedDeep = require('./utils/omit-undefined-deep')

admin.initializeApp(functions.config().firebase)

const database = admin.database()
const app = express()

const cors = (allowedOrigins) => (req, res, next) => {
  const origin = req.headers.origin
  if (origin && (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins === '*')) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Headers', 'content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Methods', 'get,post,put')
  }
  next()
}

const handleNotFound = (req, res, next) => {
  res.send({
    code: 404
  })
}

app.use(cors('*'))

const getBookFileById = (id) => {
  return database.ref('files/' + id)
    .once('value')
    .then(data => {
      const { filename } = data.val()
      const tempLocalFile = path.join(os.tmpdir(), filename)
      const tempLocalDir = path.dirname(tempLocalFile)

      return mkdirp(tempLocalDir)
        .then(() => {
          // Download file from bucket.
          return admin.storage().bucket().file(filename).download({ destination: tempLocalFile })
        })
        .then(() => {
          console.log('The file has been downloaded to', tempLocalFile)
          // Delete the file
          fs.unlinkSync(tempLocalFile)
          return epubParser(tempLocalFile).then(epub => {
            return _.pick(epub, ['structure', 'info', 'sections'])
          })
        })
    })
}

const getBookById = id => {
  return database.ref('books/' + id).once('value')
    .then(data => data.val())
}

const listBooks = () => {
  return database.ref('books').once('value')
    .then(data => {
      return _.map(data.val(), (item, id) => {
        return _.omit(_.assign({}, item, {
          id,
        }), ['sections'])
      })
    })
}

const createRouter = () => {
  const router = express.Router()
  router.get('/book-files/:id', (req, res) => getBookFileById(req.params.id).then(json => {
    res.send(json)
  }))
  router.get('/books/:id/meta', (req, res) => getBookById(req.params.id).then(json => {
    res.send(_.omit(json, ['sections']))
  }))
  router.get('/books/:id/sections', (req, res) => getBookById(req.params.id).then(json => {
    res.send(_.pick(json, ['sections']))
  }))
  router.get('/books', (req, res) => listBooks().then(json => {
    res.send(json)
  }))
  router.use(handleNotFound)
  return router
}

app.use(createRouter())

exports.app = functions.https.onRequest((req, res) => {
  if (!req.path) {
    req.url = `/${req.url}`
  }
  console.log(`requesting ${req.url}`)
  return app(req, res)
})

const BOOK_VERSION = '0.1.0'

exports.epubToBook = functions.storage.object().onChange(event => {
  const object = event.data
  const filePath = object.name
  const tempLocalFile = path.join(os.tmpdir(), filePath)
  const tempLocalDir = path.dirname(tempLocalFile)
  console.log('Change triggered...')

  // Exit if this is triggered on a file that is not an image.
  if (!object.contentType.startsWith('application/epub+zip')) {
    console.log('This is not an epub file.')
    return
  }

  // Exit if this is a move or deletion event.
  if (object.resourceState === 'not_exists') {
    console.log('This is a deletion event.')
    return
  }

  const bucket = gcs.bucket(object.bucket)
  // Create the temp directory where the storage file will be downloaded.
  return mkdirp(tempLocalDir)
    .then(() => {
      // Download file from bucket.
      return bucket.file(filePath).download({ destination: tempLocalFile })
    })
    .then(() => {
      console.log('The file has been downloaded to', tempLocalFile)
      return epubParser(tempLocalFile)
        .then(epub => {
          return database.ref('books')
            .orderByChild('file')
            .equalTo(filePath)
            .once('child_added', snapshot => {
              const book = snapshot.val()
              const contentRef = database.ref('bookContent').push()
              contentRef.set(omitUndefinedDeep({
                content: epub.sections,
                createdAt: new Date().valueOf(),
                owner: book.owner
              }))
              snapshot.ref.update(omitUndefinedDeep(_.assign({}, epub.info, {
                content: contentRef.key,
                structure: epub.structure,
                version: BOOK_VERSION,
                status: 'SUCCESS',
                createdAt: new Date().valueOf(),
              })))
            })
        })
    })
    .then(() => {
      // Once the image has been converted delete the local files to free up disk space.
      fs.unlinkSync(tempLocalFile)
      console.log('Done', filePath)
    })
    .catch(err => {
      console.error(err)
      return database.ref('books')
        .orderByChild('file')
        .equalTo(filePath)
        .once('child_added', snapshot => {
          snapshot.ref.update({
            status: 'FAILURE',
            createdAt: new Date().valueOf(),
          })
        })
    })
})
