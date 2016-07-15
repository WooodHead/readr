import React, { Component } from 'react'
import { Link, match } from 'react-router'
import { connect } from 'react-redux'
import Branding from 'components/Branding'
import Container from 'elements/Container'
import Colophon from 'components/Colophon'
import { userAuth } from 'actions/index'
import Notification from 'components/Notification'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
// const style = require('./App.css')
const styles = require('./App.css')
import Button from 'elements/Button'


@CSSModules(styles)
class App extends Component<any, any> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.userAuth()
  }

  render() {
    let isAdmin = false
    let username = null

    if (this.props.session.user.role !== 'visitor') {
      isAdmin = this.props.session.user.role === 'admin'
      username = this.props.session.user.username
    }

    return (
      <div>
        <Branding styleName="fuck" isAdmin={isAdmin} username={username} />
        <Button {...{styleName: 'btn'}}>test</Button>
        <Container>
          {this.props.children}
        </Container>
        <Colophon />
      </div>
    )
  }
}

// export default App

export default connect(
  state => ({
    notification: state.components.notification,
    session: state.session
  }),
  { userAuth } as any
)(App)
