import React from 'react'
import { Route } from 'react-router-dom'

import NavBar from './NavBar'
import StudentsPage from './StudentsPage'

export default function Main(){
  return (
    <div>
      <NavBar title="Ian Rules!" style='inverse'/>
      <Route path="/students" component={StudentsPage} />
      <Route path="/about" render={() => {
        return <p>This is an app all about students</p>
      }} />
    </div>
  )
}
