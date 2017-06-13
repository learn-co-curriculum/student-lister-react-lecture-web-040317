import React from 'react'

export default function StudentDetail(props){
  if (!props.student) {
    return null
  }

  return(
    <div>
      <h2>{props.student.name}</h2>
      <button onClick={() => props.deleteStudent(props.student.id) } className="btn btn-danger">Delete This Student</button>
    </div>

  )
}
