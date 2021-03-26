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
  
  case types.EDIT_AFTER_DELETE:
    const { post_id } = payload
    console.log('editing', post_id) 
    let newPosts = state.userPosts
    console.log(newPosts)
    newPosts = newPosts.filter(post => post._id !== post_id)
    console.log(newPosts)
    return {userPosts: [...newPosts]}

  default:
    return state
  }
}

export default postsReducer