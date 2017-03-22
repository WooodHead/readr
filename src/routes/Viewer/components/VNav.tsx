import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as actions from '../../../actions'
import * as selectors from '../../../selectors'
import preventScroll from '../../../utils/browser/preventScroll'
import { resolveBookLocation } from '../utils'
import $ from 'jquery'
import styles from './VNav.scss'
import schemas from '../../../schemas'
import Icon from '../../../components/Icon'

const JS_NAV_HOOK = 'a.js-book-nav'

interface Props { }

interface AllProps {
  nav: TBookNav[]
  viewerGoTo: typeof actions.viewer.viewerGoTo,
  sendNotification: typeof actions.sendNotification
  computedPages: TBookPage[]
  config: Viewer.Config
  bookInfo: SelectedEntity
}

const mapStateToProps = (state, ownProps) => {
  const bookId = selectors.viewer.id(state)
  const bookInfo = selectors.entity(schemas.BOOK, bookId)(state)
  const nav = selectors.viewer.navData(bookId)(state)
  const computedPages = selectors.viewer.computed(bookId)(state)
  const config = selectors.viewer.config(state)

  return { nav, computedPages, config, bookInfo }
}

@CSSModules(styles)
class VNav extends Component<AllProps, void> {

  $body: any

  constructor(props) {
    super(props)
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this)
  }

  handleNavLinkClick(e) {
    e.preventDefault()
    const { computedPages } = this.props
    const href = $(e.target).attr('href')

    try {
      const pageNo = resolveBookLocation(href, computedPages)
      const percentage = (pageNo - 1) / computedPages.length

      this.props.viewerGoTo(percentage)
    } catch (error) {
      this.props.sendNotification(error.message, 'error')
    }
  }

  componentDidMount() {
    this.$body = $('body')
    preventScroll.init('.js-nav-scroll')
    this.$body.on('click', JS_NAV_HOOK, this.handleNavLinkClick)
  }

  componentWillUnmount() {
    preventScroll.destroy('.js-nav-scroll')
    this.$body.off('click', JS_NAV_HOOK, this.handleNavLinkClick)
  }

  renderLink(ref, hash, label) {
    if (hash) {
      return <a className="js-book-nav text-link" href={`#${ref}$${hash}`}>{label}</a>
    }
    return <a className="js-book-nav text-link" href={`#${ref}`}>{label}</a>
  }

  renderNav(navList: TBookNav[]) {
    return (
      <ul>
        {
          navList.map((item, index) => {
            if (item.children) {
              return (
                <li key={index}>
                  {this.renderLink(item.ref, item.hash, item.label)}
                  {this.renderNav(item.children)}
                </li>
              )
            }

            return (
              <li key={index}>
                {this.renderLink(item.ref, item.hash, item.label)}
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    const { nav, config: { fluid, width }, bookInfo } = this.props
    const _width = fluid ? (width - 50) : 300
    const navStyle = {
      // width: _width,
      // left: fluid ? -55 : -20
    }

    return (
      <div className="js-nav-scroll" styleName="viewer-nav" style={navStyle}>
        <div styleName="title">
          {/*<Logo
            dark
          />*/}
          <span>书架</span>
          <Icon name="book" size={30} />
        </div>
        <div styleName="wrap">
          <div styleName="book-title">{bookInfo.title}</div>
          {this.renderNav(nav)}
        </div>
      </div>
    )
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps,
  {
    viewerGoTo: actions.viewer.viewerGoTo,
    sendNotification: actions.sendNotification
  }
)(VNav)
