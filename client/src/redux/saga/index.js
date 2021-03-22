import { spawn } from 'redux-saga/effects'
import { watchUserLogin } from './login/login'
import { watchUserRegistration } from './register/register'
import { watchForUserPosts } from './userPosts/userPosts'

export default function* rootSaga() {
  yield spawn(watchUserLogin)
  yield spawn(watchUserRegistration)
  yield spawn(watchForUserPosts)
}