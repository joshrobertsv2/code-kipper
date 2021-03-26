import styled from 'styled-components'

export const materialStyles = () => {
  return {
    exitIcon: {
      color: 'red',
      alignSelf: 'flex-end'
    }, 
    button: {
      width: '15%', 
      padding: '.5rem 0',
      alignSelf: 'center',
    }, 
    chip: {
      fontSize: '1.2rem'
    }, 
    selectElement: {
      root: {
        color: 'red', 
        background: 'white'
      },
      filled: {
        color: 'red', 
        background: 'white',
      }
    }
  }
}

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  height: auto;
  max-height: 750px;
  width: 60%;
  max-width: 800px;
  background: #1a2475;
  position: fixed; 
  padding: 3rem 2rem;
  box-sizing: border-box;
  top: 20%;
  left: 40%;
  font-family: Lato;
  color: white;
  overflow-y: scroll;
  overflow-x: hidden;`
Container.displayName = 'Container'


export const TextArea = styled.textarea`
  grid-area: 'copyCode';
  min-width: 300px;
  min-height: 100px;
  height: auto;
  outline: none;
  resize: none;
  background: black;
  color: white;`
TextArea.displayName = 'TextArea'

export const Description = styled.textarea`
  grid-area: 'description';
  min-width: 300px;
  min-height: 100px;
  outline: none;
  resize: none;
  background: black;
  color: white;`
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
  margin: .5rem 0 1rem 0;
  outline: none; `
Input.displayName = 'Input'


