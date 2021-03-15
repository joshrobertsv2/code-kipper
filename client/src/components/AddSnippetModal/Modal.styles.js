import styled from 'styled-components'

export const Container = styled.form`
display: flex;
justify-content: flex-start;
max-height: 300;
gap: 2rem;
width: 50%;
max-width: 800px;
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
border-radius: 12px;
overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 22px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 14px 14px lightgray;
    border: solid 8px transparent;
    border-radius: 16px;
  }
  
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px gray;
    border: solid 8px transparent;
    border-radius: 40px;
    height: 50%;
  }`
Container.displayName = 'Container'


export const Pre = styled.pre`
  min-width: 80%;
  height: auto;
  border-radius: 4px;
  outline: none;
  overflow-y: visible;`
Pre.displayName = 'Pre'
 
export const Code = styled.code`
  width: 80%;
  padding: 1rem;
  border-radius: 4px;
  word-wrap: break-word;
  outline: none;
  overflow-y: visible;`
Code.displayName = 'Code'

export const TextArea = styled.textarea`
  min-width: 300px;
  outline: none;
  margin: 1rem 0;
  resize: none;`
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