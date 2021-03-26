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
  let newPosts 
  switch (type) {
  case types.UPDATE_USER_POSTS:
    return {userPosts: [...payload]}
  
  case types.EDIT_AFTER_DELETE:
    const { post_id } = payload
    newPosts = state.userPosts
    newPosts = newPosts.filter(post => post._id !== post_id)
    return {userPosts: [...newPosts]}

  case types.UPDATE_AFTER_EDIT: 
    const { post } = payload

    newPosts = state.userPosts
    newPosts = state.userPosts.map(userPost => {
      if(userPost._id === post._id) 
        return post
      else return userPost
    })
    return {userPosts: [...newPosts]}

  case types.UPDATE_AFTER_CREATE: 
    let createdPost = payload.post 
    return {userPosts: [...state.userPosts, createdPost]}

  default:
    return state
  }
}

export default postsReducer