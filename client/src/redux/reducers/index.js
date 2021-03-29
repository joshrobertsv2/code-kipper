import { combineReducers } from 'redux'
import authStateReducer from './authState'
import userReducer from './user'
import postsReducer from './posts'
import feedReducer from './feed'

const reducers = combineReducers({
  authState: authStateReducer, 
  user: userReducer, 
  posts: postsReducer,
  feed: feedReducer,
})

export default reducers