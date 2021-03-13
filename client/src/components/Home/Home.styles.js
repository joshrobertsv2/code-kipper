import styled from 'styled-components'

export const PostsContainer = styled.div`
  grid-area: home;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem 0;
  padding: 2rem 0;`
PostsContainer.displayName = 'PostsContainer'


export const Title = styled.h1`
  font-size: 2rem;
  grid-area: header;
  text-align: center;`
Title.displayName = 'Title'


export const Sidecard = styled.div`
  grid-area: sidecard;
  border: 1px solid blue;`
Sidecard.displayName = 'Sidecard'


export const Post = styled.div`
  border: 1px solid red;
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
  background: black;
  color: white;
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

