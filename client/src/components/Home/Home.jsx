import React, { useState, useEffect } from 'react'
import { PostsContainer, Title, Sidecard, Post, Username, Likes, Tag, Description, Button } from './Home.styles'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { Switch, FormControlLabel, Chip } from '@material-ui/core/'
import Code2 from '../Code'
import Modal from '../AddSnippetModal/Modal'

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
  ". home home ."  
  `
}

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'




const Home = () => {
  const [userPosts, changeUserPosts] = useState([{
    likes: 0, 
    tags: [''], 
    post_id: '', 
    timestamp: '', 
    snippet: '', 
    private: false,
  }])

  const [modalOpen, setOpenModal] = useState(false)

  useEffect( () => {
    AppStyles()
    fetchposts()
  }, [])

  const fetchposts = async () => {
    const user_id = "604acd00433005638077804a"
    
    const res = await axios.get(`/kipper/${user_id}`)
    changeUserPosts(res.data.data)
  }

  const changePrivacy = async (e, idx) => {
    console.log(e.target.checked)
    const postsCopy = userPosts
    postsCopy[idx] = {...postsCopy[idx], private: !postsCopy[idx].private}
    await changeUserPosts(postsCopy)
    console.log(userPosts)
  }


  return (
    <>
      <Modal isOpen={modalOpen} changeIsOpen={setOpenModal}/>
      <Title modalOpen={modalOpen}>Code Kipper</Title>
      <Sidebar modalOpen={modalOpen} />
      <PostsContainer modalOpen={modalOpen}>
          {userPosts.map( (post, idx) => (
            <Post key={idx}>
              <Username>Ashley Pean</Username>
              <Code2 code={post?.snippet} language="javascript"/>
              <Description>
                {post?.description || dummyText}
              </Description>
              <Likes>{post?.likes || '0'} likes</Likes>
              <Tag>Tags: </Tag>
              {post?.tags.map((tag, idx) => (
                <Chip variant="outlined" key={idx} color="primary"
                label={tag}/>
              ))}
              <FormControlLabel 
              control={<Switch color="primary" checked={post?.private || false} />}
              label={post.private? 'Private': 'Public'}
              />
              
            </Post>
          ))}
      </PostsContainer>

      <Sidecard >
        <Button onClick={() => setOpenModal(true)}>+</Button>
      </Sidecard>
    </>

  )
}



export default Home
