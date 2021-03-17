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
  font-size: 1.6rem;`
Username.displayName = 'Username'

export const Likes = styled.span`
  display: inline-flex;
  align-items: center;
  gap: .2rem;
  margin: 0 1rem;
  font-size: 1.2rem;
  color: #ff1744;`
Likes.displayName = 'Likes'

export const Language = styled.p`
  display: inline;
  font-size: 1.2rem;`
Language.displayName = 'Language'

export const Description = styled.p`
  font-size: 1.3rem;`
Description.displayName = 'Description'

export const Tag = styled.span`
  font-size: 1.2rem;`
Tag.displayName = 'Tag'

export const TagContainer = styled.div`
  display: flex;
  height: auto;
  gap: .5rem;
  padding: 1rem;
  flex-wrap: wrap;`
TagContainer.displayName = 'TagContainer'

export const Privacy = styled.span`
  display: inline-flex;
  justify-self: center;
  align-items: center;
  gap: .5rem;`
Privacy.displayName = 'Privacy'

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: .5rem 0;`
BottomContainer.displayName = 'BottomContainer'