import * as types from '../actions/actionTypes'

const initialState = {
  userPosts: [{
    likes: 0, 
    tags: [''], 
    post_id: '', 
    timestamp: '', 
    snippet: 'test', 
    public: false,
    description: 'dummy post in state reducer', 
    language: '', 
    _id: 'kasjd;fkajsdf;lkajsd'
  }]
}

const postsReducer = (state = initialState, { type, payload }) => {
  console.log(payload)
  switch (type) {

  case types.UPDATE_USER_POSTS:
    return {userPosts: [...payload]}

  default:
    return state
  }
}

export default postsReducer