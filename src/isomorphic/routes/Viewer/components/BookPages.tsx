import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification } from '../../../store/actions'
import BookPage from './BookPage'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
import * as selectors from '../../../store/selectors'
import _ from 'lodash'
const styles = require('./BookPages.scss')

interface Props {
  pages: TBookPage[]
}

interface AllProps extends Props {
  sendNotification?: typeof sendNotification
  theme?: string
  isScrollMode?: boolean
  isCalcMode?: boolean
  pageHeight?: number
  fluid?: boolean
  computed?: TBookPage[]
  currentPageNo?: number
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  const computed = selectors.viewer.computed(config.bookId)(state)
  const currentPageNo = selectors.viewer.progress(config.bookId)(state).pageNo

  return _.assign({}, config, { computed, currentPageNo })
}

@connect<AllProps>(
  mapStateToProps,
  { sendNotification }
)
@CSSModules(styles, {
  allowMultiple: true
})
export default class BookPages extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
  }

  // 写成 decorator 的形式？
  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  render() {
    const { pages, fluid, computed, theme, isScrollMode, pageHeight, isCalcMode, currentPageNo } = this.props
    const totalHeight = computed.length * pageHeight
    const className = classnames({
      'pages': !fluid,
      'pages--fluid': fluid,
      [theme && theme.toLocaleLowerCase()]: Boolean(theme)
    })

    const ulHeight = isCalcMode
      ? 'auto'
      : (
        isScrollMode
          ? totalHeight
          : pageHeight
      )

    const ulStyle = { height: ulHeight }

    return (
      <ul styleName={className} style={ulStyle}>
        {
          pages.map((page, index) => {
            const active = page.meta && page.meta.pageNo === currentPageNo

            return (
              <BookPage
                fluid={fluid}
                page={page}
                pageHeight={pageHeight}
                key={index}
                active={active}
                />
            )
          })
        }
      </ul>
    )
  }
}