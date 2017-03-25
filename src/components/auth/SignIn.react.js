import React, { Component } from 'react'
import regex from '../../utils/regex'

class SignIn extends Component {
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

  checkForm() {
    const login = this.state.login
    const password = this.state.password

    let valid = true
    let message = ''
    if (!regex.password.test(password)) {
      valid = false
      message = 'Please enter a valid password'
    }

    if (!(regex.pseudo.test(login) || regex.email.test(login))) {
      valid = false
      message = 'Please enter a valid login (pseudo or mail adress)'
    }

    return [valid, message]
  }

  handleSubmit(e) {
    const login = this.state.login
    const password = this.state.password

    let [valid, message] = this.checkForm()

    if (valid) {
      this.props.onSubmit(login, password)
    }

    this.setState({ errorMessage: message })
    e.preventDefault()
  }

  handleChangeLogin(e) {
    this.setState({ login: e.target.value })
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    const styles = {
      red: {
        color: 'red',
      },
    }

    return (
      <form className="Signin-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="login"> Login : </label>
          <input type="text" className="form-control" name="login" value={this.state.login} onChange={this.handleChangeLogin}/>
        </div>

        <div className="form-group">
          <label htmlFor="password"> Password : </label>
          <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
        </div>
        <p style={styles.red}> {this.state.errorMessage} </p>
        <button type="submit"> Send </button>
      </form>
    )
  }
}

SignIn.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

export default SignIn
