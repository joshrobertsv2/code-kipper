import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import GetAppIcon from '@material-ui/icons/GetApp'
import CodeBlock from '../../Code'
import { Chip } from '@material-ui/core/'
import * as actions from '../../../redux/actions/actions'
import { v4 as uuidv4 } from 'uuid'
import Comments from './Comments/Comments'


const Posts = ({post, idx}) => {
  console.log(post)
  return (
    <PostContainer>
      <strong>{post.user_id?.name || 'No name'}</strong>
       <CodeBlock 
        code={post?.snippet || '//ERROR - cannot load snippet'}
        language={post?.language || ''}
        />
        <p>{post.language}</p>
        <p>{post.description}</p>
        <TagContainer>
          {post?.tags.map((tag) => (
            <Chip variant="filled" key={uuidv4()} 
            label={tag} size="medium" color="primary"/>
          ))}
        </TagContainer>

        <BottomContainer>
          <Likes>
            <FavoriteIcon color="secondary" />
            {post?.likes || '0'}
          </Likes>

          <FileCopyIcon />
          <GetAppIcon />
        </BottomContainer>

        <Comments />

    </PostContainer>
  )
}


const mapDispatchToProps = (dispatch) => ({
  
})


export default connect(null, mapDispatchToProps)(Posts)

const PostContainer = styled.div`
  border-radius: 2px;
  background:  #141732;
  box-shadow: 5px 5px 15px 5px #000;
  width: 100%;
  max-width: 700px;
  padding: 1rem;
  display: flex;
  flex-direction: column;`
PostContainer.displayName = 'PostContainer'

export const TagContainer = styled.div`
  display: flex;
  height: auto;
  gap: .5rem;
  padding: 1rem;
  flex-wrap: wrap;`
TagContainer.displayName = 'TagContainer'

export const Likes = styled.span`
  display: inline-flex;
  align-items: center;
  gap: .2rem;
  margin: 0 1rem;
  font-size: 1.2rem;
  color: #ff1744;`
Likes.displayName = 'Likes'

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: .5rem 0;`
BottomContainer.displayName = 'BottomContainer'