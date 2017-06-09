import React, { Component } from 'react'

import StudentCount from './StudentCount'
import StudentForm from './StudentForm'
import StudentsList from './StudentsList'

export default class StudentsPage extends Component {

  constructor(){
    super()
    this.state = {
      students: ['Marianna', 'Tina', 'Matt']
    }
    this.addFido = this.addFido.bind(this)
    this.createStudent = this.createStudent.bind(this)
    this.createStudentsFromAPI = this.createStudentsFromAPI.bind(this)
  }

  addFido(){
    this.setState(function( previousState ){
      return {
        students: [...previousState.students, "Fido"]
      }
    })
  }

  createStudent(name){
    this.setState(function(previousState){
      return {
        students: [...previousState.students, name]
      }
    })
  }

  createStudentsFromAPI(responseJSON){
    this.setState({
      students: responseJSON.map(student => student.name)
    })
  }

  componentWillMount(){
    fetch('http://localhost:3000/api/v1/students')
      .then(response => response.json())
      .then(responseJSON => this.createStudentsFromAPI(responseJSON))
  }

  render(){
    return(
      <div className='row'>
        <div className='col-md-4'>
          < StudentsList students={this.state.students} />
          <button onClick={this.addFido}>Add Fido</button>
        </div>
        <div className='col-md-8'>
          < StudentForm onSubmit={this.createStudent}/>
          < StudentCount count={this.state.students.length}/>
        </div>
      </div>
    )
  }
}
