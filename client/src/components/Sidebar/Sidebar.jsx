import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Option } from './Sidebar.styles'

const createSidebar = (options) => {
  return (
    <ul>
      {options.map((el, idx) => (
        <NavLink key={idx} to="/"  style={{"textDecoration": "none"}} >
          <Option>{el}</Option>
        </NavLink>
      ))}
    </ul>
  )
}


const Sidebar = () => {
  const sideBarToggles = ['Home', 'Profile', 'Feed', 'Settings', 'Logout']

  return (
    <Container>
      {createSidebar(sideBarToggles)}
    </Container>
  )
}

export default Sidebar
