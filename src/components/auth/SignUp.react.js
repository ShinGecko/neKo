import React, { Component } from 'react'

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

    this.props.onSubmit(pseudo, password, email)

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

        <button type="submit"> Send </button>
      </form>
    )
  }
}

SignUp.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

export default SignUp
