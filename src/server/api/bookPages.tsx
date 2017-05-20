import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import _ from 'lodash'
import path from 'path'
import md5 from 'vendor/md5'
import { groupNodesByPage } from '../../renderers/paging'
import dataProvider from '../models/data-provider'
import { notFoundError } from '../helpers'
import AppDoc from '../../app/components/AppDoc'
import HTMLObjectsRenderer from '../../app/components/HTMLObjectsRenderer'
import evaluate from '../../renderers/evaluate'
import { getCssLinks } from '../middleware/render/render-view'
import parseEpub from '../../parsers/epub/epub'
import parseHTML from '../../parsers/html'
import parseLink from '../../parsers/link'

const debug = require('debug')('readr:api:bookPages')

type RendererConfig = {
  fontSize: number
  width: number
  lineHeight: number
}
const calcHeights = async (sections, rendererConfig: RendererConfig) => {
  debug('calcHeights start')
  // get node heights in sections
  const htmlString = renderToStaticMarkup(
    <AppDoc
      link={getCssLinks()}
      appMarkup={
        <div className="sections">
          {
            sections.map((section, index) => {
              return (
                <HTMLObjectsRenderer key={index} htmlObjects={section} {...rendererConfig} />
              )
            })
          }
        </div>
      }
    />
  )

  const heights = evaluate(htmlString, {
    saveShotAsPng: false,
    evalCallback: `
      var sections = document.querySelector('.sections').childNodes
      var heights = []
      var allHeights = []
      Array.prototype.forEach.call((sections), function(section) {
        Array.prototype.forEach.call(section.childNodes, function(node) {
          heights.push(node.clientHeight)
        })
        allHeights.push(heights)
        heights = []
      })
      return allHeights
    `
  }).then(_heights => {
    return _heights
  })

  debug('calcHeights end')
  return heights
}

const cacheKeyResolver = (...args) => {
  const hash = md5(JSON.stringify(args))
  debug('args hash', hash)
  return hash
}

const calcHeightsMem = _.memoize(calcHeights, cacheKeyResolver)

const queryBookFile = async (bookId) => {
  debug('queryBookFile')
  const bookEntity = await dataProvider.Book.utils.findById(bookId) as any
  const fileId = bookEntity.file

  if (!fileId) {
    return Promise.reject(notFoundError('book'))
  }

  return await dataProvider.File.utils.findById(fileId) as any
}

const resolveBookContent = async bookId => {
  debug('resolveBookContent')
  const file = await queryBookFile(bookId)
  const { content, mimetype } = file

  // todo: text/plain
  if (mimetype === 'application/epub+zip') {
    const epub = await parseEpub(content)
    const isInternalUri = uri => {
      return uri.indexOf('http://') === -1 && uri.indexOf('https://') === -1
    }

    const { bookContent } = epub
    const sections = bookContent.map((section, index) => {
      let parsedSection = {
        ...section,
        ...{
          htmlObject: parseHTML(section.html, {
            resolveHref(href) {
              if (isInternalUri(href)) {
                const { name, hash } = parseLink(href)
                if (hash) {
                  return `#${name},${hash}`  
                }
                return `#${name}`
              }
              return href
            },
            resolveSrc(src) {
              if (isInternalUri(src)) {
                // todo: may have bugs
                const absolutePath = path.resolve('/', src).substr(1)
                debug('absolutePath', absolutePath)

                const buffer = epub.resolve(absolutePath).asNodeBuffer()
                const base64 = buffer.toString('base64')
                return `data:image/png;base64,${base64}`
              }
              return src
            }
          })
        }
      }
      if (index === 0 && parsedSection.htmlObject.length === 0) {
        const defaultFirstSectionContent = `
          <br/>
          <br/>
          <br/>
          <h1>${epub.metadata.title}</h1>
          <p>${epub.metadata.author}</p>
        `
        parsedSection.htmlObject = parseHTML(defaultFirstSectionContent)
      }

      return parsedSection
    })
    return sections
  }

  return Promise.reject(new Error('Unsupported file type!'))
}

const resolveBookContentMem = _.memoize(resolveBookContent)

const validateNonNullOptions = (options, nonNullFieldList) => {
  for (const field of nonNullFieldList) {
    if (_.isUndefined(options[field])) {
      return new Error(`Required field ${field} is not provided!`)
    }
  }
  return true
}

export const resolveBookPages = async (options) => {
  console.time('resolveBookPages')
  const nonNullFieldList = ['pageHeight', 'width', 'fontSize', 'lineHeight']
  const validateResult = validateNonNullOptions(options, nonNullFieldList)

  if (validateResult !== true) {
    return Promise.reject(validateResult)
  }

  const { id: bookId, pageHeight, width, fontSize, lineHeight } = options

  if (!pageHeight) {
    // todo: general validation
    return Promise.reject(new Error('pageHeight undefined!'))
  }

  const sections = await resolveBookContentMem(bookId)
  const heights = await calcHeightsMem(_.map(sections, section => section.htmlObject), {
    width,
    fontSize,
    lineHeight
  })

  debug('groupNodesByPage start')

  let pageSum = 0
  const pages = sections
    .map((section, index) => {
      const result = groupNodesByPage(section.htmlObject, {
        nodeHeights: heights[index],
        pageHeight,
        pageStartFrom: pageSum,
        meta: {
          section: section.pathObject.name
        }
      })
      pageSum += result.length
      return result
    })
    .reduce((a, b) => {
      return a.concat(b)
    }, [])
  debug('groupNodesByPage end')
  console.timeEnd('resolveBookPages')

  return pages
}

export default {
  resolveBookPages
}