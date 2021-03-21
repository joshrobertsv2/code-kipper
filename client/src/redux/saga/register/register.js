import { put, takeEvery, call} from 'redux-saga/effects'
import * as actionType from '../../actions/actionTypes'
import * as action from '../../actions/actions'
import API from './api'

export function* watchUserRegistration() {
  try {
    yield takeEvery(actionType.REGISTER_USER, registerSaga)
  }catch(err) {
    return err
  }
}

function* registerSaga ({payload}) {
  const result = yield call(API.register, payload)

  if(result.status === 200) {
    yield put(action.changeAuthStatus(true))
    yield call(API.redirect)
  }else {
    yield put(action.changeAuthStatus(false))
  }
}