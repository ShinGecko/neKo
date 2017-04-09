import React from 'react'
import ReactDOM from 'react-dom'
import { signUp } from './../../utils/auth'
import SignUp from './SignUp.react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SignUp onSubmit={signUp}/>, div)
})
