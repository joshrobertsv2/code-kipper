import { put, takeEvery, call} from 'redux-saga/effects'
import * as actionType from '../../actions/actionTypes'
import * as action from '../../actions/actions'
import API from './api'

export function* watchForLogout() {
  try{
    yield(takeEvery(actionType.LOGOUT_USER, logoutSaga))
  }catch(err) {
    return err
  }
}

function* logoutSaga() {
  try{
    yield(call(API.logoutUser))
    yield(put(action.changeAuthStatus(false)))
  }catch(err) {
    return err
  }
}