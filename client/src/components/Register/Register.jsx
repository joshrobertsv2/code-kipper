import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, FormInput, SubmitButton, Label, Title, RegisterText } from './Register.styles'
import axios from 'axios'

const Register = () => {
  const nameInput = useRef()
  const emailInput = useRef()
  const passwordInput = useRef()
  const confirmPasswordInput = useRef()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const passwordsMatch = confirmPassword()
    if(passwordsMatch) {
      const email = emailInput.current.value
      const password = passwordInput.current.value
      const name = nameInput.current.value
      const response = await axios.post('/register', { name, email, password })
      console.log(response)
      console.log(response.data)
      response.status === 200 ? history.push('/') : window.alert('Error registering user')
    }else {

    }
  }

  const confirmPassword = (e) => {
    const password1 = passwordInput.current.value
    const password2 = confirmPasswordInput.current.value
    if(password1 === password2) {
      console.log('passwords match')
    }else{
      //Error message
      console.log(password1, password2)
      console.log('passwords don\'t match')
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
      <SubmitButton type="submit">Submit</SubmitButton>
      <RegisterText>Already registered? <a href="/login">Login now</a></RegisterText>
    </Container>
  )
}

export default Register
