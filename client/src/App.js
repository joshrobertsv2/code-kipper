import React, {  useEffect } from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import Feed from './components/Feed/Feed'
import Settings from './components/Settings/Settings'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect} from 'react-redux'
import * as actions from './redux/actions/actions'

function App({isAuthenticated, checkAuthStatus}) {

  useEffect(() => {
    checkAuthStatus()
  //eslint-disable-next-line
  }, [])

  return isAuthenticated?  AppRoutes : LoginRoutes
}

const AppRoutes = (
<>
  <Router>
    <Switch>
      <Route exact path = "/feed" component={Feed}/>
      <Route exact path="/settings" component={Settings} />  
      <Route exact path = "/" component={Home} />
      <Route>
        <Redirect to="/"/>
      </Route>
    </Switch>
  </Router>
</>
)

const LoginRoutes = (
<>
  <Router>
    <Switch>
      <Route exact path = "/login" component={Login} />
      <Route exact path = "/register" component={Register} />
      <Route path = "/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  </Router>
</>
)

const mapStateToProps = (state) => ({
  isAuthenticated: state.authState.isAuthenticated
})

const mapDispatchToProps = (dispatch) => ({
  checkAuthStatus: () => dispatch(actions.checkAuthStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
