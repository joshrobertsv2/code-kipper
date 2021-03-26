import { spawn } from 'redux-saga/effects'
import { watchUserLogin } from './login/login'
import { watchUserRegistration } from './register/register'
import { watchForUserPosts } from './userPosts/userPosts'
import { watchForChangeInSettings } from './settings/settings'
import { watchForLogout } from './logout/logout'
import { watchForUserAuthCheck } from './checkAuthStatus/checkAuthStatus'

export default function* rootSaga() {
  yield spawn(watchUserLogin)
  yield spawn(watchUserRegistration)
  yield spawn(watchForUserPosts)
  yield spawn(watchForChangeInSettings)
  yield spawn (watchForLogout)
  yield spawn (watchForUserAuthCheck)
}