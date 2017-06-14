import React from 'react'
import { Link } from 'react-router-dom'

export default function StudentDetail({student, deleteStudent}){
  if (!student) {
    return null
  }

  return(
    <div>
      <h2>{student.name}</h2>
      <button onClick={() => deleteStudent(student.id) } className="btn btn-danger">Delete This Student</button>
      <Link className="btn btn-primary" to={`/students/${student.id}/edit`}>Edit This Student</Link>
    </div>
  )
}
