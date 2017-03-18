import React, { Component } from 'react'

const regex = {
  pseudo: /^[\w-]{3,24}$/,
  password: /^.{8,}$/,
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
}
regex.pseudo.description = 'between 3 and 24 characters, no special characters exept "_"'
regex.password.description = 'minimum 8 characters'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pseudo: '',
      password: '',
      confirmPassword: '',
      email: '',
      confirmEmail: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangePseudo = this.handleChangePseudo.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeConfirmEmail = this.handleChangeConfirmEmail.bind(this)
  }

  handleSubmit(e) {
    const pseudo = this.state.pseudo
    const password = this.state.password
    const confirmPassword = this.state.confirmPassword
    const email = this.state.email
    const confirmEmail = this.state.confirmEmail

    let message
    let valid = true

    if (!(email === confirmEmail)) {
      valid = false
      message = 'Mails adresses doesn\'t match'
    }

    if (!(regex.email.test(email))) {
      valid = false
      message = 'Please entre a valid mail adress'
    }

    if (!(password === confirmPassword)) {
      valid = false
      message = 'Passwords doesn\'t match'
    }

    if (!(regex.password.test(password))) {
      valid = false
      message = 'Invalid password : ' + regex.password.description
    }

    if (!regex.pseudo.test(pseudo)) {
      valid = false
      message = 'Invalid pseudo : ' + regex.pseudo.description
    }

    if (valid) {
      this.props.onSubmit(pseudo, password, email)
      message = ''
    }

    this.setState({ error: message })
    e.preventDefault()
  }

  handleChangePseudo(e) {
    this.setState({ pseudo: e.target.value })
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  handleChangeConfirmPassword(e) {
    this.setState({ confirmPassword: e.target.value })
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  handleChangeConfirmEmail(e) {
    this.setState({ confirmEmail: e.target.value })
  }

  render() {
    const styles = {
      red: {
        color: 'red',
      },
    }

    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="pseudo"> Pseudo : </label>
          <input type="text" className="form-control" name="pseudo" value={this.state.pseudo} onChange={this.handleChangePseudo}/>
        </div>

        <div className="form-group">
          <label htmlFor="password"> Password : </label>
          <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChangePassword}/>
        </div>

        <div className="form-group">
          <label htmlFor="cofirm-password"> Confirm Password : </label>
          <input type="password" className="form-control" name="cofirm-password" value={this.state.confirmPassword} onChange={this.handleChangeConfirmPassword}/>
        </div>

        <div className="form-group">
          <label htmlFor="email"> Email : </label>
          <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChangeEmail}/>
        </div>

        <div className="form-group">
          <label htmlFor="confirm-email"> Confirm Email : </label>
          <input type="text" className="form-control" name="confirm-email" value={this.state.confirmEmail} onChange={this.handleChangeConfirmEmail}/>
        </div>
        <p style={styles.red}> {this.state.error} </p>
        <button type="submit"> Send </button>
      </form>
    )
  }
}

SignUp.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

export default SignUp
