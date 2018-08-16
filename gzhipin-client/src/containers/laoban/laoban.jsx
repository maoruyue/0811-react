import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {RECEIVE_USER_LIST} from "../../redux/action-types"
import {getUserList} from '../../redux/actions'

import UserList from '../../components/user-list/user-list'
class Dashen extends Component {
  componentDidMount(){
    //获取userList
    this.props.getUserList('dashen')
  }
  render () {
    return (
      <UserList userList={this.props.userList}/>
    )
  }
}

export default connect(
  state => ({userList: state.userList}),
  {getUserList}
)(Dashen)