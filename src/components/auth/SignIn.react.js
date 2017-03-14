import React, { Component } from 'react'
import './SignIn.css'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pseudo: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangePseudo = this.handleChangePseudo.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleSubmit(e) {
    this.setState({ submitted: ('pseudo : ' + this.state.pseudo + ', password: ' + this.state.password) })
    e.preventDefault()
  }

  handleChangePseudo(e) {
    this.setState({ pseudo: e.target.value })
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <form className="pseudo-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="pseudo"> Pseudo : </label>
          <input type="text" className="form-control" name="pseudo" value={this.state.pseudo} onChange={this.handleChangePseudo}/>
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

export default SignIn
