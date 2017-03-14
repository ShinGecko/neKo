import React, { Component } from 'react'
import './App.css'
import SignIn from './components/auth/SignIn.react'

class App extends Component {
  render() {
    return (
      <div className="app">
        <SignIn/>
      </div>
    )
  }
}

export default App
