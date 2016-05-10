import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ApiRoots from 'constants/ApiRoots'
import { fetchDoubanBookSearchResults, clearBookSearch, handleNotification } from 'actions'
import callApi from 'utils/callApi'
import Notification from 'components/Notification'
import Input from 'elements/Input'
import Button from 'elements/Button'
import SelectizeInput from 'elements/SelectizeInput'
import Modal from 'elements/Modal'
import _ from 'lodash'
import apis from 'utils/apis'

const ReactSelectize = require("react-selectize");
const SimpleSelect = ReactSelectize.SimpleSelect;
const MultiSelect = ReactSelectize.MultiSelect;

class AddBook extends Component {
  constructor(props) {
    super(props)
    this.defaultState = {
      searchQuery: "",
      currentBook: -1,
      previewIndex: -1,
      conformed: false,
      bookTitle: '',

      bookCover: '',
      bookDescription: '',
      bookContent: '',
      dbQuery: '',
      dbBook: [],

      authorSearch: [],
      bookAuthor: [],
      isAddAuthorModalVisible: false
    }
    this.state = this.defaultState
    this.fetchDoubanBookSearchResults = _.debounce(this.props.fetchDoubanBookSearchResults, 150)
  }

  handleAddBook(e) {
    const data = {
      title: this.state.bookTitle,
      description: this.state.bookDescription,
      content: this.state.bookContent,
      author: '567890',
      cover: this.state.bookCover
    }
    console.log(data);
    apis.addBook(data).then(result => {
      this.props.handleNotification('添加成功')
    }, error => {
      this.props.handleNotification(err.message)
    })
    e.preventDefault()
  }

  search(event) {
    let query = event.target.value

    this.setState({
      searchQuery: query,
      dbQuery: query
    })
    if(query !== '') {
      this.fetchDoubanBookSearchResults(query)
    }
  }

  searchAuthors(event) {
    let query = event.target.value

    if(query !== '') {
      apis.searchAuthors(query).then(response => {
        console.log(response)
        this.setState({
          authorSearch: response
        })
      })
    }
  }

  render() {
    let book = null
    let searchResultIds = this.props.doubanBookSearchResults[this.state.searchQuery] ?
      this.props.doubanBookSearchResults[this.state.searchQuery].ids : []
    let doubanBooks = this.props.doubanBooks
    let searchResults = searchResultIds.map(id => doubanBooks[id])

    return (
      <form>
        <Modal
          width={600}
          isVisible={this.state.isAddAuthorModalVisible}
          onRequestClose={() => {
            this.setState({
              isAddAuthorModalVisible: false
            })
          }}
        >
          <h1 className="page-title" style={{marginTop: 0}}>Add author</h1>
          <Input
            onChange={event => {
              this.setState({
                authorName: event.target.value
              })
            }}
            value={this.state.authorName}
            placeholder="Name"
          />
          <Input
            onChange={event => {
              this.setState({
                authorSlug: event.target.value
              })
            }}
            value={this.state.authorSlug}
            placeholder="Slug"
          />
          <Button>Add</Button>
        </Modal>
        <Notification notification={this.props.notification} />
        <h1 className="page-title">Add Book</h1>
        <SelectizeInput
          ref="bookTitle"
          onChange={this.search.bind(this)}
          onValuesChange={(targetIndex, type) => {
            switch (type) {
              case 'ADD':
                this.setState({
                  dbBook: [...this.state.dbBook, searchResults[targetIndex]],
                  bookCover: searchResults[targetIndex].image,
                  bookDescription: searchResults[targetIndex].summary
                })
                // this.refs.bookAuthor.setState({
                //   value: searchResults[targetIndex].author
                // })
              break

              case 'REMOVE':
                this.setState({
                  dbBook: this.state.dbBook.filter((value, index) => (targetIndex !== index?true:false))
                })
              break

              default:
                console.error('Undefined type')
            }
          }}
          options={searchResults.map(a => ({
            value: a.title,
            subInfo: a.author,
            thumb: a.image
          }))}
          values={this.state.dbBook.map(book => book.title)}
          placeholder="Book title"
          addNewValue={() => {
            let value = ReactDOM.findDOMNode(this.refs.bookTitle).querySelector('input').value
            this.setState({
              dbBook: [...this.state.dbBook, {title: value}]
            })
            this.refs.bookTitle.clearState()
          }}
        />

        <SelectizeInput
          ref="bookAuthor"
          onChange={this.searchAuthors.bind(this)}
          onValuesChange={(targetIndex, type) => {
            switch (type) {
              case 'ADD':
                this.setState({
                  bookAuthor: [...this.state.bookAuthor, this.state.authorSearch[targetIndex]]
                })
              break

              case 'REMOVE':
                this.setState({
                  bookAuthor: this.state.bookAuthor.filter((value, index) => (targetIndex !== index?true:false))
                })
              break

              default:
                console.error('Undefined type')
            }
          }}
          options={this.state.authorSearch.map(a => a.name)}
          values={this.state.bookAuthor.map(a => a.name)}
          placeholder="Author"
          addNewValue={() => {
            this.setState({
              bookAuthor: [...this.state.bookAuthor, { name: this.refs.bookAuthor.state.value }],
              isAddAuthorModalVisible: true
            })
            this.refs.bookAuthor.clearState()
          }}
        />

        <Input
          onChange={event => {
            this.setState({
              bookCover: event.target.value
            })
          }}
          value={this.state.bookCover}
          placeholder="Cover"
        />

        <textarea
          placeholder="Description"
          style={{height: 100}}
          value={this.state.bookDescription}
          onChange={event => {
            this.setState({
              bookDescription: event.target.value
            })
          }}
        />

        <textarea
          placeholder="Paste book content here"
          style={{height: 100}}
          value={this.state.bookContent}
          onChange={event => {
            this.setState({
              bookContent: event.target.value
            })
          }}
        />

        <Button onClick={this.handleAddBook.bind(this)}>Add</Button>
      </form>
    )
  }
}

export default connect(
  state => ({
    doubanBookSearchResults: state.pagination.doubanBookSearchResults,
    doubanBooks: state.entities.doubanBooks,
    notification: state.components.notification
  }),
  { fetchDoubanBookSearchResults, handleNotification }
)(AddBook)
