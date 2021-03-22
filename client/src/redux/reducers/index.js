import { combineReducers } from 'redux'
import authStateReducer from './authState'
import userReducer from './user'
import postsReducer from './posts'

const reducers = combineReducers({
  authState: authStateReducer, 
  user: userReducer, 
  posts: postsReducer,
})

export default reducers