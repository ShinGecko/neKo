import React, { Component } from 'react'
import './App.css'
import LoginForm from './components/forms/login-form'

class App extends Component {
  render() {
    return (
      <div className="app">
        <LoginForm/>
      </div>
    )
  }
}

export default App
