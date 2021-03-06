import React, { Component } from 'react'
import PT from 'prop-types'
import BookPage from './BookPage'
import './FlippableBookPage.scss'
import { progressToPage, pageToProgress } from './progress'

class FlippableBookPage extends Component {
  static propTypes = {
    progress: PT.number.isRequired,
    pages: PT.array.isRequired,
    config: PT.object.isRequired,
    bookInfo: PT.object.isRequired,
    onProgressChange: PT.func.isRequired,
    onLinkClick: PT.func,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  }

  goToPage = pageNo => {
    this.props.onProgressChange(pageToProgress(pageNo, this.props.pages.length))
    if (!this.props.config.scrollMode) {
      document.documentElement.scrollTop = 0
    }
  }

  nextPage = () => {
    this.goToPage(this.clientCurrPage + 1)
  }

  prevPage = () => {
    this.goToPage(this.clientCurrPage - 1)
  }

  handleKeydown = e => {
    switch (e.keyCode) {
      case 39:
        this.nextPage()
        break

      case 37:
        this.prevPage()
        break

      default:
        break
    }
  }

  renderNav = () => {
    return (
      <div styleName="nav-wrap">
        <div styleName="nav-inner">
          <div styleName="prev" onClick={this.prevPage} />
          <div styleName="next" onClick={this.nextPage} />
        </div>
      </div>
    )
  }

  render() {
    const { pages, config: { contentWidth }, bookInfo: { title }, progress, onLinkClick } = this.props
    const wrapStyle = {
      maxWidth: contentWidth || 'auto'
    }
    const clientCurrPage = progressToPage(progress, pages.length)
    this.clientCurrPage = clientCurrPage
    const page = pages[clientCurrPage - 1]

    return (
      <div styleName="page--flip" style={wrapStyle}>
        {this.renderNav()}
        <div styleName="title">{title}</div>
        <BookPage
          page={page}
          config={this.props.config}
          onLinkClick={onLinkClick}
        />
        <div styleName="page-no">{clientCurrPage}</div>
      </div>
    )
  }
}

export default FlippableBookPage
