import React, { useState } from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import Feed from './components/Feed/Feed'
import Settings from './components/Settings/Settings'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  // eslint-disable-next-line
  const [userId, changeUserId] = useState('604acd00433005638077804a')
  const [userInfo, changeUserInfo] = useState({
    Name: 'Ashley Pean', 
    Email: 'pean.ashley@gmail.com', 
    Password: '**********',
    RealPassword: '', 
    Theme: 'Tomorrow', 
    Interests: ['JavaScript', 'HTML', 'CSS', 'React', 'Golang'],
  })

  return (
    <>
      <Router>
        <Switch>
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/register" component={Register} />
          <Route exact path = "/feed" component={Feed}/>
          <Route exact path="/settings" render={() =>  <Settings userInfo={userInfo} changeUserInfo={changeUserInfo}/>} />
          <Route exact path = "/" render={() => <Home userId={userId} name={userInfo.Name} theme={userInfo.Theme}/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
