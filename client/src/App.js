import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/register" component={Register} />
          <Route exact path = "/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
