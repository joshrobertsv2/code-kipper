import styled from 'styled-components'

export const Container = styled.div`
  grid-area: sidebar;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'}`
Container.displayName = 'Container'

export const Option = styled.li`
  text-decoration: none;
  list-style-type: none;
  color: ${props => props.active? 'black': 'gray'};
  font-size: 2rem;
  margin: 2rem 0;
  cursor: pointer;`
Option.displayName = 'Option'