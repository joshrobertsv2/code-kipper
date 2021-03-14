import styled from 'styled-components'

export const Container = styled.form`
height: 50%;
width: 50%;
background: white;
position: fixed; 
padding: 0 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
top: 25%;
left: 25%;
font-family: Lato;
box-sizing: border-box;
border-radius: 8px;
overflow-y: scroll;
`

Container.displayName = 'Container'


export const Pre = styled.pre`
  min-width: 80%;
  min-height: 5rem;
  max-height: 12rem;
  border-radius: 4px;
  outline: none;
  overflow-y: scroll;`
Pre.displayName = 'Pre'
 
export const Code = styled.code`
  width: 80%;
  max-height: 
  padding: 1rem;
  border-radius: 4px;
  overflow: scroll;
  word-wrap: break-word;
  outline: none;
`
Code.displayName = 'Code'

export const TextArea = styled.textarea`
  min-width: 300px;
  outline: none;`
TextArea.displayName = 'TextArea'

export const TagsContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  margin: 1rem;
  gap: .3rem;
  overflow -x: scroll;
  flex-wrap: wrap;`
TagsContainer.displayName = 'TagsContainer'