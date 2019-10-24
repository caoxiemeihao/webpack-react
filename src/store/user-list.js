import { observable, action } from 'mobx'

class UserList {
  @observable name

  constructor() {
    this.name = "My name is user list"
  }

  setName(name) {
    this.name = name
  }
}

export default new UserList()
