import * as types from '../actions/actionTypes'

const initialState = {
  name: 'Ashley Pean', 
  email: 'pean.ashley@gmail.com', 
  theme: 'Tomorrow', 
  interests: ['JavaScript', 'HTML', 'CSS', 'React', 'Golang'],
  id: '6056d2222cd46ca4a8734eb5', 
  password: '**********'
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case types.REGISTER_USER:
    return { ...state, ...payload }

  case types.REDIRECT_USER: 
    return { ...state, ...payload }
  
  case types.EDIT_USER: 
    return {...state, ...payload}

  default:
    return state
  }
}

export default userReducer