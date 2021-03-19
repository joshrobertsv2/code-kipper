import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  height: 750px;
  width: 60%;
  max-width: 800px;
  background: #25284C;
  position: fixed; 
  padding: 3rem 2rem;
  box-sizing: border-box;
  top: 30%;
  left: 20%;
  font-family: Lato;
  overflow-y: scroll;
  overflow-x: hidden;`
Container.displayName = 'Container'


export const TextArea = styled.textarea`
  grid-area: 'copyCode';
  min-width: 300px;
  min-height: 100px;
  outline: none;
  resize: none;
  background: black;
  color: white;`
TextArea.displayName = 'TextArea'


export const Pre = styled.pre`
  min-width: 80%;
  height: auto;
  min-height: 100px;
  border-radius: 4px;
  outline: none;`
Pre.displayName = 'Pre'
 

export const Code = styled.code`
  width: 80%;
  height: auto;
  min-height: 100px;
  padding: 1rem;
  border-radius: 4px;
  word-wrap: break-word;
  outline: none;
  white-space: pre;`
Code.displayName = 'Code'


export const Description = styled.textarea`
  grid-area: 'description';
  min-width: 300px;
  min-height: 100px;
  outline: none;
  resize: none;`
Description.displayName = 'Description'


export const TagsContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  gap: .3rem;
  flex-wrap: wrap;
  margin: .5rem 0 2rem 0;`
TagsContainer.displayName = 'TagsContainer'


export const Label = styled.label`
  margin-top: 1rem;
  margin-bottom: -.5rem;`
Label.displayName = 'Label'


export const Input = styled.input`
  min-height: 25px;
  margin: .5rem 0 1rem 0; `
Input.displayName = 'Input'


