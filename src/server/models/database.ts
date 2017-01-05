import appConfig from '../../app.config'
import _ from 'lodash'
import Schema, { Field } from './schema'
import outputEmptyEntity from './output-empty-entity'
import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient

export const connect = () => {
  return MongoClient.connect(`${appConfig.database.host}/${appConfig.database.name}`)
}

// export const connect = (table) => {
//   class Connect {
//     _table: string
//     _db: mongodb.Db
//     _connection: mongodb.Collection

//     constructor(dbTable) {
//       this._table = dbTable
//       const dbConnect = MongoClient
//         .connect(`${appConfig.database.host}/${appConfig.database.name}`)
//         .then(db => {
//           this._db = db
//           this._connection = db.collection(table)
//         })
//     }

//     get collection() {
//       return this._connection
//     }

//     close() {
//       this._db.close()
//     }
//   }

//   const connectInst = new Connect(table)
//   return connectInst
// }

export function getCollection(table) {
  const dbConnect = MongoClient.connect(`${appConfig.database.host}/${appConfig.database.name}`)
  return dbConnect.then(db => {
    const collection = db.collection(table)
    return collection
  })
}

export function getRowByMatch(match, table) {
  return getCollection(table).then(collection => {
    return collection.find(match).toArray()
  })
}

export function getRowById(id, table) {
  return getRowByMatch({ _id: id }, table)
}


/**
 * embedRef & its little functions
 */
interface FieldWithIds extends Field {
  ids: string[]
}
const getRefFieldsWithIds = (rawResult, schema: Schema): FieldWithIds[] => {
  return schema.fields
    .filter(field => {
      return (typeof field.ref !== 'undefined')
    })
    .map(field => {
      let ids = rawResult[field.name]

      // 将 ids 通通转换为数组
      // 这里包括本该传数组却得到字符串被转换的情况
      if (!Array.isArray(ids)) {
        ids = [ids]
      }

      return Object.assign({}, field, { ids })
    })
}

// 并且添加相应错误信息
const handleRefResult = (rawRefResult, refSchema: Schema, id) => {
  if (typeof rawRefResult === 'object') {
    return rawRefResult
  }

  return outputEmptyEntity(refSchema.fields, id)
}

const doesRefHaveRefInside = (ref: Schema) => {
  return _.filter(ref.fields, field => Boolean(field.ref)).length !== 0
}

export function embedRef(rawResults: any[], schema: Schema) {
  if (rawResults.length === 0) {
    return Promise.resolve([])
  }

  // 获取 ref 数据，生成由 ref 字段组成的对象
  const getRefFieldsWithData = (fieldsWithRefIds: FieldWithIds[]) => {
    const fieldsWithData = fieldsWithRefIds
      .map(field => {
        // 一个 field 里面的 ids 返回的查询结果
        return Promise
          .all(field.ids
            .map(id => {
              return getRowById(id, field.ref.name)
                .then(results => {
                  const isRefInRef = doesRefHaveRefInside(field.ref)
                  const refSchema = field.ref

                  if (isRefInRef) {
                    // 递归！！
                    return embedRef(results, refSchema).then(reRefedResult =>
                      handleRefResult(reRefedResult[0], refSchema, id))
                  }

                  return handleRefResult(results[0], refSchema, id)
                })
            })
          )
          .then(refResults => {
            // 处理单个 ref field 数据，都是数组形式，最终是否为数组取决于 ref field 的 type
            let fieldData = refResults

            if (!field.type || !field.type.isArray()) {
              fieldData = refResults[0]
            }

            return {
              name: field.name,
              data: fieldData,
            }
          })
      })

    return Promise.all<{ name: string; data: any }>(fieldsWithData).then(fields => {
      return fields.reduce((fieldsObj, field) => {
        return Object.assign({}, fieldsObj, {
          [field.name]: field.data
        })
      }, {})
    })
  }

  return Promise.all(rawResults
    .map(rawResult => {
      const fieldsWithIds = getRefFieldsWithIds(rawResult, schema)

      return getRefFieldsWithData(fieldsWithIds).then(refObj => {
        return _.assign({}, rawResult, refObj)
      })
    }))
}

export default {
  embedRef,
  getCollection,
  getRowByMatch,
  getRowById
}
