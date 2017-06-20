import React, { Component } from 'react'

class LoginForm extends Component {

  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit( this.state )
    this.setState({username: '', password: ''})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input type='text' value={this.state.username} name="username" onChange={this.handleChange}/>
        <label>Password</label>
        <input type='password' value={this.state.password} name="password" onChange={this.handleChange}/>
        <input type="submit" />
      </form>
    )
  }
}

export default LoginForm
