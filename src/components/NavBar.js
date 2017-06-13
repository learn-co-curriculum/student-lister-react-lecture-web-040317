import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props){
  return (
    <nav className={`navbar navbar-${props.style}`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <Link to="/" className='navbar-brand'>{props.title}</Link>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to="/students">View All Students</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
