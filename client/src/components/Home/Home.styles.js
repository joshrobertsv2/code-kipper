import styled from 'styled-components'


export const Title = styled.h1`
  font-size: 2rem;
  grid-area: header;
  text-align: center;`
Title.displayName = 'Title'


export const Sidecard = styled.div`
  grid-area: sidecard;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'}};`
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
  font-size: 2rem;`
Button.displayName = 'Button'