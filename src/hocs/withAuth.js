import React from 'react'
import { AuthAdapter } from '../adapters'
import { withRouter } from 'react-router-dom'

export default function withAuth(WrappedComponent){
  class withAuth extends React.Component {
    componentDidMount(){
      if (!localStorage.getItem('jwt')) {
        this.props.history.push('/login')
      } else {
        AuthAdapter.currentUser()
          .then(user => {
            if (user.error) {
              this.props.history.push('/login')
            }
          })
      }
    }

    render(){
      return <WrappedComponent {...this.props} />
    }
  }
  debugger
  return withRouter(withAuth)
}

// function withDog(WrappedComponent){
//
//   return class extends React.Component {
//     render(){
//       return <WrappedComponent dog="Fido" {...this.props} />
//     }
//   }
// }
//
//
// const HOC = withDog( withAuth( StudentsPageContainer ) )
//
// <HOC name="Jonny" />
