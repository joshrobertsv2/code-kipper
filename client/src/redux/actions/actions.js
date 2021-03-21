import * as types from './actionTypes'

//AUTHORIZATION 
export const changeAuthStatus = (bool) => ({
  type: types.CHANGE_AUTH_STATUS, 
  payload: bool,
})

export const registerUser = (user) => ({
  type: types.REGISTER_USER, 
  payload: user,
})

export const requestLogin = (user) => ({
  type: types.REQUEST_LOGIN,
  payload: user,
})

export const receiveLoginStatus = (data) => ({
  type: types.RECEIVE_LOGIN_STATUS, 
  data,
})

export const redirectLoggedInUser = () => ({
  type: types.REDIRECT_USER
})



