import React, {Component} from 'react'
import { Route } from 'react-router-dom'

import NavBar from './NavBar'
import LoginForm from './LoginForm'
import StudentsPageContainer from '../containers/StudentsPageContainer'

class Main extends Component {

  constructor(){
    super()
    this.state = {
      auth: {
        isLoggedIn: false,
        user: {}
      }
    }
    this.logIn = this.logIn.bind(this)
  }

  logIn(loginParams){
    console.log(loginParams)
    // when this function is invoked,
    // make a request '/api/v1/auth'
    // if the username and password are correct, we should get back the
    // user info as a response and update our state
  }

  render(){
    return (
      <div>
        <NavBar title="Ian Rules!" style='inverse'/>
        <Route path="/students" component={StudentsPageContainer} />
        <Route path="/about" render={() => {
          return <p>This is an app all about students</p>
        }} />
        <Route path='/login' render={() => <LoginForm onSubmit={this.logIn}/>} />
      </div>
    )
  }
}

export default Main
