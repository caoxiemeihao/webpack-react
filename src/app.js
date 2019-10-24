import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import AppRouter from '@/router'
import PrimaryLayout from '_l/primary'
import styles from './app.less'

class App extends React.Component {
  render() {
    return (
      <div class={classNames("app-container", styles.appContainer)}>
        <PrimaryLayout>
          <img class="react-logo" src={require('assets/react-logo.jpg')} />
          <hr/>
          <AppRouter />
        </PrimaryLayout>
      </div>
    )
  }
}

ReactDOM.render(<App />, window.document.getElementById('app'))
