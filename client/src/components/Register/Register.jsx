import React, { useRef } from 'react'
import { Container, FormInput, SubmitButton, Label, Title, RegisterText } from './Register.styles'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'


const Register = ({registerUser}) => {
  const nameInput = useRef(), emailInput = useRef(), confirmPasswordInput = useRef(), passwordInput = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const passwordsMatch = confirmPassword()
    if(passwordsMatch) {
      registerUser({
        name: nameInput.current.value, 
        email: emailInput.current.value, 
        password: passwordInput.current.value
      })
    }
  }

  const confirmPassword = (e) => {
    const password1 = passwordInput.current.value, password2 = confirmPasswordInput.current.value
    if(password1 !== password2) {
      window.alert('passwords do not match!')
      passwordInput.current.value = ''
      confirmPasswordInput.current.value = ''
    }
    else return password1 === password2
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

      <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton>

      <RegisterText>Already registered? <a href="/login">Login now</a></RegisterText>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => ({
  registerUser: user => dispatch(actions.registerUser(user))
})

export default connect(null, mapDispatchToProps)(Register)
