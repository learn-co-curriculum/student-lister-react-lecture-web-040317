// function createElement(type, props={}, children={}){
//   return {
//     $$typeof: Symbol.for('react.element'),
//     props: Object.assign({}, props, {children: children}),
//     type: type
//   }
// }
//
// const el = {
//   type: 'div',
//   props: {
//     children:
//   },
//   $$typeof: Symbol.for('react.element')
// }

function NavBar(props){
  const allowedStyles = ['default', 'inverse']
  if (allowedStyles.includes(props.style)) {
    const style = props.style
  } else {
    const style = 'inverse'
  }
  return React.createElement('nav', {className: `navbar navbar-${style}`},
    React.createElement('div', {className: 'container-fluid'},
      React.createElement('div', {className: 'navbar-header'},
        React.createElement('a', {className: 'navbar-brand', href: '#'}, props.title)
      )
    )
  )
}

// const el = React.createElement('div', {kyle: true}, React.createElement('h1', {}, "Hello World"))

ReactDOM.render(NavBar({title: "Ian Rules!", style: 'inverse'}), document.getElementById('root'))


{/* <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Brand</a>
    </div>
  </div>
</nav> */}
