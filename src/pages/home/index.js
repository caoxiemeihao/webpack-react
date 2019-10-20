import React from 'react'
import './home.less'
import reactLogo from 'assets/react-logo.jpg'

export default class Home extends React.PureCompoment {
  state = {
    str: 'Home Compoment'
  }

  render() {
    return (
      <div className="home-container">
        {str}
        <hr/>
        <img src={reactLogo} />
      </div>
    )
  }
}
