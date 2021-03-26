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

export const logoutUser = () => ({
  type: types.LOGOUT_USER, 
  payload: {}
})

export const receiveLoginStatus = (data) => ({
  type: types.RECEIVE_LOGIN_STATUS, 
  data,
})

export const redirectLoggedInUser = () => ({
  type: types.REDIRECT_USER
})

//USER POSTS
export const fetchUserPosts = (user_id) => ({
  type: types.FETCH_USER_POSTS, 
  payload: user_id,
})

export const updateUserPosts = (posts) => ({
  type: types.UPDATE_USER_POSTS, 
  payload: posts
})

export const deletePost = (user_id, post_id) => ({
  type: types.DELETE_POST, 
  payload: {user_id, post_id}
})

export const editPost = (user_id, post_id) => ({
  type: types.EDIT_POST, 
  payload: {user_id, post_id}
})

//User info 
export const changeSettings = (settings) => ({
  type: types.CHANGE_SETTINGS, 
  payload: settings
})

export const editUser = (settings) => ({
  type: types.EDIT_USER, 
  payload: settings
})
