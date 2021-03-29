import * as types from './actionTypes'

//AUTHORIZATION 
export const changeAuthStatus = (bool) => ({
  type: types.CHANGE_AUTH_STATUS, 
  payload: bool,
})

export const checkAuthStatus = () => ({
  type: types.CHECK_AUTH_STATUS, 
  payload: {}
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
export const createUserPost = (post) => ({
  type: types.CREATE_USER_POST, 
  payload: post
})

export const updateAfterCreate = (post) => ({
  type: types.UPDATE_AFTER_CREATE, 
  payload: post
})

export const fetchUserPosts = (user_id) => ({
  type: types.FETCH_USER_POSTS, 
  payload: user_id,
})

export const updateUserPosts = (posts) => ({
  type: types.UPDATE_USER_POSTS, 
  payload: posts
})

export const deletePost = (post_id) => ({
  type: types.DELETE_POST, 
  payload: {post_id}
})

export const editPost = (post) => ({
  type: types.EDIT_POST, 
  payload: {post}
})

export const editAfterDelete = (post_id) => ({
  type: types.EDIT_AFTER_DELETE, 
  payload: post_id
})

export const updateAfterEdit = (post) => ({
  type: types.UPDATE_AFTER_EDIT, 
  payload: post
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

//User feeed 
export const fetchUserFeed = (user_id) => ({
  type: types.FETCH_USER_FEED,
  payload: {user_id}
})

export const loadUserFeed = (posts) => ({
  type: types.LOAD_USER_FEED,
  payload: posts
}) 