import React from 'react'
import './user.less'

export default class User extends React.PureComponent {
  state = {
    str: 'User Component'
  }

  render() {
    const { str } = this.state

    return (
      <div className="user-container">
        {str}
      </div>
    )
  }
}
