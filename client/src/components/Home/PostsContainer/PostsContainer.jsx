import React from 'react'
import axios from 'axios'
import CodeBlock from '../../Code'
import * as styles from './PostsContainer.styles'
import { makeStyles } from '@material-ui/core/styles'
import { Chip } from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'
import EditSharpIcon from '@material-ui/icons/EditSharp'
import NoEncryptionIcon from '@material-ui/icons/NoEncryption'
import PublicIcon from '@material-ui/icons/Public'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import { v4 as uuidv4 } from 'uuid'
import Fuse from 'fuse.js'

function PostsContainer({setOpenModal, setEditDetails, modalOpen, userId, userPosts, changeUserPosts, username, searchQuery}) {
  const classes = makeStyles(materialStyles)()

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

  const filterPosts = (query) => {
    if(!query || query === ' ' || query === '') {
      return userPosts
    }else {
      const options = {
        findAllMatches: true,
        keys: ['filename', 'tags', 'language', 'description', {name: 'snippet', weight: 1}],
      }
      const fuse = new Fuse(userPosts, options)
      const search = fuse.search(query)
      return search.map(el => el?.item)
    }
  }

  return (
    <styles.Container modalOpen={modalOpen}>
    {filterPosts(searchQuery).length > 0 ? filterPosts(searchQuery).reduceRight( (acc, post, idx) => acc.concat(
      <styles.Post key={uuidv4()} postId={post._id} id={`post-${idx}`}>
        <styles.Username>{username}</styles.Username>

        <CodeBlock code={post.snippet} language={post?.language || ''} />

        <styles.Language><strong>Language: </strong>
          {post.language ? 
            post.language.charAt(0).toUpperCase() + post.language.slice(1) : 
            'N/A'} 
        </styles.Language>

        <styles.Description>
          {post?.description || ''}
        </styles.Description>

        <styles.Tag>Tags: </styles.Tag>
        <styles.TagContainer>
        {post?.tags.map((tag) => (
          <Chip variant="outlined" key={uuidv4()} className={classes.chip}
          label={tag} size="medium"/>
        ))}
        </styles.TagContainer>
        <styles.BottomContainer>
          <styles.Likes>
            <FavoriteIcon color="secondary" />{post?.likes || '0'} 
          </styles.Likes>

          {post?.public ? publicIcon : privateIcon}

          <DeleteIcon color="error" onClick={(e) => deletePost(idx, post._id)}/>
        
          <EditSharpIcon id={`post-${idx}-copy`}onClick={(e) => editPost(idx)} />

          <FileCopyIcon onClick={(e) => copySnippet(idx)} />
          
        </styles.BottomContainer>
          <styles.CopiedText id={`post-${idx}-copied-text`}>Copied!</styles.CopiedText>
      </styles.Post>
    ), []): 'No posts found'}
  </styles.Container>
  )
}


const materialStyles = {
  chip: {
    color: 'white', 
    border: '1px solid white',
    fontSize: '1rem',
  }
}
const privateIcon = (
  <styles.Privacy>
    <NoEncryptionIcon />
    Private
  </styles.Privacy>
)

const publicIcon = (
  <styles.Privacy>
    <PublicIcon />
    Public
  </styles.Privacy>
)


export default PostsContainer