const baseUrl = 'http://localhost:3000/api/v1'

export class AuthAdapter {
  static login(loginParams){
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json() )
  }

  static currentUser(){
    return fetch(`${baseUrl}/current_user`, {
      headers: headers()
    }).then(res => res.json() )
  }
}

export class StudentsAdapter  {
  static all(){
    return fetch(`${this.url()}`, {
      headers: headers()
    })
      .then( res => res.json() )
  }

  static create(student){
    return fetch(`${this.url()}`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        student: {name: student.name}
      })
    }).then(response => response.json() )
  }

  static update(student){
    return fetch(`${this.url()}/${student.id}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify({
        student: {name: student.name}
      })
    })
  }

  static destroy(id){
    return fetch(`${this.url()}/${id}`, {
      method: 'DELETE',
      headers: headers()
    }).then(res => res.json() )
  }

  static url(){
    return `${baseUrl}/students`
  }
}

function headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}
