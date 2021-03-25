import styled from 'styled-components'



export const Sidecard = styled.div`
  grid-area: sidecard;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};
  margin: 4rem 0;`
Sidecard.displayName = 'Sidecard'


export const Button = styled.button`
  border: none;
  font-size: 1rem;
  background:  #C74548;
  color: white;
  padding: 1rem 2rem;
  outline: none;`
Button.displayName = 'Button'