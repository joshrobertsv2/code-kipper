import React from 'react'
import { useLocation } from 'react-router-dom'
import * as styles from './Feed.styles'
import Sidebar from '../Sidebar/Sidebar'
import NotificationsIcon from '@material-ui/icons/Notifications'

const Feed = () => {
  AppStyles()
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

      </styles.Container>
    </>
  )
}

const AppStyles = () => {
  const app = document.querySelector('#root')
  app.height = 'auto'

  app.style.display = 'grid'
  app.style.gridTemplateRows = '.5fr 1fr 1fr 1fr 1fr'
  app.style.gridTemplateColumns = '.25fr 1fr 1fr 1fr 1fr '
  app.style.gridTemplateAreas = `
  "sidebar header header header header"
  "sidebar . feed feed sidecard" 
  "sidebar . feed feed sidecard" 
  "sidebar . feed feed ." 
  "sidebar . feed feed ."  `
}

export default Feed
