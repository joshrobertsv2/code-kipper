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
  switch (type) {

  case types.UPDATE_USER_POSTS:
    return {userPosts: [...payload]}

  case types.DELETE_POST:
    const { postIdx } = payload
      const newState = state.userPosts 
      newState.splice(postIdx, 1)

      return {userPosts: [...newState]}

  default:
    return state
  }
}

export default postsReducer