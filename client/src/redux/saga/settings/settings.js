import { put, takeEvery, call } from 'redux-saga/effects'
import * as actionType from '../../actions/actionTypes'
import * as action from '../../actions/actions'
import API from './api'

export function* watchForChangeInSettings() {
  console.log('watching for settings')
  try {
    yield takeEvery(actionType.CHANGE_SETTINGS, changeSettings)
  }catch(err) {
    return err
  }
}

function* changeSettings({payload}) {
  console.log(payload.settings)
  try {
    const result = yield call(API.editUser, payload.settings)
  }catch(err) {
    return err
  }
}