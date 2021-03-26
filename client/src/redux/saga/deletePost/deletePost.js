import { put, call, takeEvery } from 'redux-saga/effects'
import API from './api'
import * as actionType from '../../actions/actionTypes'
import * as action from '../../actions/actions'

export function* watchForDeletePost() {
  try{
    yield(takeEvery(actionType.DELETE_POST, deleteUserPost))
  }catch(err) {
    return err
  }
}

function* deleteUserPost({payload}) {
 try {
    yield put(action.editAfterDelete({post_id: payload.post_id}))
    yield call(API.deletePost, {
      post_id: payload.post_id, 
    })
 } catch(err) {
   return err
 }
}