import React, { useState, useEffect } from 'react'
import { Title, Sidecard,Button } from './Home.styles'
import Sidebar from '../Sidebar/Sidebar'
import Modal from '../AddSnippetModal/Modal'
import PostsContainer from './PostsContainer/PostsContainer'
import axios from 'axios'

const dummyData = {
  likes: 0, 
  tags: [''], 
  post_id: '', 
  timestamp: '', 
  snippet: 'test', 
  private: false,
  description: '', 
  language: '', 
  _id: 'kasjd;fkajsdf;lkajsd'
}

const Home = ({userId}) => {
  const [modalOpen, setOpenModal] = useState(false)
  const [editDetails, setEditDetails] = useState(null)

  const [userPosts, changeUserPosts] = useState([dummyData])


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
      

      <Title modalOpen={modalOpen}>Code Kipper</Title>

      <Sidebar modalOpen={modalOpen} />
 
      <PostsContainer setOpenModal={setOpenModal} editDetails={editDetails} setEditDetails={setEditDetails} modalOpen={modalOpen} userId={userId} userPosts={userPosts} changeUserPosts={changeUserPosts}/>

      <Sidecard>
        <Button onClick={() => setOpenModal(true)}>+</Button>
      </Sidecard>
    </>
  )
}

const AppStyles = () => {
  const app = document.querySelector('#root')
  app.height = 'auto'

  app.style.display = 'grid'
  app.style.gridTemplateRows = '.5fr 1fr 1fr 1fr 1fr'
  app.style.gridTemplateColumns = '1fr 1fr 1fr 1fr '
  app.style.gridTemplateAreas = `
  "header header header header"
  "sidebar home home sidecard" 
  "sidebar home home sidecard" 
  ". home home ." 
  ". home home ."  `
}

export default Home