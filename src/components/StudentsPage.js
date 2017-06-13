import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import StudentCount from './StudentCount'
import StudentForm from './StudentForm'
import StudentsList from './StudentsList'
import StudentDetail from './StudentDetail'

export default class StudentsPage extends Component {

  constructor(){
    super()
    this.state = {
      students: []
    }
    this.createStudent = this.createStudent.bind(this)
    this.editStudent = this.editStudent.bind(this)
    this.deleteStudent = this.deleteStudent.bind(this)
    this.deleteStudentFromDatabase = this.deleteStudentFromDatabase.bind(this)
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/students')
      .then( res => res.json() )
      .then( data => this.setState({ students: data}) )
  }

  createStudent(name){
    // here's where i want to make the post request to save the data...
    fetch('http://localhost:3000/api/v1/students', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        student: {name: name}
      })
    }).then(response => response.json() )
      .then(student => this.setState((previousState) => {
        return {
          students: [...previousState.students, student]
        }
      })
    )
  }

  editStudent(name, id){
    // here's where i want to make the post request to save the data...
    fetch(`http://localhost:3000/api/v1/students/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        student: {name: name}
      })
    }).then(response => response.json() )
      .then(studentFromDB => {this.setState((previousState) => {
        const editedStudent = previousState.students.find((student) => {
          return student.id === studentFromDB.id
        })

        const filteredStudents = previousState.students.filter(function(student){
          return student.id !== editedStudent.id
        })

        return {
          students: [...filteredStudents, studentFromDB]
        }
      })
    })
    this.props.history.push(`/students/${id}`)
  }

  deleteStudent(id){
    // here, make a delete request to the API to remove that student from the database...
    this.deleteStudentFromDatabase(id)
    this.setState(function(previousState){
      return {
        students: previousState.students.filter(function(student){
          return student.id !== id
        })
      }
    })
    this.props.history.push("/students")
  }

  deleteStudentFromDatabase(id){
    // this is all you need if the React ID matches the API ID
    // fetch(`http://localhost:3000/api/v1/students/${id}`, {
    //   method: 'DELETE'
    // })
    // otherwise, you have to be more clever/explicit (see below)

    const student = this.state.students.find((student) => {
      return student.id === parseInt(id)
    })
    fetch(`http://localhost:3000/api/v1/students`)
      .then(response => response.json())
      .then((studentsFromDatabase) => {
        // find student's DB ID by local ID
        return studentsFromDatabase.find((studentFromDatabase) => {
          return studentFromDatabase.name === student.name
        }).id
      })
      .then((id) => {
        fetch(`http://localhost:3000/api/v1/students/${id}`, {
          method: 'DELETE'
        })
          .then(() => alert('student deleted successfully'))
          .catch(() => alert('unable to delete student from database'))
      })
      .catch(() => alert('error'))
  }

  render(){
    return(
      <div className='row'>
        <div className='col-md-4'>
          < StudentsList students={this.state.students} />
        </div>
        <div className='col-md-8'>
          <Switch>
            <Route exact path='/students/new' render={() => <StudentForm onSubmit={this.createStudent}/>} />
            <Route path='/students/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const student = this.state.students.find( s =>  s.id === parseInt(id) )
              return <StudentDetail student={student} editStudent={this.editStudent} deleteStudent={this.deleteStudent}/>
            }} />
          </Switch>
          <StudentCount count={this.state.students.length}/>
        </div>
      </div>
    )
  }
}
