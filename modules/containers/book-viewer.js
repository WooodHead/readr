import React, { Component } from 'react'
import { Link } from 'react-router'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BookPageList from 'components/book-page-list'

import * as actions from 'actions'

import { genPageList } from 'utils/filters'
import { convertPercentageToPage } from 'utils/book'
import { delayStuff } from 'utils'

import $ from 'jquery'

class BookViewer extends Component {

  scrollToLoadPages() {
    let pageSum = this.props.book.content.pageSum
    let percentage = (document.body.scrollTop/(this.props.book.view.style.height*pageSum)).toFixed(4)

    this.props.actions.loadPages(convertPercentageToPage(percentage, pageSum))
  }

  constructor(props) {
    super(props)
    this.bookId = props.params.id
  }

  addEventListeners() {
    window.addEventListener("scroll", delayStuff(this.scrollToLoadPages, 100).bind(this))
  }

  componentDidMount() {
    let mode = "VERTICAL"
    let screen = "HD"
    var book = this.props.book
    let actions = this.props.actions
    let bookId = this.bookId

    if($(window).width() < 768) {
      screen = "MOBILE"
    }

    actions.dispatchWrap(function(dispatch, getState){
      actions.loadBookContentFromCache(bookId)

      // check if content is cached
      if(getState().book.content.cacheReadingState !== 'SUCCESS') {
        actions.fetchBookContent(bookId).then(getState=>{
          actions.setViewMode(mode)
          actions.setViewScreen(screen)
          actions.calculateBookContent(getState().book.content.nodes, getState().book.view.style.height)
          actions.cacheBookContent(bookId, getState().book.content)
          actions.cacheView(bookId, getState().book.view)
          actions.loadPages(1)
          this.addEventListeners()
        })
      }else{
        actions.loadViewFromCache(bookId)

        // check if view is cached
        if(getState().book.view.cacheReadingState !== 'SUCCESS') {
          actions.setViewMode(mode)
          actions.setViewScreen(screen)
          actions.cacheView(bookId, getState().book.view)
        }

        actions.loadPages(1)
        this.addEventListeners()
      }
    }.bind(this))
  }

  render() {
    let book = this.props.book
    let pages = []
    let quantity = 5
    let startPage = 1
    let offset = 2
    let height = "100%"

    if(book.content.nodes.length) {
      if(book.isPagesLoaded) {
        pages = genPageList(book.currentPage, quantity, offset, book.content.nodes, {pageHeight: book.view.style.height})
        height = book.content.pageSum * book.view.style.height
      }else{
        pages = [
          {
            props: {
              children: book.content.nodes,
              pageNo: "NA"
            },
            type: "page",
          }
        ]
      }
    }

    return (
      <div className="page-book-viewer">
        <div className="functions" style={{display: "none"}}>
          <div className="container">
            <span className="home">
              <Link to="/bookstore"></Link>
            </span>
            <span className="title"></span>
            <span className="loc">{book.currentPage}</span>
          </div>
        </div>
        {
          (()=>{
            if(book.content.nodes.length) {
              return (
                <BookPageList isCalculated={book.content.isCalculated} height={height} view={book.view} bookId={this.bookId} pages={pages} />
              )
            }
          })()
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.book
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookViewer)
