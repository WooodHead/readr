import React from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import App from 'containers/App'
import NoMatch from 'containers/NoMatch'
import Home from 'containers/Home'
import BookViewer from 'containers/BookViewer'
import BookStore from 'containers/BookStore'
import Signin from 'containers/Signin'
import Signup from 'containers/Signup'
import AddBook from 'containers/AddBook'
import BookInfo from 'containers/BookInfo'

export default (
  <Router path="/" component={App}>
    <IndexRoute component={BookStore}/>
    <Route path="signin" component={Signin}/>
    <Route path="Signup" component={Signup}/>
    <Route path="addbook" component={AddBook}/>
    <Route path="bookstore/book/:id" component={BookInfo}/>
    <Route path="book/:id" component={BookViewer}/>
  </Router>
)
