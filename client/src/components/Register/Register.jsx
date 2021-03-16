import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, FormInput, SubmitButton, Label, Title, RegisterText } from './Register.styles'
import axios from 'axios'


const Register = () => {
  const nameInput = useRef(), emailInput = useRef(), confirmPasswordInput = useRef(), passwordInput = useRef()
  const history = useHistory()
  setAppStyles()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const passwordsMatch = confirmPassword()
    if(passwordsMatch) {
      const response = await axios.post('/register', { 
        name: nameInput.current.value, 
        email: emailInput.current.value, 
        password: passwordInput.current.value 
      })
      response.status === 200 ? history.push('/') : window.alert('Error registering user')
    }
  }

  const confirmPassword = (e) => {
    const password1 = passwordInput.current.value, password2 = confirmPasswordInput.current.value
    if(password1 !== password2) {
      window.alert('passwords do not match!')
      passwordInput.current.value = ''
      confirmPasswordInput.current.value = ''
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Title>Code Kipper</Title>

      <Label>Name</Label>
      <FormInput type="text" placeholder="name" ref={nameInput} />

      <Label>Email</Label>
      <FormInput type="text" placeholder="email" ref={emailInput} />

      <Label>Password</Label>
      <FormInput type="password" placeholder="password" ref={passwordInput}/>

      <Label>Confirm Password</Label>
      <FormInput type="password" placeholder="confirm password" ref={confirmPasswordInput} />

      <SubmitButton type="submit" onSubmit={handleSubmit} onClick={handleSubmit}>Submit</SubmitButton>

      <RegisterText>Already registered? <a href="/login">Login now</a></RegisterText>
    </Container>
  )
}

const setAppStyles = () => {
  const app = document.querySelector('#root')

  app.style.display = 'flex'
  app.style.justifyContent = 'center'
  app.style.alignItems = 'center'
}

export default Register
