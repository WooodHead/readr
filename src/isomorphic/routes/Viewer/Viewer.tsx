import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import BookPageList from './components/BookPageList'
import * as viewerUtils from './Viewer.utils'
import { loadBook, fetchProgress, openConfirmModal, initializeBookProgress, destroyBookProgress, loadBookContent } from '../../store/actions'
import _ from 'lodash'
import ViewerPanel from './components/ViewerPanel'
import BookChapters from './components/BookChapters'
import BookPageWithRawHtml from './components/BookPageWithRawHtml'
import BookPages from './components/BookPages'
import ViewerNav from './components/ViewerNav'
import CSSModules from 'react-css-modules'
import api from '../../services/api'
import utils from '../../utils'
import DocContainer from '../../containers/DocContainer'
import * as selectors from '../../store/selectors'
import Loading from '../../elements/Loading'
import * as bookPageListUtils from './components/BookPageList.utils'
const styles = require('./Viewer.scss')

interface AllProps {
  loadBook: loadBook
  loadBookContent: loadBookContent
  book: any
  bookContent: {
    nav: any
    flesh: TBookFlesh
  }
  fetchProgress: (bookId: string) => void
  progress: number
  openConfirmModal: (data: openConfirmModal) => void
  session: any
  isFetchingProgress: boolean
  initializeBookProgress: any
  destroyBookProgress: any
}

interface State {
  showPanel?: boolean
  isCalcMode?: boolean
  nodeHeights?: number[]
  nodes?: string[]
  showViewerPreference?: boolean
  fluid?: boolean
  isTouchMode?: boolean
  showPageInfo?: boolean
  computedChapters?: any[]
  computedPages?: any[]
}

@CSSModules(styles)
class Viewer extends Component<AllProps, State> {

  constructor(props) {
    super(props)

    this.bookId = props.params.id
    this.state = {
      showPanel: false,
      isCalcMode: true,
      nodeHeights: [],
      nodes: [],
      showViewerPreference: false,
      fluid: false,
      isTouchMode: false,
      computedChapters: [],
      computedPages: []
    }
    this.handleViewerClick = this.handleViewerClick.bind(this)
    this.handelViewerMouseMove = this.handelViewerMouseMove.bind(this)
    this.handleProgressChange = this.handleProgressChange.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.deboundedHandleResize = _.debounce(this.handleResize, 500, {
      maxWait: 1000
    })
    this.handleChapterUpdate = this.handleChapterUpdate.bind(this)
  }

  bookId: string
  bookPageWithRawHtml: any
  deboundedHandleResize: any

  isViewFluid(): boolean {
    return utils.getScreenInfo().view.width < 700
  }

  isTouchMode(): boolean {
    return utils.getScreenInfo().view.width < 700
  }

  setProgress(percentage) {
    api.setProgress(this.bookId, { percentage })
  }

  handelViewerMouseMove(event) {
    if (!this.state.isCalcMode && !this.state.isTouchMode) {
      let y = event.pageY - document.body.scrollTop
      let dToScreenRight = utils.getScreenInfo().view.width - event.pageX

      this.setState({
        showPanel: y < 90,
        showPageInfo: dToScreenRight < 100
      })
    }
  }

  handleResize() {
    this.setState({
      fluid: this.isViewFluid(),
      isTouchMode: this.isTouchMode()
    })
  }

  handleProgressChange(newProgress) {
    const { isFetchingProgress, session: { user: { role } } } = this.props
    const progressDetermined = typeof isFetchingProgress !== 'undefined' || this.props.isFetchingProgress !== false

    if (progressDetermined && role !== 'visitor') {
      this.setProgress(newProgress)
    }
  }

  handleViewerClick() {
    if (this.state.isTouchMode) {
      this.setState({
        showPanel: !this.state.showPanel,
        showPageInfo: !this.state.showPageInfo
      })
    }
  }

  calcDom(wrap: HTMLElement) {
    const { bookContent } = this.props
    const startCalcHtmlTime = new Date().valueOf()
    const computedChapters = Array.prototype
      .map.call(wrap.childNodes, child => {
        const childDiv = child as HTMLDivElement
        const id = childDiv.getAttribute('id')
        const nodeHeights = viewerUtils.getNodeHeights(childDiv.querySelector('.lines').childNodes)

        return {
          id,
          nodeHeights
        }
      })
    const endCalcHtmlTime = new Date().valueOf()

    if (process.env.NODE_ENV !== 'production') {
      console.info(`Calculating html takes ${endCalcHtmlTime - startCalcHtmlTime}ms`)
    }

    const computedPages = bookPageListUtils.groupPageFromChapters(bookContent.flesh, computedChapters, 900)

    this.setState({
      computedChapters,
      computedPages
    })

    // this.setState({
    //   isCalcMode: true
    // }, () => {
    //   const contentHtml = this.bookPageWithRawHtml.getContentHtml()
    //   const nodeHeights = viewerUtils.getNodeHeights(contentHtml.childNodes)
    //   this.setState({
    //     nodeHeights,
    //     isCalcMode: false
    //   })
    // })
  }

  handleChapterUpdate(ele: HTMLElement) {
    this.calcDom(ele)
  }

  addEventListeners() {
    window.addEventListener('resize', this.deboundedHandleResize)
  }

  removeEventListeners() {
    window.removeEventListener('resize', this.deboundedHandleResize)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  componentWillReceiveProps(nextProps, nextState) {
    // const shoudCalcNodes = (_.isEmpty(this.props.bookContent) && !_.isEmpty(nextProps.bookContent))
    //   || this.state.nodes.length === 0 && !_.isEmpty(this.props.bookContent)

    // const sessionDetermined = this.props.session.determined === false && nextProps.session.determined === true

    // if (sessionDetermined && nextProps.session.user.role !== 'visitor') {
    //   this.props.fetchProgress(this.bookId)
    // }

    // if (sessionDetermined && nextProps.session.user.role === 'visitor') {
    //   this.props.initializeBookProgress()
    // }

    // if (shoudCalcNodes) {
    //   const mdArr = nextProps.bookContent.flesh.map(item => item.markdown)
    //   const allContentStr = mdArr.join('\n\n')
    //   const nodes = viewerUtils.markdownToNodeStringList(allContentStr)

    //   this.setState({
    //     nodes,
    //     fluid: this.isViewFluid(),
    //     isTouchMode: this.isTouchMode()
    //   })
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    // const hasBookNodesLoaded = this.state.nodes.length !== 0 && prevState.nodes.length === 0
    // const viewChanged = this.state.fluid !== prevState.fluid

    // if (hasBookNodesLoaded || viewChanged) {
    //   this.calcDom()
    // }
  }

  componentDidMount() {
    const { session } = this.props
    this.props.loadBook(this.bookId)
    this.props.loadBookContent(this.bookId)
    this.addEventListeners()

    // 从其他页面直接进来的话 session 一开始就是确定的
    if (session.determined && session.user.role !== 'visitor') {
      this.props.fetchProgress(this.bookId)
    }
  }

  componentWillUnmount() {
    this.removeEventListeners()
    this.props.destroyBookProgress()
  }

  renderViewPanel() {
    return (this.state.showPanel || this.state.showViewerPreference) && (
      <ViewerPanel
        title={this.props.book.title}
        showViewerPreference={this.state.showViewerPreference}
        onPrefVisibilityChange={newVisibility => {
          this.setState({
            showViewerPreference: newVisibility
          })
        } }
        />
    )
  }

  renderBook() {
    const { nodes, nodeHeights, fluid, showPageInfo, computedChapters, computedPages } = this.state
    const { progress, bookContent } = this.props

    // if (nodes.length === 0) {
    //   return <Loading text="书籍获取中" center />
    // }

    // if (this.state.isCalcMode) {
    //   return (
    //     <BookPageWithRawHtml
    //       nodes={nodes}
    //       ref={ref => { this.bookPageWithRawHtml = ref } }
    //       fluid={fluid}
    //       />
    //   )
    // } else {
    //   // 移除了获取等待
    //   // 一旦获取到进度，会使页面直接跳转过去
    //   return (
    //     <BookPageList
    //       nodeHeights={nodeHeights}
    //       nodes={nodes}
    //       pageCount={5}
    //       initialProgress={progress}
    //       pageHeight={900}
    //       onProgressChange={this.handleProgressChange}
    //       fluid={fluid}
    //       showPageInfo={showPageInfo}
    //       />
    //   )
    // }

    if (computedPages.length !== 0) {
      return (
        <BookPages
          pages={computedPages.slice(0, 10)}
          pageHeight={900}
        />
      )
    }

    return (
      <BookChapters
        bookFlesh={bookContent.flesh}
        onUpdate={this.handleChapterUpdate}
        />
    )
  }

  render() {
    const { bookContent } = this.props

    return (
      <DocContainer bodyClass="viewer" title={this.props.book.title}>
        <div onClick={this.handleViewerClick} onMouseMove={this.handelViewerMouseMove} >
          <ViewerNav
            nav={bookContent.nav || []}
            />
          {this.renderViewPanel()}
          {this.renderBook()}
        </div>
      </DocContainer>
    )
  }
}

const mapStateToProps = (state, ownProps: any) => {
  const bookId = ownProps.params.id
  const book = selectors.common.entity('books', bookId)(state)
  const bookContent = selectors.common.entity('bookContents', bookId)(state)

  return {
    book,
    bookContent,
    progress: state.components.viewer.bookProgress.percentage,
    isFetchingProgress: state.components.viewer.bookProgress.isFetching,
    session: state.session
  }
}

export default connect<{}, {}, AllProps>(
  mapStateToProps,
  { loadBook, fetchProgress, openConfirmModal, initializeBookProgress, destroyBookProgress, loadBookContent }
)(Viewer)
