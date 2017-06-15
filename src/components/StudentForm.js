import React, { Component } from 'react'

class StudentForm extends Component {

  constructor(props){
    super(props)
    const names = props.student.name.split(" ")
    this.state = {
      firstName: names[0],
      lastName: names[1],
      phoneNumbers: [
        { id: 1, number: ''}
      ]
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
    this.props.onSubmit({
      id: this.props.student.id,
      name: `${this.state.firstName} ${this.state.lastName}`
    })
  }

  handlePhoneChange(id, number){
    this.setState(function(prevState){
      return {
        phoneNumbers: prevState.phoneNumbers.map((tel) => {
          if (tel.id !== id) {
            return tel
          } else {
            return {id: id, number: number}
          }
        })
      }
    })
  }

  renderPhoneInputs(){
    return this.state.phoneNumbers.map( tel => (
      <input key={tel.id} type='tel' value={tel.number} onChange={(e) => this.handlePhoneChange(tel.id, e.target.value)} />
    ))
  }

  addPhoneInput(){
    this.setState(function(prevState){
      return { phoneNumbers: [...prevState.phoneNumbers, {id: prevState.phoneNumbers.length + 1, number: ''}]}
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
          <input type='text' placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
          { this.renderPhoneInputs() }
          <input type='submit' value={this.props.submitText} />
        </form>
        <button onClick={this.addPhoneInput.bind(this)}>Add More Numbers</button>
      </div>
    )
  }
}

StudentForm.defaultProps = {
  student: {name: ' '}
}

export default StudentForm
