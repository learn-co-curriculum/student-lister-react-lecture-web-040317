import React from 'react'
import { Route, Link } from 'react-router-dom'
import EditStudentForm from './EditStudentForm'

export default function StudentDetail(props){
  if (!props.student) {
    return null
  }

  return(
    <div>
      <h2>{props.student.name}</h2>
      <Link to={`/students/${props.student.id}/edit`}>Edit This Student</Link>
      <Route path={`/students/${props.student.id}/edit`} render={(student) => <EditStudentForm student={props.student} onSubmit={(name) => props.editStudent(name, props.student.id)}/> } />
      <button onClick={() => props.deleteStudent(props.student.id) } className="btn btn-danger">Delete This Student</button>
    </div>
  )
}
