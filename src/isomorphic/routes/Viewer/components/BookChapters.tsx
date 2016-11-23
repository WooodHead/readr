import React, { Component } from 'react'
import BookPages from './BookPages'

const BookChapter = ({ id, markdown}) => {
  return (
    <div id={id}>
      <BookPages
        pages={[{
          nodes: [markdown]
        }]}
        />
    </div>
  )
}

interface Props {
  bookFlesh: {
    markdown: string
    id: string
  }[]
  onUpdate?: (ref: HTMLElement) => void
}

class BookChapters extends Component<Props, {}> {

  chapters: HTMLElement

  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    const { onUpdate } = this.props
    if (onUpdate) {
      onUpdate(this.chapters)
    }
  }

  componentDidMount() {
  }

  render() {
    const { bookFlesh } = this.props

    return (
      <div ref={ref => this.chapters = ref}>
        {
          (bookFlesh || []).map(item => {
            return (
              <BookChapter
                id={item.id}
                markdown={item.markdown}
                key={item.id}
                />
            )
          })
        }
      </div>
    )
  }
}

export default BookChapters
