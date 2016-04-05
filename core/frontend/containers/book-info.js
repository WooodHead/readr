import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { Link } from 'react-router'
import 'whatwg-fetch'
import { URL_BOOKS } from 'constants/api-urls'
import { URL_DOUBAN_BOOKS } from 'constants/api-urls'
import $ from 'jquery'

import Branding from 'components/branding'

class BookInfo extends Component {
  loadBooksFromServer() {
    fetch(URL_BOOKS+this.bookId).then(function(res){
      return res.json()
    }).then(function(json){

      let url
      if(!json.data) {
        url = URL_DOUBAN_BOOKS+this.bookId
      }else{
        this.setState({data: json.data[0]})
        url = URL_DOUBAN_BOOKS+json.data[0].douban_item_id
      }

      $.ajax({
        url: url,
        dataType: "jsonp"
      }).done(function(data){
        this.setState({
          dataFromDouban: data
        })
      }.bind(this))

    }.bind(this)).catch(err => {
      console.error(err)
    })
  }

  constructor(props) {
    super(props)
    this.bookId = props.params.id
    this.state = {
      data: {},
      dataFromDouban: {}
    }
  }

  componentDidMount() {
    this.loadBooksFromServer()
  }

  render() {
    let data = this.state.data
    let dataFromDouban = this.state.dataFromDouban
    var readBtn

    if(data.id) {
      readBtn = (
        <Link to={`/book/${data.id}`}><Button color="primary">阅读</Button></Link>
      )
    }

    return (
      <div className="page-book-info">
        <Branding />
        <Container>
          <div className="book-info">
            <h1 className="page-title book-name">{dataFromDouban.title}</h1>
            <div className="book-author">{dataFromDouban.author}</div>
            {
              (()=>{
                if(dataFromDouban.image) {
                  return (
                    <div className="book-cover">
                    <img src={dataFromDouban.image} />
                    </div>
                  )
                }
              })()
            }
            <div className="book-author-intro">作者简介：{dataFromDouban.author_intro}</div>
            <div className="book-summary">内容简介：{dataFromDouban.summary}</div>
            {readBtn?readBtn:null}
          </div>
        </Container>
      </div>
    )
  }
}

export default BookInfo
