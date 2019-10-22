import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from '@/router'
import './app.less'

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <img className="react-logo" src={require('assets/react-logo.jpg')} />
        <hr/>
        <AppRouter />
      </div>
    )
  }
}

ReactDOM.render(<App />, window.document.getElementById('app'))
