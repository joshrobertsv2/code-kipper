import styled from 'styled-components'


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  padding: 0 2rem;
  color: white;`
Header.displayName = 'Header'

export const CurrentTab = styled.h1`
  color: #4678FF;
  font-size: 2rem;
  font-weight: 200;
  margin: 0;`
CurrentTab.displayName = 'CurrentTab'

export const SearchBar = styled.input`
  width: 30%;
  height: 3rem;
  background-color:rgba(0,0,0,0.4);
  color: white;
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 0 1rem;`
SearchBar.displayName = 'SearchBar'

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  width: 25%;
  margin: 0;`
Title.displayName = 'Title'

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;` 
IconsContainer.displayName = 'IconsContainer'


export const Profile = styled.p`
  display: inline-flex;
  border-radius: 50%;
  background: white;
  width: 2.8rem;
  height: 2.8rem;
  font-size: 1.2rem;
  color: #C74548;
  justify-content: center;
  align-items: center;`
Profile.displayName = 'ProfileCircle'

export const Sidecard = styled.div`
  grid-area: sidecard;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};
  margin: 4rem 0;`
Sidecard.displayName = 'Sidecard'


export const Pre = styled.pre`
  overflow-x: scroll;`
Pre.displayName = 'Pre'

export const Code = styled.code`
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: scroll;
  word-wrap: break-word;`
Code.displayName = 'Code'


export const Button = styled.button`
  border: none;
  font-size: 1rem;
  background:  #C74548;
  color: white;
  padding: 1rem 2rem;
  outline: none;`
Button.displayName = 'Button'