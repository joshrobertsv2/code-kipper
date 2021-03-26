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

  return isAuthenticated?  AppRoutes : ProtectedRoutes
}

const AppRoutes = (
<>
  <Router>
    <Switch>
      <Route exact path = "/feed" component={Feed}/>
      <Route exact path="/settings" component={Settings} />
      <Route path = "/" component={Home} />
    </Switch>
  </Router>
</>
)

const ProtectedRoutes = (
<>
  <Router>
    <Switch>
      <Route exact path = "/login" component={Login} />
      <Route exact path = "/register" component={Register} />
      <Route exact path = "/feed" component={Feed}/>
      <Route path = "/" component={Login}>
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
