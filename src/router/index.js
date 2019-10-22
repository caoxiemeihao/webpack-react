import React from 'react'
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'

import Home from '_p/home/home'
import Blog from '_p/blog/blog'
import Resume from '_p/resume/resume'
import User from '_p/user/user'

class AppRouter extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
        <div>
          {/* Switch 只显示一个组件，加上exack表示精准匹配 */}
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/user" component={User} />
            {/* <Route exact path="*" component={404} /> 如果需要 404 页面 */}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter
