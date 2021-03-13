import React, { useState, useEffect } from 'react'
import { Container, Title, Sidecard } from './Home.styles'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'

const AppStyles = () => {
  const app = document.querySelector('#root')

  app.style.display = 'grid'
  app.style.gridTemplateRows = '.5fr 1fr 1fr 1fr 1fr'
  app.style.gridTemplateColumns = '1fr 1fr 1fr 1fr '
  app.style.gridTemplateAreas = `
  "header header header header"
  "sidebar home home sidecard" 
  "sidebar home home sidecard" 
  ". home home ." 
  ". home home ."  
  `
}

const fetchposts = async () => {
  const user_id = "604acd00433005638077804a"
  
  const res = await axios.get(`/kipper/${user_id}`)
  console.log(res.data)
}


const Home = () => {

  useEffect( fetchposts, [])

  AppStyles()
  return (
    <>
    <Title>Code Kipper</Title>
    <Sidebar />
    <Container>
      
      Home
    </Container>
    <Sidecard>sidecard</Sidecard>
    </>

  )
}

export default Home
