const baseUrl = 'http://localhost:3000/api/v1'

export class StudentsAdapter  {
  static all(){
    return fetch(`${this.url()}`)
      .then( res => res.json() )
  }

  static create(student){
    return fetch(`${this.url()}`, {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        student: {name: student.name}
      })
    }).then(response => response.json() )
  }

  static update(student){
    return fetch(`${this.url()}/${student.id}`, {
      method: 'PATCH',
      headers: this.headers(),
      body: JSON.stringify({
        student: {name: student.name}
      })
    })
  }

  static destroy(id){
    return fetch(`${this.url()}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json() )
  }

  static headers(){
    return {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  }

  static url(){
    return `${baseUrl}/students`
  }
}
