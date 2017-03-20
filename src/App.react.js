import React, { Component } from 'react'
import './App.css'
import SignIn from './components/auth/SignIn.react'
import SignUp from './components/auth/SignUp.react'

const request = require('superagent')

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submited: '',
    }
  }

  render() {
    const signIn = (login, password) => {
      this.setState({ submited: 'Sign In => login : ' + login + ', password : ' + password })
    }

    const signUp = (login, password, email) => {
      this.setState({ submited: 'Sign Up => login : ' + login + ', password : ' + password + ', email : ' + email })

      request
        .post('http://localhost:8085')
        .send({ login: 'testboy', email: 'test@test.test', password: 'test1234' })
        .withCredentials()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end(function (err) {
          if (err) {
            console.log(err)
          }
          // Calling the end function will send the request
        })
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
