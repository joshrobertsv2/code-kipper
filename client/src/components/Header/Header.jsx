import React from 'react'
import { useLocation } from 'react-router-dom'
import * as styles from './Header.styles'
import NotificationsIcon from '@material-ui/icons/Notifications'

const Header = ({modalOpen}) => {
  const location = useLocation()
  const tabs = {
    '/': 'Dashboard', 
    '/feed': 'Feed',
    '/settings': 'Settings'
  }

  return (
    <styles.Header modalOpen={modalOpen}>
    <styles.CurrentTab>{tabs[location.pathname]}</styles.CurrentTab>
    <styles.Title modalOpen={modalOpen}>CodeKipper</styles.Title>
    <styles.IconsContainer>
      <NotificationsIcon fontSize="large"/>
      <styles.Profile>A</styles.Profile>
    </styles.IconsContainer>
  </styles.Header>
  )
}

export default Header
