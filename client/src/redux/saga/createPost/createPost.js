import { put, takeEvery, call} from 'redux-saga/effects'
import * as actionType from '../../actions/actionTypes'
import * as action from '../../actions/actions'
import API from './api'

export function* watchForNewPost() {
  try{
    yield takeEvery(actionType.CREATE_USER_POST, createPost)
  }catch(err) {
    return err
  }
}

function* createPost({payload}) {
  try {
    yield call(API.createPost, payload)
    yield put(action.updateAfterCreate({post: payload}))
  }catch(err) {

  }
}