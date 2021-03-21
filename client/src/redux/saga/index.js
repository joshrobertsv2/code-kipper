import { spawn } from 'redux-saga/effects'
import { watchUserLogin } from './login/login'

export default function* rootSaga() {
  yield spawn(watchUserLogin)
}