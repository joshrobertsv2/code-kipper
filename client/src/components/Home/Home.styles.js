import styled from 'styled-components'

export const PostsContainer = styled.div`
  grid-area: home;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem 0;
  filter: ${(modalOpen) => modalOpen? 'blur(5px)': 'none'}`
PostsContainer.displayName = 'PostsContainer'


export const Title = styled.h1`
  font-size: 2rem;
  grid-area: header;
  text-align: center;`
Title.displayName = 'Title'


export const Sidecard = styled.div`
  grid-area: sidecard;
  filter: ${(modalOpen) => modalOpen? 'blur(5px)': 'none'}`
Sidecard.displayName = 'Sidecard'


export const Post = styled.div`
  border-radius: 6px;
  box-shadow: 5px 5px 15px 5px #A4A4A4;
  width: 80%;
  padding: 1rem;`
Post.displayName = 'Post'

export const Username = styled.p`
  font-weight: bold;
  font-size: 1.4rem;`
Username.displayName = 'Username'

export const Pre = styled.pre`
  `
Pre.displayName = 'Pre'

export const Code = styled.code`
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  overflow: scroll;
  word-wrap: break-word;`
Code.displayName = 'Code'

export const Likes = styled.p`
  display: inline;
  margin: 0 1rem;`
Likes.displayName = 'Likes'

export const Tag = styled.span`
  margin: 0 .5rem;`
Tag.displayName = 'Tag'

export const Description = styled.p`
  `
Description.displayName = 'Description'

