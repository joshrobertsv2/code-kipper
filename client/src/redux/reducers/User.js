import * as types from '../actions/actionTypes'

const initialState = {

}

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case 'typeName':
    return { ...state, ...payload }

  default:
    return state
  }
}

export default UserReducer