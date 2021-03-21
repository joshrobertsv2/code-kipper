import styled from 'styled-components'

export const Container = styled.form`
  height: 50%;
  max-height: 650px;
  width: 50%;
  max-width: 500px;
  grid-area: content;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  border-radius: 6px;
  gap: 2rem;
  padding: 2rem 1rem;
  box-sizing: border-box;`
Container.displayName = 'Container'


export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: .5rem;`
Title.displayName = 'Title'


export const Label = styled.label`
  font-size: 2rem;
  color: black;
  align-self: start`
Label.displayName = 'Label'



export const FormInput = styled.input`
  height: 2rem;
  width: 95%;
  background: none;`
FormInput.displayName = 'FormInput'



export const SubmitButton = styled.button`
  border: none;
  background: blue;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.6rem;
  border-radius: 8px;`
SubmitButton.displayName = 'SubmitButton'



export const RegisterText = styled.p`
  `
RegisterText.displayName = 'RegisterText'