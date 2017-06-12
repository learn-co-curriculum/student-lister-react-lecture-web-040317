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
