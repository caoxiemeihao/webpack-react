import React from 'react'
import './resume.less'

export default class Resume extends React.PureComponent {
  state = {
    str: 'Resume Component'
  }

  render() {
    const { str } = this.state

    return (
      <div className="resume-container">
        {str}
      </div>
    )
  }
}
