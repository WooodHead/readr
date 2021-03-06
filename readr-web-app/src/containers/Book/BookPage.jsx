import React from 'react'
import PT from 'prop-types'
import ContentRenderer from './ContentRenderer'
import './BookPage.scss'

const BookPage = props => {
  const { page: { nodes, pageNo, offset, pageHeight }, config, onLinkClick } = props
  return (
    <div styleName="page" id={`page-${pageNo}`}>
      <div
        style={{
          height: pageHeight,
          overflow: 'hidden'
        }}>
        <ContentRenderer
          style={{
            marginTop: offset
          }}
          nodes={nodes}
          config={config}
          onLinkClick={onLinkClick}
        />
      </div>
    </div>
  )
}

BookPage.propTypes = {
  page: PT.object.isRequired,
  config: PT.object.isRequired,
  onLinkClick: PT.func,
}

export default BookPage
