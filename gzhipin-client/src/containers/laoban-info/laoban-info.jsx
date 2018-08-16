/*
*  大神信息完善路由组件
* */
import React, {Component} from 'react'
import {NavBar, WingBlank, List, InputItem, TextareaItem, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import HeaderSelector from '../../components/header-selector/header-selector'
import {updateUser} from '../../redux/actions'


class LaobanInfo extends Component{
  state ={
    header: '', // 头像名称
    info: '', // 职位简介
    post: '', // 职位名称
    company: '', // 公司名称
    salary: '' // 工资
  }
  //设置更新header
  setHeader = (header) =>{
    this.setState({header})
  }
  handleChange = (name, val) =>{
    this.setState({[name]: val})
  }
  save =() =>{
    this.props.updateUser(this.state)
  }

  render(){
    const {user} = this.props
    //如果用户的信息已经完整，自动跳转到大神主界面
    if(user.header){
      return <Redirect to='/laoban'/>
    }

    return (
      <div>
      <NavBar>老板信息完善</NavBar>
    <HeaderSelector setHeader={this.setHeader} />
    <WingBlank />
    <List>
      <InputItem onChange={val => {this.handleChange('post', val)}}>招聘职位： </InputItem>
      <InputItem onChange={val => {this.handleChange('company', val)}} >公司名称：</InputItem>
      <InputItem onChange={val => {this.handleChange('salary', val)}}>职位薪资：</InputItem>
      <TextareaItem
        title="职位要求:"
        rows={3}
        onChange={val => {this.handleChange('info', val)}}
      />
      <Button type='primary' onClick={this.save}>保存</Button>
    </List>
    </div>
    )
  }
}

export default connect(
  state =>({user: state.user}),
  {updateUser}      //创给UI组件不是一部action函数本身，而是包含分发一部action的一个新的函数
)(LaobanInfo)

/*
*  function（...args）{
*  dispatch(updateUser(...args))
* */

