import React from 'react'
import { Route, IndexRedirect, IndexRoute } from 'react-router'
import Master from './components/Master'
import App from './components/App'
import Console from './components/Console'
import restAPI from './webAPI'

const configRoutes = (context = {}) => {
  // server side needs injected cookie
  const { cookie } = context as any

  const authorize = (roles: Roles[]) => (nextState, replace, callback?) => {
    // store may also be the option
    // but may have security issues
    // and will not be changed when session expires
    // so we still need to call to check on every enter
    restAPI.auth(cookie).then(res => {
      if (roles.indexOf(res.json.role) === -1) {
        // todo: use 404
        replace('/')
      }
      callback()
    })
  }

  return (
    <Route path="/" component={Master}>
      <Route path="viewer/book/:id" getComponent={() => require.ensure([], require => require('./containers/Viewer').default)} />
      <Route path="viewer/v2/book/:id" getComponent={() => require.ensure([], require => require('./containers/Viewer2').default)} />
      <Route path="authors" getComponent={() => require.ensure([], require => require('./containers/Authors/Authors').default)} />
      <Route component={App}>
        <IndexRoute getComponent={() => require.ensure([], require => require('./containers/AppHome').default)} />
        <Route path="browse" getComponent={() => require.ensure([], require => require('./containers/Browse').default)} />
        <Route path="book/:id" getComponent={() => require.ensure([], require => require('./containers/BookDetail').default)} />
        <Route path="collections" getComponent={() => require.ensure([], require => require('./containers/Collections').default)} />
        <Route path="collections/:id" getComponent={() => require.ensure([], require => require('./containers/CollectionDetail').default)} />
        <Route path="signin" getComponent={() => require.ensure([], require => require('./containers/Signin').default)} />
        <Route path="signup" getComponent={() => require.ensure([], require => require('./containers/Signup').default)} />
        <Route onEnter={authorize(['user', 'admin'])} path="user">
          <IndexRedirect to="/user/profile" />
          <Route path="shelf" getComponent={() => require.ensure([], require => require('./containers/Shelf').default)} />
          <Route path="preference" getComponent={() => require.ensure([], require => require('./containers/Preference').default)} />
          <Route path="profile" getComponent={() => require.ensure([], require => require('./containers/Profile').default)} />
        </Route>
      </Route>
      <Route onEnter={authorize(['admin'])} path="console" component={Console}>
        <IndexRedirect to="/console/books" />
        <Route path="books" getComponent={() => require.ensure([], require => require('./containers/ManageBooks').default)} />
        <Route path="users" getComponent={() => require.ensure([], require => require('./containers/ManageUsers').default)} />
        <Route path="books/new" getComponent={() => require.ensure([], require => require('./containers/AddBook').default)} />
        <Route path="collections/new" getComponent={() => require.ensure([], require => require('./containers/AddCollection').default)} />
      </Route>
      <Route path="*" getComponent={() => require.ensure([], require => require('./containers/NoMatch').default)} />
    </Route>
  )
}

export default configRoutes
