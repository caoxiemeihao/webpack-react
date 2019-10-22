import React from 'react'
import './blog.less'

export default class Blog extends React.PureComponent {
  state = {
    str: 'Blog Component'
  }

  render() {
    const { str } = this.state

    return (
      <div className="blog-container">
        {str}
      </div>
    )
  }
}
