import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './HelloWorld'

ReactDOM.render(
  React.createElement(HelloWorld, { name: 'World' }),
  document.getElementById('app')
)
