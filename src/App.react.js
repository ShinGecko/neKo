import React, { Component } from 'react'
import './App.css'
import SignIn from './components/auth/SignIn.react'
import SignUp from './components/auth/SignUp.react'
import { signIn, signUp } from './utils/auth'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submited: '',
    }

    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this)
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this)
  }

  handleSubmitSignIn(login, password) {
    this.setState({ submited: 'Sign In => login : ' + login + ', password : ' + password })

    signIn(login, password)
  }

  handleSubmitSignUp(login, password, email) {
    this.setState({ submited: 'Sign Up => login : ' + login + ', password : ' + password + ', email : ' + email })

    signUp(login, password, email)
  }

  render() {
    return (
      <div className="app">
        <p> {this.state.submited} </p>
        <SignIn onSubmit={this.handleSubmitSignIn}/>
        <hr/>
        <SignUp onSubmit={this.handleSubmitSignUp}/>
      </div>
    )
  }
}

export default App
