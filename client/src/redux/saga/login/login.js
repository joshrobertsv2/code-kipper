import { put, takeEvery, call} from 'redux-saga/effects'
import * as actionType from '../../actions/actionTypes'
import * as action from '../../actions/actions'
import API from './api'


export function* watchUserLogin() {
  try{
    yield takeEvery(actionType.REQUEST_LOGIN, loginSaga)
  }catch(err) {
    return err
  }
}

//TODO: Get better error handling for bad logins 
function* loginSaga({payload}) {
  const result = yield call(API.login, payload)


  if(result.status === 200) {
    const { email, name, _id, interests, theme } = result.data
    yield put(action.editUser({id: _id, name, interests, email, theme}))
    yield put(action.changeAuthStatus(true))
    
  }else {
    yield put(action.changeAuthStatus(false))
  }
}



