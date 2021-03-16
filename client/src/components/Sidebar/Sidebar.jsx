import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Option } from './Sidebar.styles'
import axios from 'axios'


const Sidebar = () => {
  const sideBarToggles = ['Home', 'Profile', 'Feed', 'Settings', 'Logout']
  const sideBarUrls = ['/', '/profile', '/feed', '/settings', '/logout']
  const history = useHistory()
  const location = useLocation()

  const handleRedirect = (newLocation) => {
    newLocation = newLocation.toLowerCase()

    if(newLocation === 'logout') {
      axios.get('/logout')
      history.push('/login')
    }else {
      history.push(`/${newLocation}`)
    }
  }


  return (
    <Container>
      {sideBarToggles.map((el, idx) => (
        <Option active={location.pathname === sideBarUrls[idx]}key={idx} onClick={() => handleRedirect(el)}>{el}</Option>
      ))}
    </Container>
  )
}


export default Sidebar
