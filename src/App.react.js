import React, { Component } from 'react'
import './App.css'
import SignIn from './components/auth/SignIn.react'
import SignUp from './components/auth/SignUp.react'

class App extends Component {
  render() {
    return (
      <div className="app">
        <SignIn/>
        <SignUp/>
      </div>
    )
  }
}

export default App
