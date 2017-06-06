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


ReactDOM.render(NavBar({title: "Ian Rules!", style: 'inverse'}), document.getElementById('root'))
