import React, { useState } from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [userId, changeUserId] = useState('604acd00433005638077804a')
  return (
    <>
      <Router>
        <Switch>
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/register" component={Register} />
          <Route exact path = "/" render={() => <Home userId={userId}/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
