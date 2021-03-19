import React from 'react'
import axios from 'axios'
import Code2 from '../../Code'
import { Container, Post, Username, Likes, Description, Tag, Privacy, TagContainer, Language, BottomContainer, CopiedText } from './PostsContainer.styles'
import { Chip } from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'
import EditSharpIcon from '@material-ui/icons/EditSharp'
import NoEncryptionIcon from '@material-ui/icons/NoEncryption'
import PublicIcon from '@material-ui/icons/Public'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import { v4 as uuidv4 } from 'uuid'

export default function PostsContainer({setOpenModal, setEditDetails, modalOpen, userId, userPosts, changeUserPosts}) {


  const deletePost = async (idx, post_id) => {
    //Delete post in state
    let newState = userPosts
    newState.splice(idx, 1)

    //Send a delete request to the server
    const res = await axios.delete(`/kipper/${userId}`, {data: {post_id}})

    if(res.data.doc.snippet) {
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

  const copySnippet = async (idx) => {
    const snippet = userPosts[idx]?.snippet || 'undefined'

    const clipboard = navigator.clipboard
    clipboard.writeText(snippet)

    const text = document.querySelector(`#post-${idx}-copied-text`)
    text.style.visibility = 'visible'

    setTimeout(() => text.style.visibility = 'hidden', 1500) 
  }

  return (
    <Container modalOpen={modalOpen}>
    {userPosts?.length > 0 ? userPosts.reduceRight( (acc, post, idx) => acc.concat(
      <Post key={post._id} postId={post._id} id={`post-${idx}`}>
        <Username>Ashley Pean</Username>

        <Code2 code={post.snippet} language={post?.language || ''}/>

        <Language><strong>Language: </strong>
          {post.language ? 
            post.language.charAt(0).toUpperCase() + post.language.slice(1) : 
            'N/A'} 
        </Language>

        <Description>
          {post?.description || ''}
        </Description>

        <Tag>Tags: </Tag>
        <TagContainer>
        {post?.tags.map((tag) => (
          <Chip variant="outlined" key={uuidv4()} color="primary"
          label={tag} size="medium"/>
        ))}
        </TagContainer>
        <BottomContainer>
          <Likes><FavoriteIcon color="secondary" />{post?.likes || '0'} </Likes>

          {post?.public ? publicIcon : privateIcon}

          <DeleteIcon color="error" onClick={(e) => deletePost(idx, post._id)}/>
        
          <EditSharpIcon id={`post-${idx}-copy`}onClick={(e) => editPost(idx)} />

          <FileCopyIcon onClick={(e) => copySnippet(idx)} />
          
        </BottomContainer>
          <CopiedText id={`post-${idx}-copied-text`}>Copied!</CopiedText>
      </Post>
    ), []): 'No posts found'}
  </Container>
  )
}

const privateIcon = (
  <Privacy>
    <NoEncryptionIcon />
    Private
  </Privacy>
)

const publicIcon = (
  <Privacy>
    <PublicIcon />
    Public
  </Privacy>
)