# Async React!

Before lecture, please do your best to complete the following challenge. We'll go over this together in lecture today.

The challenge: [here is an API](https://github.com/learn-co-curriculum/student-lister-api-web-040317) that has a list of students at `/api/v1/students`.

Pull down the most recent verison of our Student Lister [Here](https://github.com/learn-co-curriculum/student-lister-react-lecture-web-040317). Instead of starting with our hard-coded list of students, we want to pull a list of students from the API.

This means that, whenever the StudentPage mounts, we should make a web request to '/api/v1/students' to load the data and then update our list of students. You may need to make some changes to how we're storing state.

### BONUS

If you have the list showing up, we also should make a post request each time we submit our form to create a new student.


### LifeCycle Methods

#### Component Mounting for the first time
0. constructor
1. componentWillMount
2. render
3. componentDidMount
  // is this a good place to fetch data?

#### When the component is re-rendering

0. componentWillReceiveProps
1. shouldComponentUpdate
2. componentWillUpdate
3. render
4. componentDidUpdate
