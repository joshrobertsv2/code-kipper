import React, { useState, useEffect } from 'react'
import * as styles from './Home.styles'
import Sidebar from '../Sidebar/Sidebar'
import Modal from '../AddSnippetModal/Modal'
import PostsContainer from './PostsContainer/PostsContainer'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'
import Header from '../Header/Header'
import Fuse from 'fuse.js'

const Home = ({userId, name, fetchUserPosts, userPosts}) => {
  const [modalOpen, setOpenModal] = useState(false)
  const [editDetails, setEditDetails] = useState(null)
  const [searchResults, setSearchResults] = useState('')

  useEffect(() => {
    fetchUserPosts(userId)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    async function set() {
      await setSearchResults(userPosts)
    }
    set()
    // eslint-disable-next-line
  }, [userPosts])

  const handleSearch = async (e) => {  
    const query = e?.target?.value || null

    if(query) {
      const options = {
        findAllMatches: true,
        keys: ['filename', 'tags', 'language', 'description', {name: 'snippet', weight: 1}],
      }

      const fuse = new Fuse(userPosts, options)
      const search = fuse.search(query)
      setSearchResults(search.map(el => el?.item))
    }else {
      setSearchResults(userPosts)
    }
  }
  
  return (
    <>
      {modalOpen? <Modal changeIsOpen={setOpenModal} editDetails={editDetails} setEditDetails={setEditDetails} userPosts={userPosts} userId={userId} searchResults={searchResults} /> : null }

      <Header modalOpen={modalOpen} searchFunc={handleSearch} searchBar={true}/>

      <Sidebar modalOpen={modalOpen} />
 
      <PostsContainer modalOpen={modalOpen} setOpenModal={setOpenModal} editDetails={editDetails} setEditDetails={setEditDetails} username={name} userPosts={userPosts} searchResults={searchResults}/>

      <styles.Sidecard>
        <styles.Button onClick={() => setOpenModal(true)}>Create a snippet</styles.Button>
      </styles.Sidecard>
    </>
  )
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
  userPosts: state.posts.userPosts,
  name: state.user.name, 
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserPosts: user_id => dispatch(actions.fetchUserPosts(user_id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)