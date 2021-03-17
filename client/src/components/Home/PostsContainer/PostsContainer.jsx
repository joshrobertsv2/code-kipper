import React from 'react'
import axios from 'axios'
import Code2 from '../../Code'
import { Container, Post, Username, Likes, Description, Tag } from './PostsContainer.styles'
import { Switch, FormControlLabel, Chip } from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp'
import { v4 as uuidv4 } from 'uuid'

export default function PostsContainer({setOpenModal, setEditDetails, modalOpen, userId, userPosts, changeUserPosts}) {
  const deletePost = async (idx, post_id) => {
    //Delete post in state
    let newState = userPosts
    newState.splice(idx, 1)

    //Send a delete request to the server
    const doc = await axios.delete(`/kipper/${userId}`, {data: {post_id}})
    if(doc.snippet) {
      await changeUserPosts([...newState])
    }else {
      window.alert('Could not delete post. Please try again later.')
    }
  }

  const editPost = async (idx) => {
    let newState = userPosts
    const updatedPost = newState[idx]
    await setEditDetails({...updatedPost, idx})
    await setOpenModal(true)
  }

  return (
    <Container modalOpen={modalOpen}>
    {userPosts.reduceRight( (acc, post, idx) => acc.concat(
      <Post key={uuidv4()} postId={post._id}>
        <Username>Ashley Pean</Username>

        <Code2 code={post.snippet} language={post?.language || ''}/>

        <Likes><strong>Language: </strong>
          {post.language ? 
            post.language.charAt(0).toUpperCase() + post.language.slice(1) : 
            'N/A'} 
        </Likes>

        <Description>
          {post?.description || ''}
        </Description>

        <Likes>{post?.likes || '0'} likes</Likes>

        <Tag>Tags: </Tag>
        {post?.tags.map((tag) => (
          <Chip variant="outlined" key={uuidv4()} color="primary"
          label={tag}/>
        ))}


        <FormControlLabel 
          control={<Switch color="primary" checked={post?.private || false} />}
          label={post.private? 'Private': 'Public'}
        />


        <DeleteIcon onClick={(e) => deletePost(idx, post._id)}/>
        
        <EditSharpIcon onClick={(e) => editPost(idx)}/>
      </Post>
    ), [])}
</Container>
  )
}
