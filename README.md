# Auth

1. Anytime someone visits my app, have they logged in before?
2. If they have, who are they?
3. If they have, are they allowed to do the thing that they're trying to do?
4. If they haven't logged in before, and they try to do something that they are not allowed, redirect them to them login page


## What URL will take us there?

1. Visiting '/login' should display a form to login
2. Submitting the form should make a post request to '/api/v1/auth'
3. From there, save the info about the currentUser and redirect to '/students'
