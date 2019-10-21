import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from '_p/home/home'

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <HomePage />
      </div>
    )
  }
}

ReactDOM.render(<App />, window.document.getElementById('app'))
