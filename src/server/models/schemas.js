'use strict'
const DataTypes = require('../data/types')
const validator = require('../utils/validator')
const i18n = require('../utils/i18n')


// 支持的选项
// field: {
//   includeInSearch,
//   required,
//   type,
//   validators,
//   ref: {
//     table,
//     fields[]
//   },
//   unique
// }

const schemas = {
  author: {
    baseTable: 'authors',
    fields: {
      name: {
        includeInSearch: true,
        required: true
      },
      slug: {
        includeInSearch: true,
        unique: true,
      },
      description: {
      }
    }
  },

  book: {
    baseTable: 'books',
    fields: {
      title: {
        includeInSearch: true,
        required: true,
      },
      author: {
        includeInSearch: true,
        required: true,
        type: DataTypes.arrayOf(DataTypes.ID),
        ref: {
          table: 'authors',
          fields: []
        }
      },
      description: {},
      cover: {},
      content: {
        required: true,
        type: DataTypes.Text
      },
    }
  },

  collection: {
    baseTable: 'collections',
    fields: {
      name: {
        type: DataTypes.String,
        includeInSearch: true,
        required: true,
      },
      items: {
        required: true,
        type: DataTypes.arrayOf(DataTypes.ID),
        ref: {
          table: 'books',
          fields: ['_id', 'title', 'author', 'description', 'cover']
        }
      },
      description: {},
      creator: {
        required: true,
        type: DataTypes.ID,
        ref: {
          table: 'users',
          fields: []
        }
      }
    }
  },

  tag: {
    baseTable: 'tags',
    fields: {
      name: {
        includeInSearch: true,
        required: true,
      },
      slug: {
        includeInSearch: true,
        required: true,
        unique: true
      },
      description: {}
    }
  },

  progress: {
    baseTable: 'reading_progress',
    ids: ['user_id', 'book_id'],
    fields: {
      page_no: {
        required: true,
      },
      page_sum: {
        required: true,
      },
      percentage: {
        required: true,
      }
    }
  },

  user: {
    baseTable: 'users',
    fields: {
      username: {
        required: true,
        unique: true,
        validators: [
          [validator.lengthMin(5), i18n('errors.validation.valueLimit.minLength', 'name')],
          [validator.lengthMax(20), i18n('errors.validation.valueLimit.maxLength', 'name')],
        ]
      },
      password: {
        required: true,
        validators: [
          [validator.lengthMin(6), i18n('errors.validation.valueLimit.minLength', 'password')],
          [validator.lengthMax(20), i18n('errors.validation.valueLimit.maxLength', 'password')],
        ]
      },
      email: {
        required: true,
        unique: true,
        validators: [
          [validator.isEmail, i18n('errors.validation.valueLimit.invalidFormat', 'email')]
        ]
      },
      role: {
        required: true
      }
    }
  },
}

module.exports = schemas
