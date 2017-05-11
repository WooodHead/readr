import _ from 'lodash'
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import Viewer2Container from './Viewer2Container/Viewer2Container'
import viewerQuery from './viewer2Query.gql'
import * as selectors from '../../selectors'
import Loading from '../../components/Loading'
import DocContainer from '../../components/DocContainer'

type Data = {
  viewer: {
    bookPages: Schema.BookPages
    readingProgress: Schema.ReadingProgress
  }
  error: Error
  bookInfo: Schema.BookInfo
  fetchMore: any
  loading: boolean
}

interface StateProps {
  actions: typeof actions
  routing: any
  components: Viewer.Components
  data: Data
}

interface OwnProps {
  config: {
    fontSize: number
    width: number
    lineHeight: number
    pageHeight: number
  }
}

class Viewer2 extends Component<StateProps & OwnProps, void> {

  constructor(props) {
    super(props)
    this.handleLoadPage = this.handleLoadPage.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleLoadPage(direction: 'prev' | 'next' = 'next') {
    const { data: { fetchMore } } = this.props
    const fistItemCursor = _.first(this.props.data.viewer.bookPages.edges).cursor
    const lastItemCursor = _.last(this.props.data.viewer.bookPages.edges).cursor

    fetchMore({
      variables: {
        before: direction === 'prev' && fistItemCursor,
        after: direction === 'next' && lastItemCursor,
        first: direction === 'next' ? 1 : null,
        last: direction === 'prev' ? 1 : null
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        let edges = direction === 'next'
          ? [...previousResult.viewer.bookPages.edges, ...fetchMoreResult.viewer.bookPages.edges]
          : [...fetchMoreResult.viewer.bookPages.edges, ...previousResult.viewer.bookPages.edges]

        const merged = Object.assign({}, previousResult, {
          viewer: {
            bookPages: {
              edges
            }
          }
        })

        return merged
      }
    })
  }

  handleScroll(direction) {
    const { components: { showPreference, showPanel } } = this.props
    if (direction === 'up' && showPanel === false) {
      this.props.actions.viewer.toggleViewerPanel(true)
    }
    if (direction === 'down' && !showPreference && showPanel === true) {
      this.props.actions.viewer.toggleViewerPanel(false)
    }
  }

  render() {
    const { data: { loading, error, bookInfo, viewer }, config } = this.props

    if (loading) {
      return (
        <Loading />
      )
    }

    if (error) {
      return (
        <div>{error.message}</div>
      )
    }

    return (
      <DocContainer bodyClass="page-viewer-v2">
        <Viewer2Container
          bookPages={viewer.bookPages}
          bookInfo={bookInfo}
          onLoadPage={this.handleLoadPage}
          onReachBottom={this.handleLoadPage}
          onDebuncedScroll={(direction) => {
          }}
          onScroll={this.handleScroll}
          config={config}
        />
      </DocContainer>
    )
  }
}

const Viewer2WithData = graphql(
  viewerQuery,
  {
    options: (props: OwnProps & {params}) => {
      const {config: { pageHeight, fontSize, lineHeight, width } } = props

      return {
        variables: {
          // bookId: props.params.id,
          bookId: 'Qm9va0luZm86NThmNWViM2Y3NDZmNGJlM2E0MjlmZThj',
          first: 20,
          pageHeight,
          fontSize,
          lineHeight,
          width
        }
      }
    }
  }
)(Viewer2)

const mapStateToProps = (state, ownProps) => {
  const components = selectors.viewer.components(state)
  return {
    components
  }
}

export default connect<{}, {}, OwnProps>(
  mapStateToProps,
  dispatch => ({
    actions: {
      viewer: bindActionCreators(actions.viewer as {}, dispatch)
    }
  })
)(Viewer2WithData)
