import React from 'react'
import './home.less'

export default class Home extends React.PureComponent {
  state = {
    str: 'Home Compoment'
  }

  render() {
    const { str } = this.state

    return (
      <div className="home-container">
        {str}
      </div>
    )
  }
}
