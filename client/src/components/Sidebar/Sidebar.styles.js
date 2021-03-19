import styled from 'styled-components'

export const Container = styled.div`
  grid-area: sidebar;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};
  padding: 10rem 1rem 0;
  background: #141732;
  display: flex;
  flex-direction: column;
  align-items: center;`
Container.displayName = 'Container'

export const Option = styled.li`
  text-decoration: none;
  list-style-type: none;
  color: ${props => props.active? 'black': 'gray'};
  font-size: 2rem;
  margin: 2rem 0;
  cursor: pointer;`
Option.displayName = 'Option'

export const MainLogo = styled.img`
  height: 3rem;
  width: 3rem;`
MainLogo.displayName = 'MainLogo'