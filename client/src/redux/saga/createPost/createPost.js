import { put, takeEvery, call} from 'redux-saga/effects'
import * as actionType from '../../actions/actionTypes'
import * as action from '../../actions/actions'
import API from './api'

export function* watchForNewPost() {
  console.log('watching for new post')
  try{
    yield takeEvery(actionType.CREATE_USER_POST, createPost)
  }catch(err) {

  }
}

function* createPost({payload}) {
  console.log('creating new post')
  console.log(payload)

  try {
    yield call(API.createPost, payload)
    yield put(action.updateAfterCreate({post: payload}))
  }catch(err) {

  }
}