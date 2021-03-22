import * as types from '../actions/actionTypes'

const initialState = {
  userPosts: [{
    likes: 0, 
    tags: [''], 
    post_id: '', 
    timestamp: '', 
    snippet: 'test', 
    public: false,
    description: '', 
    language: '', 
    _id: 'kasjd;fkajsdf;lkajsd'
  }], 
  searchResults: [{
    likes: 0, 
    tags: [''], 
    post_id: '', 
    timestamp: '', 
    snippet: 'test', 
    public: false,
    description: '', 
    language: '', 
    _id: 'kasjd;fkajsdf;lkajsd'
  }]
}

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case types.UPDATE_USER_POSTS:
    return {userPosts: [...payload], searchResults: [...payload]}

  default:
    return state
  }
}

export default postsReducer