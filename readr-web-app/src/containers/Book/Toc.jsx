import React, { Component } from 'react'
// todo
import { browserHistory } from 'react-router'
import PT from 'prop-types'

// interface Props {
//   toc: Schema.TocItem[]
//   onLinkClick?: (href: string) => void
//   linkTpl?: (sectionId: string, hash: string) => string
// }

export default class BookToc extends Component {
  static propTypes = {
    onLinkClick: PT.func,
    linkTpl: PT.func,
    toc: PT.array.isRequired,
  }

  _handleLinkClick(href) {
    return (e) => {
      if (this.props.onLinkClick) {
        this.props.onLinkClick(href)
      } else {
        browserHistory.push(href)
      }
      return false
    }
  }

  renderLink(sectionId, hash, label) {
    const defaultLinkTpl = () => {
      return hash
        ? `#${sectionId},${hash}`
        : `#${sectionId}`
    }
    const linkTpl = this.props.linkTpl || defaultLinkTpl
    const href = linkTpl(sectionId, hash)

    return <a onClick={this._handleLinkClick(href)} className="text-link" href={href}>{label}</a>
  }

  renderNav(list) {
    return (
      <ul>
        {
          list.map((item, index) => {
            const _renderLink = () => {
              return this.renderLink(item.sectionId, item.hash, item.name)
            }

            if (item.children) {
              return (
                <li key={index}>
                  {_renderLink()}
                  {this.renderNav(item.children)}
                </li>
              )
            }

            return (
              <li key={index}>
                {_renderLink()}
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return this.renderNav(this.props.toc)
  }
}
