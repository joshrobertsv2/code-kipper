import { put, call, takeEvery } from 'redux-saga/effects'
import API from './api'
import * as actionType from '../../actions/actionTypes'
import * as action from '../../actions/actions'

export function* watchForEdit() {
  try{
    yield(takeEvery(actionType.EDIT_POST, editPost))
  }catch(err) {
    return err
  }
}

function* editPost({payload}) {
  try{
    yield put(action.updateAfterEdit({post: payload.post}))
    yield call(API.editPost, {post: payload.post})
  }catch(err) {

  }
}