import React from 'react'
import './home.less'
import reactLogo from 'assets/react-logo.jpg'

export default class Home extends React.PureComponent {
  state = {
    str: 'Home Compoment'
  }

  render() {
    const { str} = this.state
    return (
      <div className="home-container">
        {str}
        <hr/>
        <img className="react-logo" src={reactLogo} />
      </div>
    )
  }
}
