import { put, takeEvery, call} from 'redux-saga/effects'
import * as actionType from '../../actions/actionTypes'
import * as action from '../../actions/actions'
import API from './api'

export function* watchForUserAuthCheck() {
  try{
    yield(takeEvery(actionType.CHECK_AUTH_STATUS, checkForUserAuthStatus))
  }catch(err) {
    return err
  }
}

function* checkForUserAuthStatus() {
  try{
    const {authStatus, userInfo} = yield call(API.checkAuthStatus) //result: BOOLEAN

    if(authStatus) {
      yield(put(action.editUser(userInfo)))
    }
    yield(put(action.changeAuthStatus(authStatus)))
  }catch(err) {
    return err
  }
}