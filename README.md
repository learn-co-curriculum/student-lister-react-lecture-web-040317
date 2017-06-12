# Client Side Routing!

We want to be able to conditionally render out components based on the URL.

### React Router

+ Still rendering a single page application
+ React Router gives us different components to use


### Components

1. `BrowserRouter` - We use once at a high level - controls all the routing for it's children
2. `Route` - conditionally renders something
3. `Link` - changes the path and causes a re-render of any components that need to - won't actually make another get request
4. `Switch`

## Post Lecture Challenge

### Part 1.
1. When the path is `/students/new`, we should see the form to create a new student
2. When the path is `/students/2`, we should see a student detail component that renders out an h2 of the student's first and last name for the second student
3. When the path is `/students/7`, we should see a student detail component that renders out an h2 of the student's first and last name for the seventh student

### Part 2.
1. Each student show component should have a button that says 'delete this student'
2. When we click it, we should delete that student from the database and then redirect them to '/students'
