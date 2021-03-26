import { put, takeEvery, call } from 'redux-saga/effects'
import * as actionType from '../../actions/actionTypes'
import * as action from '../../actions/actions'
import API from './api'

export function* watchForChangeInSettings() {
  try {
    yield takeEvery(actionType.CHANGE_SETTINGS, changeSettings)
  }catch(err) {
    return err
  }
}

function* changeSettings({payload}) {
  try {
    const result = yield call(API.editUser, payload.settings)

    if(result.status === 200) {
      const {email, interests, theme, name} = result.data.data
      yield put(action.editUser({email, interests, theme, name}))
    }else return
  }catch(err) {
    return err
  }
}