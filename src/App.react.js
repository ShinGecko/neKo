import React, { Component } from 'react'
import './App.css'
import SignIn from './components/auth/SignIn.react'
import SignUp from './components/auth/SignUp.react'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      submited : '',
    }
  }

  render() {
    const that = this 

    const signIn =  (login, password) => {
        this.setState({ submited : 'Sign In => login : ' + login + ', password : ' + password })
      }

    const signUp = (login, password, email) => {
        this.setState({ submited : 'Sign Up => login : ' + login + ', password : ' + password + ', email : ' + email })
      }

    return (
      <div className="app">
        <p> {this.state.submited} </p>
        <SignIn onSubmit={signIn}/>
        <hr/>
        <SignUp onSubmit={signUp}/>
      </div>
    )
  }
}

export default App
