const regex = {
  pseudo: /^[\w-]{3,24}$/,
  password: /^.{8,}$/,
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
}
regex.pseudo.description = 'between 3 and 24 characters, no special characters exept "_"'
regex.password.description = 'minimum 8 characters'
regex.email.description = ''

export default regex
