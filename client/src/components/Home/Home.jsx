import React, { useState, useEffect } from 'react'
import { useLocation} from 'react-router-dom'
import * as styles from './Home.styles'
import Sidebar from '../Sidebar/Sidebar'
import Modal from '../AddSnippetModal/Modal'
import PostsContainer from './PostsContainer/PostsContainer'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Fuse from 'fuse.js'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'

//TODO : 
const dummyData = {
  likes: 0, 
  tags: [''], 
  post_id: '', 
  timestamp: '', 
  snippet: 'test', 
  public: false,
  description: '', 
  language: '', 
  _id: 'kasjd;fkajsdf;lkajsd'
}

const Home = ({userId, name, theme, userId1, fetchUserPosts1, userPosts, searchResults}) => {
  const [modalOpen, setOpenModal] = useState(false)
  const [editDetails, setEditDetails] = useState(null)
  const [searchResults1, setSearchResults ] = useState()
  const [userPosts1, changeUserPosts] = useState([dummyData])
  const location = useLocation()
  const currentTabOpts = {
    '/': 'Dashboard', 
    '/feed': 'Feed',
    '/settings': 'Settings'
  }

  useEffect(() => {
    fetchUserPosts1(userId)
    setSearchResults(userPosts)
    // eslint-disable-next-line
  }, [])

  const handleSearch = async (e) => {
    const query = e.target.value

    if(query === ' ' || query === '') {
      setSearchResults(userPosts)
    }else {
      const options = {
        findAllMatches: true,
        keys: ['filename', 'tags', 'language', 'description', 'snippet'],
      }
      const fuse = new Fuse(userPosts, options)
      const search = fuse.search(query)
      const searchResults = search.map(el => el?.item)
      setSearchResults(searchResults)
    }    
  }
  
  return (
    <>
      {modalOpen? <Modal isOpen={modalOpen} changeIsOpen={setOpenModal} editDetails={editDetails} setEditDetails={setEditDetails} userPosts={userPosts} changeUserPosts={changeUserPosts} userId={userId} theme={theme} setSearchResults={setSearchResults}/> : null }
      
      <styles.Header>
        <styles.CurrentTab>{currentTabOpts[location.pathname]}</styles.CurrentTab>
        <styles.SearchBar placeholder="Search here" onChange={handleSearch}></styles.SearchBar>
        <styles.Title modalOpen={modalOpen}>CodeKipper</styles.Title>
        <styles.IconsContainer>
          <NotificationsIcon fontSize="large"/>
          <styles.Profile>A</styles.Profile>
        </styles.IconsContainer>
      </styles.Header>
      

      <Sidebar modalOpen={modalOpen} />
 
      <PostsContainer modalOpen={modalOpen} setOpenModal={setOpenModal} editDetails={editDetails} setEditDetails={setEditDetails}  userId={userId} userPosts={searchResults} changeUserPosts={changeUserPosts} username={name} theme={theme}/>

      <styles.Sidecard>
        <styles.Button onClick={() => setOpenModal(true)}>Create a snippet</styles.Button>
      </styles.Sidecard>
    </>
  )
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
  userPosts: state.posts.userPosts,
  searchResults: state.posts.searchResults,
  theme: state.user.theme,
  name: state.user.name, 
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserPosts1: user_id => dispatch(actions.fetchUserPosts(user_id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)