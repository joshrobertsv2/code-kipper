import styled from 'styled-components'

export const Container = styled.form`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: start;
height: 600px;
width: 60%;
max-width: 800px;
background: white;
position: fixed; 
padding: 3rem 2rem;
display: flex;
flex-direction: column;
box-sizing: border-box;
top: 30%;
left: 20%;
font-family: Lato;
border-radius: 12px;
overflow-y: scroll;
`
Container.displayName = 'Container'


export const Pre = styled.pre`
  min-width: 80%;
  height: auto;
  min-height: 100px;
  border-radius: 4px;
  outline: none;
  overflow-y: visible;
  white-space: pre;`
Pre.displayName = 'Pre'
 
export const Code = styled.code`
  width: 80%;
  height: auto;
  min-height: 100px;
  padding: 1rem;
  border-radius: 4px;
  word-wrap: break-word;
  outline: none;
  overflow-y: visible;
  white-space: pre;`
Code.displayName = 'Code'

export const TextArea = styled.textarea`
  min-width: 300px;
  min-height: 100px;
  outline: none;
  resize: none;`
TextArea.displayName = 'TextArea'

export const TagsContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  gap: .3rem;
  overflow -x: scroll;
  flex-wrap: wrap;
  margin: .5rem 0 2rem 0;`
TagsContainer.displayName = 'TagsContainer'

export const Label = styled.label`
  margin-top: 2rem;
  margin-bottom: .5rem;
`
Label.displayName = 'Label'

export const Select = styled.select`
`
Select.displayName = 'Select'


export const Option = styled.option``
Option.displayName = 'Option'

export const Input = styled.input`
  min-height: 25px;
  margin: .5rem 0 1rem 0; `
Input.displayName = 'Input'


