import React, { Component } from 'react'

class StudentEditForm extends Component {

  constructor(props){
    super(props)
    const names = props.student.name.split(" ")
    this.state = {
      firstName: names[0],
      lastName: names[1]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps !== this.props ) {
      const names = nextProps.student.name.split(" ")
      this.setState({
        firstName: names[0],
        lastName: names[1]
      })
    }
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.updateStudent({
      id: this.props.student.id,
      name: `${this.state.firstName} ${this.state.lastName}`
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
          <input type='text' placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
          <input type='submit' value="Edit Student" />
        </form>
      </div>
    )
  }
}

StudentEditForm.defaultProps = {
  student: {name: 'First Last'}
}

export default StudentEditForm
