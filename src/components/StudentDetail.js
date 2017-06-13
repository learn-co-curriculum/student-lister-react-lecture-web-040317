import React from 'react'

export default function StudentDetail(props){
  if (!props.student) {
    return null
  }
  
  return(
    <h2>{props.student.name}</h2>
  )
}
