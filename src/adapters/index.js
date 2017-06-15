export class StudentsAdapter  {
  static all(){
    return fetch('http://localhost:3000/api/v1/students')
      .then( res => res.json() )
  }

  static create(){

  }

  static update(){

  }
  
  static destroy(){

  }
}
