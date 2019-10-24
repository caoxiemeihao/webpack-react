import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import classNames from 'classnames'
import AppRouter from '@/router'
import store from './store'
import PrimaryLayout from '_l/primary'
import styles from './app.less'

class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <div class={classNames("app-container", styles.appContainer)}>
          <PrimaryLayout>
            <img class="react-logo" src={require('assets/react-logo.jpg')} />
            <hr/>
            <AppRouter />
          </PrimaryLayout>
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, window.document.getElementById('app'))
