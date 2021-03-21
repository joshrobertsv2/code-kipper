import { combineReducers } from 'redux'
import authStateReducer from './authState'
import userReducer from './user'

const reducers = combineReducers({
  authState: authStateReducer, 
  user: userReducer, 

})

export default reducers