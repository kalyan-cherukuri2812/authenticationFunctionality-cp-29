import './index.css'

import {Component} from 'react'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <Header />
        <h1>Home Route</h1>
        <LogoutButton />
      </div>
    )
  }
}

export default Home
