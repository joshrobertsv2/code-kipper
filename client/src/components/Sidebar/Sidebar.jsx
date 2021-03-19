import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import * as styles from './Sidebar.styles'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import HomeIcon from '@material-ui/icons/Home';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed'
import SettingsIcon from '@material-ui/icons/Settings'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Logo from '../../images/codekipper-logo.png'


const Sidebar = () => {
  const sideBarToggles = ['Home', 'Profile', 'Feed', 'Settings', 'Logout']
  const sideBarIcons = [<HomeIcon />, <DynamicFeedIcon />, <ExitToAppIcon />]
  const sideBarUrls = ['', 'profile', 'feed', 'settings', 'logout']
  const sideBarUrls2 = ['', 'feed', 'logout']
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
    <styles.Container>
      <styles.MainLogo src={Logo} />
      {sideBarIcons.map((el, idx) => (
        <styles.Option active={location.pathname === `/${sideBarUrls[idx]}`}key={uuidv4()} onClick={() => handleRedirect(sideBarUrls[idx])}>{el}</styles.Option>
      ))}
    </styles.Container>
  )
}


export default Sidebar
