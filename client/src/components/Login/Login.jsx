import React, { useRef } from 'react'
import { Container, FormInput, SubmitButton, Label, Title, RegisterText } from './Login.styles'
// import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'

const Login = ({ loginUser }) => {
  const emailInput = useRef()
  const passwordInput = useRef()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = emailInput.current.value, password = passwordInput.current.value
    const response = await loginUser({email, password})
    console.log(response)
  }


  return (
    <Container onSubmit={handleSubmit}>
      <Title>Code Kipper</Title>

      <Label>Email</Label>
      <FormInput type="text" placeholder="email" ref={emailInput} />

      <Label>Password</Label>
      <FormInput type="password" placeholder="password" ref={passwordInput}/>

      <SubmitButton type="submit">Submit</SubmitButton>

      <RegisterText>Not registered? <a href="/register">Create an account</a></RegisterText>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: user => dispatch(actions.requestLogin(user))
})


export default connect(null, mapDispatchToProps)(Login)
