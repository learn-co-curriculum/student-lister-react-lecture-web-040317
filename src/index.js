import React from 'react'
import ReactDOM from 'react-dom'

import NavBar from './components/NavBar'
import StudentsPage from './components/StudentsPage'

function App(){
  return (
    <div>
      <NavBar title="Ian Rules!" style='inverse'/>
      < StudentsPage />
    </div>
  )
}

ReactDOM.render(< App /> , document.getElementById('root'))
