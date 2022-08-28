import {Redirect} from 'react-router-dom'

import './index.css'

import {Component} from 'react'
import cookies from 'js-cookie'

class Login extends Component {
  state = {logedin: false}

  loginBtn = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const respData = await response.json()

    console.log(response)
    console.log(respData)
    if (response.ok) {
      cookies.set('jwt_token', respData.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
      this.setState(prev => ({logedin: !prev.logedin}))
    }
  }

  render() {
    const {logedin} = this.state
    if (cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    console.log(logedin)
    return (
      <div className="bg-container">
        <h1>Please Login</h1>
        <button onClick={this.loginBtn} type="button">
          Login with Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
