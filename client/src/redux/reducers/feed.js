import * as types from '../actions/actionTypes'

const initialState = [{
  likes: 0, 
  tags: ["javascript", "html"], 
  language: "Javascript", 
  user_id: "605722766b1d4abe2b15066c", 
  snippet: "const test = 'test'", 
  public: true, 
  description: "testing the feed feature", 
  created_at: Date.now().toString(), 
  updated_at: Date.now().toString()
}]

const feedReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case types.LOAD_USER_FEED: 
      console.log(payload)
      return payload

    default: 
      return state
  }
}

export default feedReducer