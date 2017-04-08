import React from 'react'
import ReactDOM from 'react-dom'
import SignUp from './SignUp.react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SignUp/>, div)
})
