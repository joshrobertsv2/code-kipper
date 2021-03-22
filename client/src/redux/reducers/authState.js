import * as types from '../actions/actionTypes'

const initialState = {
  isAuthenticated: true
}

const authStateReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case types.CHANGE_AUTH_STATUS: 
      console.log('changing auth status', payload)
      return {
        isAuthenticated: payload ?? !state.isAuthenticated
      }

    default: 
      return state
  }
}

export default authStateReducer