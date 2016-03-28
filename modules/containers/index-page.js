import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import utils from 'utils'
var { vent } = utils

import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import 'whatwg-fetch'

import { Branding } from 'components/page-parts'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from 'actions'

function mapStateToProps(state) {
  return {
    lang: state.lang
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

var Index = React.createClass({
  componentWillMount: function(){
  },
  componentDidMount: function(){
    if(navigator.language === "zh-CN") {
      this.props.actions.setLang("cn")
    }else{
      this.props.actions.setLang("en")
    }
  },
  render: function(){
    var { lang, actions } = this.props
    return (
      <div className="page-home">
        <Branding />
        <Container>
          <IndexContent lang={lang} actions={actions} />
        </Container>
        <div className="colophon">
        	<Container>
            <div className="social-links">
              <a href="https://github.com/gaoxiaoliangz"><span className="icon-github"></span>GitHub</a>
              <a href="mailto:gaoxiaoliangz@gmail.com"><span className="icon-mail"></span>Email</a>
            </div>
          </Container>
        </div>
      </div>
    )
  }
})

var IndexContent = React.createClass({
  render: function(){
    var { lang, actions } = this.props
    var content
    var cnContent = (
      <div>
        <h1 className="page-title">欢迎</h1>
        <Link to="/bookstore">查看书城</Link>
      </div>
    )
    var enContent = (
      <div>
        <h1 className="page-title">Welcome</h1>
        <Link to="/bookstore">visit bookstore</Link>
      </div>
    )

    if(lang === "cn"){
      content = cnContent
    }else if(lang === "en"){
      content = enContent
    }
    return (
      <div>
        <section className="info">
          {content}
        </section>
        <LangSwitcher lang={lang} actions={actions}/>
      </div>
    )
  }
})

var LangSwitcher = React.createClass({
  render: function(){
    var { lang, actions } = this.props
    return (
      <div className={"set-lang "+lang}>
        <span className="lang-cn" onClick={actions.setLang.bind(this,"cn")}>中文</span>
        <span className="sep">|</span>
        <span className="lang-en" onClick={actions.setLang.bind(this,"en")}>English</span>
      </div>
    )
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)