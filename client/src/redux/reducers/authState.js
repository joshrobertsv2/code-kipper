import * as types from '../actions/actionTypes'

const initialState = {
  isAuthenticated: false
}

const authStateReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case types.CHANGE_AUTH_STATUS: 
      return {
        isAuthenticated: payload ?? !state.isAuthenticated
      }

    default: 
      return state
  }
}

export default authStateReducer