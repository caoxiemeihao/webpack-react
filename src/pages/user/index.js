import React from 'react'
import './user.less'

export default class User extends React.PureComponent {
  state = {
    str: 'User Component'
  }

  render() {
    const { str } = this.state

    return (
      <div class="user-container">
        {str}
      </div>
    )
  }
}
