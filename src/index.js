import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from '_p/home'

class App extends React.Compoment {
  render() {
    return (
      <div classNmae="app-container">
        <HomePage />
      </div>
    )
  }
}

ReactDOM.render(<App />, window.document.getElementById('app'))
