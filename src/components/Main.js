import React from 'react'

import NavBar from './NavBar'
import StudentsPage from './StudentsPage'

export default function Main(){
  return (
    <div>
      <NavBar title="Ian Rules!" style='inverse'/>
      < StudentsPage />
    </div>
  )
}
