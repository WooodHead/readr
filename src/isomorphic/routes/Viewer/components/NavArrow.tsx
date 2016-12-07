import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
const styles = require('./NavArrow.scss')

interface Props {
  forward: () => void
  backward: () => void
}

@CSSModules(styles)
export default class NavArrow extends Component<Props, void> {

  constructor(props) {
    super(props)
  }

  handleForwardClick() {
    this.props.forward()
  }

  handleBackwardClick() {
    this.props.backward()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div styleName="navs">
        <div styleName="nav-left" onClick={this.handleBackwardClick.bind(this)}>-</div>
        <div styleName="nav-right" onClick={this.handleForwardClick.bind(this)}>+</div>
      </div>
    )
  }
}
