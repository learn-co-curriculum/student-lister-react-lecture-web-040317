import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import StudentCount from './StudentCount'
import StudentForm from './StudentForm'
import StudentsList from './StudentsList'
import StudentDetail from './StudentDetail'
import StudentEditForm from './StudentEditForm'

// Determines Layout of our page

export default function StudentsPage (props) {
    const { students, createStudent, updateStudent, deleteStudent } = props
    
    return(
      <div className='row'>
        <div className='col-md-4'>
          < StudentsList students={students} />
        </div>
        <div className='col-md-8'>
          <Switch>
            <Route exact path='/students/new' render={() => <StudentForm onSubmit={createStudent}/>} />
            <Route exact path='/students/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const student = students.find( s =>  s.id === parseInt(id) )
              return <StudentDetail student={student} deleteStudent={deleteStudent}/>
            }} />
            <Route exact path='/students/:id/edit' render={(routerProps) => {
              const id = routerProps.match.params.id
              const student = students.find( s =>  s.id === parseInt(id) )
              if (!student) {
                return null
              }
              return <StudentEditForm student={student} updateStudent={updateStudent} />
            }} />
          </Switch>
          <StudentCount count={students.length}/>
        </div>
      </div>
    )
  }
