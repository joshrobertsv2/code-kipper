import { put, takeEvery, call} from 'redux-saga/effects'
import * as actionType from '../../actions/actionTypes'
import * as action from '../../actions/actions'
import API from './api'

export function* watchForUserPosts() {
  try{
    yield takeEvery(actionType.FETCH_USER_POSTS, fetchUserPosts)
  }catch(err) {
    return err
  }
} 

export function* fetchUserPosts({payload}) {
  const result = yield call(API.getUserPosts, payload)

  if(result.status === 200) {
    yield put(action.updateUserPosts(result.data.data))
  }else {
    return
  }
}