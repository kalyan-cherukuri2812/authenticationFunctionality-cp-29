import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <Link className="link" to="/">
      Home
    </Link>
    <Link className="link" to="/about">
      About
    </Link>
  </div>
)

export default Header
