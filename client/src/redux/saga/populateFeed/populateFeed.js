import { put, takeEvery, call} from 'redux-saga/effects'
import * as actionType from '../../actions/actionTypes'
import * as actions from '../../actions/actions'
import API from './api'

export function* watchForFeed() {
  try {
    yield takeEvery(actionType.FETCH_USER_FEED, loadUserFeed)
  }catch(err) {
    return err
  }
  
}

function* loadUserFeed({payload: {user_id}}) {
  try {
    const posts = yield call(API.fetchFeed, user_id)
    yield put(actions.loadUserFeed(posts))
  }catch(err) {
    return err 
  }
}