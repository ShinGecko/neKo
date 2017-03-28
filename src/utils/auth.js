const request = require('superagent')

const signIn = (login, password) => {
  request
    .post('http://localhost:8085/users/auth')
    .send({ login, password })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .end(function (err) {
      if (err) {
        console.log(err)
      }
        // Calling the end function will send the request
    })
}

const signUp = (login, password, email) => {
  request
    .post('http://localhost:8085/users/create')
    .send({ login, email, password })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .end(function (err) {
      if (err) {
        console.log(err)
      }
        // Calling the end function will send the request
    })
}

module.exports = { signIn, signUp }
