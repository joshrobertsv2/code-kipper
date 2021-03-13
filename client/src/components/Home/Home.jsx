import React, { useState, useEffect } from 'react'
import { PostsContainer, Title, Sidecard, Post, Code, Username, Pre, Likes, Tag, Description } from './Home.styles'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { Switch } from '@material-ui/core/'

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

  useEffect( () => {
    AppStyles()
    fetchposts()
  }, [])

  const fetchposts = async () => {
    const user_id = "604acd00433005638077804a"
    
    const res = await axios.get(`/kipper/${user_id}`)
    changeUserPosts(res.data.data)
  }

  const addASnippet = (e) => {

  }


  return (
    <>
      <Title>Code Kipper</Title>
      <Sidebar />
      <PostsContainer>
          {userPosts.map( (post, idx) => (
            <Post key={idx}>
              <Username>Ashley Pean</Username>
              
              <Pre>
                <Code>
                  {post.snippet}
                </Code>
              </Pre>
              <Description>
                {post?.description || dummyText}
              </Description>
              <Likes>{post?.likes || '0'} likes</Likes>
              {post?.tags.map((el, idx) => (
                <Tag>{el}</Tag>
              ))}
              <Switch checked={post.private} />

            </Post>
          ))}
      </PostsContainer>

      <Sidecard>
        <button onClick={addASnippet}>Add a snippet</button>
      </Sidecard>
    </>

  )
}

export default Home
