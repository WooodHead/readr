import React, { Component } from 'react'
import { Link } from 'react-router'
import Immutable from 'immutable'
import { connect } from 'react-redux'

import BookPageList from 'components/book-page-list'
import { fetchBookContentIfNeeded, setViewScreen, setViewMode, customizeView, calculateBookContent, loadBookContentFromCache, cacheBookContent, loadPages } from 'actions'

import { genPageList } from 'utils/filters'
import { convertPercentageToPage } from 'utils/book'
import { delayStuff } from 'utils'

import $ from 'jquery'

class BookViewer extends Component {

  scrollToLoadPages() {
    let pageSum = this.props.book.content.pageSum
    let percentage = (document.body.scrollTop/(this.props.book.view.style.height*pageSum)).toFixed(4)

    this.props.loadPages(convertPercentageToPage(percentage, pageSum))
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
    let book = this.props.book

    if($(window).width() < 768) {
      screen = "MOBILE"
    }

    this.props.fetchBookContentIfNeeded(this.bookId, function(){
      this.props.setViewMode(mode)
      this.props.setViewScreen(screen)
      this.props.calculateBookContent(this.props.book.content.nodes, this.props.book.view.style.height)
      this.props.cacheBookContent(this.bookId, this.props.book.content)
      this.props.loadPages(1)
      this.addEventListeners()
    }.bind(this), function(){
      // todo: load view from cache
      this.props.setViewMode(mode)
      this.props.setViewScreen(screen)
      // console.log(this.props.book.view.style.height);
      console.log(this);
      this.props.loadPages(1)
      this.addEventListeners()

    })
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
        pages = genPageList(book.currentPage, quantity, offset, book.content.nodes, {pageHeight: 900})

        // todo: reduce
        // height = book.content.nodes.reduce((a,b)=>a.props.style.height+b.props.style.height)
        // height = book.content.nodes.reduce((a,b)=>{
        //   console.log(a.props);
        //   console.log(b.props.style.height);
        //   return a.props.style.height+b.props.style.height
        // })

        height = 0
        for (var i = 0; i < book.content.nodes.length; i++) {
          height += book.content.nodes[i].props.style.height
        }
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

export default connect(
  mapStateToProps,
  { fetchBookContentIfNeeded, setViewScreen, setViewMode, customizeView, calculateBookContent, cacheBookContent, loadBookContentFromCache, loadPages }
)(BookViewer)
