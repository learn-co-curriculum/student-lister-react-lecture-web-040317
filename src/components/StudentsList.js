import React from 'react'

export default function StudentsList(props){
  return(
    <div>
      <h2>Students List</h2>
      <ul>
        { props.students.map(student => <li>{ student }</li>)}
      </ul>
    </div>
  )
}
