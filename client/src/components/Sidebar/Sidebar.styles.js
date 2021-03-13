import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid gray;
  grid-area: sidebar`
Container.displayName = 'Container'

export const Option = styled.li`
  text-decoration: none;
  list-style-type: none;
  color: blue;
  font-size: 2rem;
  margin: 2rem 0;`
Option.displayName = 'Option'