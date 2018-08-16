import React, {Component} from 'react'
import {NavBar, WingBlank, InputItem, TextareaItem, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import HeaderSelector from '../../components/header-selector/header-selector'
import {updateUser} from '../../redux/actions'

class DashenInfo extends Component{
  state ={
    header: '', // 头像名称
    info: '', // 职位简介
    post: '', // 职位名称
  }
  setHeader = (header) =>{
    this.setState({header})
  }
  handleChange = (name, val) =>{
    this.setState({[name]: val})
  }
  save = () =>{
    this.props.updateUser(this.state)
  }

  render(){
    //如果用户的信息已经完整，跳转到/laoban
    const {header} = this.props.user
    if(header){
      return <Redirect to='/laoban'/>
    }
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader} />
        <InputItem onChange={val => {this.handleChange('post', val)}}>求职岗位：</InputItem>
        <WingBlank />
        <TextareaItem
          title="个人要求:"
          rows={3}
          onChange={val => {this.handleChange('info', val)}}
        />
        <Button type='primary' onClick={() => this.props.updateUser(this.state)}>保存</Button>

      </div>
    )
  }
}

export default connect(
  state =>({user: state.user}),
  {updateUser}      //传给UI组件不是一部action函数本身，而是包含分发一部action的一个新的函数
)(DashenInfo)

/*
*  function（...args）{
*  dispatch(updateUser(...args))
* */

