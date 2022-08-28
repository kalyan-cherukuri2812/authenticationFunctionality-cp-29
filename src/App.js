import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import ProtectedRoute from './components/ProtectedRoute'
import Notfound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch className="bg">
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route component={Notfound} />
  </Switch>
)

export default App
