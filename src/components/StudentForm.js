import React, { Component } from 'react'

export default class StudentForm extends Component {

  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const name = `${this.state.firstName} ${this.state.lastName}`
    this.props.onSubmit(name)
    this.setState({
      firstName: '',
      lastName: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type='text' placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
          <input type='text' placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
          <input type='submit' value="Add a Student" />
        </form>
      </div>

    )
  }

}
