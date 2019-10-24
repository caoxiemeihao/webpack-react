import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'
import { inject, observer } from 'mobx-react'

@inject("UserList")
@withRouter
@observer
class List extends React.PureComponent {
  addUser = () => {
    const { history } = this.props

    history.push('/user/add?name=123')
  }

  setName = () => {
    const { UserList } = this.props

    console.log(this.props)

    UserList.setName('Mobx 大发好 \(^o^)/~')
  }

  render() {
    const { UserList } = this.props

    return (
      <div>
        <h2>User List Page</h2>
        <h3>组件：{UserList.name}</h3>
        <Button onClick={this.addUser}>添加用户</Button>
        <Button onClick={this.setName}>修改名称</Button>
      </div>
    )
  }
}

export default List
