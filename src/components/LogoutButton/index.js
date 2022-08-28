// Write your JS code here

import {withRouter} from 'react-router-dom'
import cookies from 'js-cookie'

const LogoutButton = props => {
  const logoutClick = () => {
    console.log(props)
    const {history} = props
    cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div>
      <button onClick={logoutClick} type="button">
        logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
