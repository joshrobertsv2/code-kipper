import React, { useState, useEffect } from 'react'
import { useLocation} from 'react-router-dom'
import * as styles from './Home.styles'
import Sidebar from '../Sidebar/Sidebar'
import Modal from '../AddSnippetModal/Modal'
import PostsContainer from './PostsContainer/PostsContainer'
import NotificationsIcon from '@material-ui/icons/Notifications'
import axios from 'axios'

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

const Home = ({userId}) => {
  const [modalOpen, setOpenModal] = useState(false)
  const [editDetails, setEditDetails] = useState(null)
  const [userPosts, changeUserPosts] = useState([dummyData])
  const location = useLocation()
  const currentTabOpts = {
    '/': 'Dashboard', 
    '/feed': 'Feed',
  }

  console.log("path: ", location.pathname)


  useEffect(() => {
    const fetchPosts = async () => {    
      const res = await axios.get(`/kipper/${userId}`)
      const newState = res.data.data
      await changeUserPosts(newState)
    }
    fetchPosts()
  }, [])

  useEffect( () => {
    AppStyles()
  }, [])
  
  return (
    <>
      {modalOpen? <Modal isOpen={modalOpen} changeIsOpen={setOpenModal} editDetails={editDetails} setEditDetails={setEditDetails} userPosts={userPosts} changeUserPosts={changeUserPosts} userId={userId}/> : null }
      
      <styles.Header>
        <styles.CurrentTab>{currentTabOpts[location.pathname]}</styles.CurrentTab>
        <styles.SearchBar placeholder="Search here"></styles.SearchBar>
        <styles.Title modalOpen={modalOpen}>CodeKipper</styles.Title>
        <styles.IconsContainer>
          <NotificationsIcon fontSize="large"/>
          <styles.Profile>A</styles.Profile>
        </styles.IconsContainer>
      </styles.Header>
      

      <Sidebar modalOpen={modalOpen} />
 
      <PostsContainer setOpenModal={setOpenModal} editDetails={editDetails} setEditDetails={setEditDetails} modalOpen={modalOpen} userId={userId} userPosts={userPosts} changeUserPosts={changeUserPosts}/>

      <styles.Sidecard>
        <styles.Button onClick={() => setOpenModal(true)}>Create a snippet</styles.Button>
      </styles.Sidecard>
    </>
  )
}

const AppStyles = () => {
  const app = document.querySelector('#root')
  app.height = 'auto'

  app.style.display = 'grid'
  app.style.gridTemplateRows = '.5fr 1fr 1fr 1fr 1fr'
  app.style.gridTemplateColumns = '.25fr 1fr 1fr 1fr 1fr '
  app.style.gridTemplateAreas = `
  "sidebar header header header header"
  "sidebar . home home sidecard" 
  "sidebar . home home sidecard" 
  "sidebar . home home ." 
  "sidebar . home home ."  `
}

export default Home