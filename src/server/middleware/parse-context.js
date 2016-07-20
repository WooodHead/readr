const _ = require('lodash')

module.exports = function parseContext(req, res, next) {
  if (req.session.user) {
    req.context = {
      user: _.omit(req.session.user, ['password', 'dateCreated', 'email'])
    }
  } else {
    req.context = {
      user: {
        userRole: 'visitor'
      }
    }
  }

  next()
}
