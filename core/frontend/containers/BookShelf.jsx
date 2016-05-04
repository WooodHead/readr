import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchBookList } from 'actions'
import BookListSection from 'components/BookListSection'

class BookShelf extends Component{

  static fetchData({store, params}) {
    return store.dispatch(fetchBookList('user'))
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBookList('user')
  }

  render(){
    let bookList = this.props.bookListUser

    return (
      <div>
        <BookListSection bookList={bookList} title="我的书架" />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { bookList },
    entities: { books }
  } = state

  const genList = (whichPagination) => (
    whichPagination?whichPagination.ids.map(id => books[id]):[]
  )

  return {
    bookListUser: genList(bookList['user']),
  }
}

export default connect(
  mapStateToProps,
  { fetchBookList }
)(BookShelf)
