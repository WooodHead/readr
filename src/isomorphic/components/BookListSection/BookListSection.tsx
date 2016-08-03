import React, { Component } from 'react'
import { Link } from 'react-router'
import BookList from '../BookList'
import CSSModules from 'react-css-modules'
const styles = require('./_book-list-section.scss')

interface Props {
  bookEntities: any
  title?: string
  moreLink?: string
}

@CSSModules(styles, {
  allowMultiple: true
})
class BookListSection extends Component<Props, any> {
  render() {

    let title = this.props.title
    let moreLink = this.props.moreLink ? this.props.moreLink : null

    return (
      <div className="book-list-section">
        {
          this.props.title && (
            <h2 className="section-title">{title}</h2>
          )
        }
        {
          moreLink ? (
            <Link className="more" to={moreLink}>查看更多</Link>
          ) : null
        }
        <BookList bookEntities={this.props.bookEntities} />
      </div>
    )
  }
}

export default BookListSection