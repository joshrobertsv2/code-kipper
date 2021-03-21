import { put, takeEvery, call} from 'redux-saga/effects'
import * as actionType from '../../actions/actionTypes'
import * as action from '../../actions/actions'
import API from './api'


export function* watchUserLogin() {
  try{
    yield takeEvery(actionType.REQUEST_LOGIN, loginSaga)
  }catch(err) {
    console.log(err)
  }
}

function* loginSaga({payload}) {
  const result = yield call(API.login, payload)

  if(result.status === 200) {
    yield put(action.changeAuthStatus(true))
    yield call(API.redirect)
  }else {
    yield put(action.changeAuthStatus(false))
  }
}



