import React from 'react'
import { Container } from './Home.styles'
import Sidebar from '../Sidebar/Sidebar'

const AppStyles = () => {
  const app = document.querySelector('#root')

  app.style.display = 'grid'
  app.style.flexDirection = 'column'
  app.style.gridTemplate = `
  a b b c 40px / 1fr 1fr 1fr 1fr 
  a b b c 40px / 1fr 1fr 1fr 1fr 
  a b b . 40px / 1fr 1fr 1fr 1fr 
  `
}

const Home = () => {
  AppStyles()
  return (
    <Container>
      <Sidebar />
      Home
    </Container>
  )
}

export default Home
