import React from 'react'
import { useLocation } from 'react-router-dom'
import * as styles from './Feed.styles'
import Sidebar from '../Sidebar/Sidebar'
import NotificationsIcon from '@material-ui/icons/Notifications'

const Feed = () => {
  const location = useLocation()
  const currentTabOpts = {
    '/': 'Dashboard', 
    '/feed': 'Feed',
  }
  return (
    <>
      <styles.Header>
        <styles.CurrentTab>{currentTabOpts[location.pathname]}</styles.CurrentTab>
        <styles.SearchBar placeholder="Search here"></styles.SearchBar>
        <styles.Title>CodeKipper</styles.Title>
        <styles.IconsContainer>
          <NotificationsIcon fontSize="large"/>
          <styles.Profile>A</styles.Profile>
        </styles.IconsContainer>
      </styles.Header>
      <Sidebar />
      <styles.Container>
        Coming soon!
      </styles.Container>
    </>
  )
}

export default Feed
