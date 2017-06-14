# React CRUD

### COMPONENT LIFECYCLE

#### MOUNTING

0. constructor
1. componentWillMount
2. render
3. componentDidMount

#### Re-rendering

0. componentWillReceiveProps()
1. shouldComponentUpdate()
2. componentWillUpdate()
3. render()
4. componentDidUpdate()


## Post Lecture Challenge Review

### Part 1.
1. When the path is `/students/new`, we should see the form to create a new student
2. When the path is `/students/2`, we should see a student detail component that renders out an h2 of the student's first and last name for the second student
3. When the path is `/students/7`, we should see a student detail component that renders out an h2 of the student's first and last name for the seventh student

### Part 2.
1. Each student show component should have a button that says 'delete this student'
2. When we click it, we should delete that student from the database and then redirect them to '/students'


### Post Lecture Challenge

As a user, I should be able to edit an existing student.

1. When the url is `/students/:id/edit` -> render an edit form component
2. When the form is submitted, we should update the existing student in the database and redirect to '/students/:id'
3. The form should be pre-populated with the values associated with that student
