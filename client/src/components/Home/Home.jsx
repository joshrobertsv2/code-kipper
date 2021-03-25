import React, { useState, useEffect } from 'react'
import * as styles from './Home.styles'
import Sidebar from '../Sidebar/Sidebar'
import Modal from '../AddSnippetModal/Modal'
import PostsContainer from './PostsContainer/PostsContainer'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'
import Header from '../Header/Header'

const Home = ({userId, name, theme, userId1, fetchUserPosts, userPosts}) => {
  const [modalOpen, setOpenModal] = useState(false)
  const [editDetails, setEditDetails] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(userPosts)

  useEffect(() => {
    async function loadPosts() {
      await fetchUserPosts(userId)
      setSearchResults(userPosts)
    }
    loadPosts() 
    // eslint-disable-next-line
  }, [])

  const handleSearch = async (e) => {  
    await setSearchQuery(e.target?.value || null)
  }
  
  return (
    <>
      {modalOpen? <Modal changeIsOpen={setOpenModal} editDetails={editDetails} setEditDetails={setEditDetails} userPosts={userPosts} userId={userId} theme={theme}/> : null }

      <Header modalOpen={modalOpen} searchFunc={handleSearch} searchBar={true}/>

      <Sidebar modalOpen={modalOpen} />
 
      <PostsContainer modalOpen={modalOpen} setOpenModal={setOpenModal} editDetails={editDetails} setEditDetails={setEditDetails}  userId={userId} searchResults={searchResults} username={name} theme={theme} userPosts={userPosts} searchQuery={searchQuery}/>

      <styles.Sidecard>
        <styles.Button onClick={() => setOpenModal(true)}>Create a snippet</styles.Button>
      </styles.Sidecard>
    </>
  )
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
  userPosts: state.posts.userPosts,
  theme: state.user.theme,
  name: state.user.name, 
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserPosts: user_id => dispatch(actions.fetchUserPosts(user_id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)