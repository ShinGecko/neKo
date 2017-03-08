import React, { Component } from 'react'
import './login-form.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeLogin = this.handleChangeLogin.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleSubmit(e) {
    this.setState({ submitted: ('login : ' + this.state.login + ', password: ' + this.state.password) })
    e.preventDefault()
  }

  handleChangeLogin(e) {
    this.setState({ login: e.target.value })
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="login"> Login : </label>
          <input type="text" className="form-control" name="login" value={this.state.login} onChange={this.handleChangeLogin}/>
        </div>

        <div className="form-group">
          <label htmlFor="password"> Password : </label>
          <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
        </div>

        <button type="submit"> Send </button>
        <p>{this.state.submitted}</p>
      </form>
    )
  }
}

export default LoginForm
