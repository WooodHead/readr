import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql'

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId,
} from 'graphql-relay'

import { resolveBookPages } from '../api/bookPages'
import dataProvider from '../models/data-provider'
const debug = require('debug')('readr:gqlschema')

class User { }

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    let { type, id } = fromGlobalId(globalId)
    switch (type) {
      // we will use sequelize to resolve the id of its object
      default:
        debug('null node interface')
        return null
    }
  },
  (obj) => {
    // we will use sequelize to resolve the object tha timplements node
    // to its type.
    switch (obj.type) {
      default:
        debug('null node field')
        return null
    }
  }
)

////////////////////////////////////////////////////////////////////////////////////
//                                  types                                         //
////////////////////////////////////////////////////////////////////////////////////
const GQLHTMLElementObject = new GraphQLObjectType({
  name: 'HTMLElementObject',
  fields: () => ({
    tag: {
      type: GraphQLString
    },
    type: {
      type: GraphQLInt
    },
    attrs: {
      type: new GraphQLObjectType({
        name: 'HTMLAttrObject',
        fields: {
          id: {
            type: GraphQLString
          },
          href: {
            type: GraphQLString
          },
          src: {
            type: GraphQLString
          }
        }
      })
    },
    children: {
      type: new GraphQLList(GQLHTMLElementObject)
    }
  })
})

const GQLBookPage = new GraphQLObjectType({
  name: 'BookPage',
  description: 'Computed bookpage',
  fields: {
    id: globalIdField('HidingSpot'),
    elements: {
      type: new GraphQLList(GQLHTMLElementObject),
      resolve(bookPage) {
        return bookPage.elements
      }
    },
    meta: {
      type: new GraphQLObjectType({
        name: 'BookPageMeta',
        fields: {
          pageNo: {
            type: GraphQLInt
          },
          offset: {
            type: GraphQLInt
          }
        }
      }),
      resolve(bookPage) {
        return bookPage.meta
      }
    }
  },
  interfaces: [nodeInterface]
})

// const GQLBookPageConnection = new GraphQLObjectType({
//   name: 'BookPageConnection',
//   fields: {
//     nodes: {
//       type: new GraphQLList(GQLBookPage)
//     }
//   }
// })

const { connectionType: GQLBookPageConnection } =
  connectionDefinitions({ name: 'BookPage', nodeType: GQLBookPage })

const GQLAuthor = new GraphQLObjectType({
  name: 'Author',
  description: 'Book author, normally it\'s fetched from douban.',
  fields: {
    _id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  }
})

const GQLTag = new GraphQLObjectType({
  name: 'Tag',
  description: 'Book tag.',
  fields: {
    _id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  }
})

////////////////////////////////////////////////////////////////////////////////////
//                                  fields                                        //
////////////////////////////////////////////////////////////////////////////////////
const testField = {
  type: new GraphQLObjectType({
    name: 'test',
    fields: {
      a: {
        type: new GraphQLObjectType({
          name: 'testa',
          fields: {
            ina: {
              type: GraphQLString,
              resolve: () => {
                return 'this is under a'
              }
            }
          }
        }),
        resolve: () => {
          const fuck = 1
          return 'this is a'
        }
      }
    }
  }),
  resolve: (...args) => {
    const arg2 = args
    return 'this is test'
  }
}

const bookPagesField = {
  type: GQLBookPageConnection,
  args: {
    ...connectionArgs,
    ...{
      bookId: {
        type: new GraphQLNonNull(GraphQLString)
      },
      pageHeight: {
        type: new GraphQLNonNull(GraphQLInt)
      }
    }
  } as GeneralObject,
  resolve: async (obj, args) => {
    const list = await resolveBookPages({
      id: args.bookId,
      pageHeight: args.pageHeight
    })
    return connectionFromArray(list, args)
  }
}

const viewerField = {
  type: new GraphQLObjectType({
    name: 'user',
    fields: {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      abc: {
        type: GraphQLString
      }
    },
    interfaces: [nodeInterface]
  }),
  resolve(obj, args, req) {
    // return new User()
    const bookPages = resolveBookPages(args)
    return {
      abc: 123,
      bookPages
    }
  }
}

const authorField = {
  type: GQLAuthor,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(obj, { id }, req) {
    return dataProvider.Author.findById(id)
  }
}

const tagField = {
  type: GQLTag,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(obj, { id }, req) {
    return dataProvider.Tag.findById(id)
  }
}

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
    viewer: viewerField,
    author: authorField,
    tag: tagField,
    test: testField,
    bookPages: bookPagesField
  }
})

export default new GraphQLSchema({
  query: Query,
  // mutation: Mutation,
})
