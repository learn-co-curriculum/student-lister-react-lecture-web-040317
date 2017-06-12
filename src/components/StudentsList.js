import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

export default function StudentsList(props){
  return(
    <div>
      <h2>Students List</h2>
      <ul>
        { props.students.map((student) => <li key={student.id}>{ student.name }</li>)}
      </ul>
      <Switch>
        <Route path='/students/new' />
        <Route render={() => <Link to="/students/new">Add a Student</Link> } />
      </Switch>
    </div>
  )
}
