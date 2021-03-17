import styled from 'styled-components'

export const Container = styled.div`
  grid-area: home;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem 0;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};`
Container.displayName = 'PostsContainer'

export const Post = styled.div`
  border-radius: 6px;
  box-shadow: 5px 5px 15px 5px #A4A4A4;
  width: 80%;
  max-width: 600px;
  padding: 1rem;`
Post.displayName = 'Post'

export const Username = styled.p`
  font-weight: bold;
  font-size: 1.4rem;`
Username.displayName = 'Username'

export const Likes = styled.p`
  display: inline;
  margin: 0 1rem;`
Likes.displayName = 'Likes'

export const Description = styled.p``
Description.displayName = 'Description'

export const Tag = styled.span`
  margin: 0 .5rem;`
Tag.displayName = 'Tag'