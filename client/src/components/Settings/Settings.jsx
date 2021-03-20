import React, { useState, useEffect} from 'react'
import { useLocation} from 'react-router-dom'
import * as styles from './Settings.styles'
import Sidebar from '../Sidebar/Sidebar'
import Sidecard from '../Sidecard/Sidecard'
import { v4 as uuidv4 } from 'uuid'
import Modal from './Modal/Modal'
import Chip from '@material-ui/core/Chip'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, coy, okaidia, twilight, tomorrow, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Settings = ({userInfo, changeUserInfo}) => {
  const [modalOpen, toggleModal] = useState(true)

  const settings = ['Name', 'Email', 'Password']
  const themeOptions = [dark, coy, okaidia, twilight, tomorrow, solarizedlight]
  const themeStrings = ['Dark', 'Coy', 'Okaidia', 'Twilight', 'Tomorrow', 'Solarized Light']
  const location = useLocation()
  const currentTabOpts = {
    '/': 'Dashboard', 
    '/feed': 'Feed',
    '/settings': 'Settings'
  }
  AppStyles()
  return (
    <>
      <Modal modalOpen={modalOpen} toggleModal={toggleModal} userInfo={userInfo} changeUserInfo={changeUserInfo}/>
      <Sidebar />

      <styles.Header modalOpen={modalOpen}>
        <styles.CurrentTab>{currentTabOpts[location.pathname]}</styles.CurrentTab>
        <styles.Title modalOpen={modalOpen}>CodeKipper</styles.Title>
        <styles.IconsContainer>
          <NotificationsIcon fontSize="large"/>
          <styles.Profile>A</styles.Profile>
        </styles.IconsContainer>
      </styles.Header>

      <styles.Container modalOpen={modalOpen}>
        <styles.SettingsOptions key={uuidv4()}>
          {settings.map((setting) => (
            <div>
              <styles.Property>{`${setting}:`}</styles.Property>
              <styles.Value>{userInfo[setting]}</styles.Value>
            </div>
          ))}

        <div>
          <styles.Property style={{alignSelf: 'center'}}>Theme: </styles.Property>
          <styles.ThemeContainer>
            <styles.Value>Okaidia</styles.Value>
            <SyntaxHighlighter language="javascript" style={okaidia}>
              const hello = 'hello'
            </SyntaxHighlighter>
          </styles.ThemeContainer>
        </div>

        <div>
          <styles.Property>Interests: </styles.Property>
          <styles.Value style={interestsStyles}>
            {userInfo.Interests.map(el => (
              <Chip label={el} onClick={() => "click"}/>
            ))}
          </styles.Value>
        </div>
        </styles.SettingsOptions>

        <styles.DeleteAccount>Delete Account</styles.DeleteAccount>
        <styles.EditButton onClick={(e) =>  toggleModal(true)}>Edit Account Info</styles.EditButton>
        

      </styles.Container>


      <Sidecard modalOpen={modalOpen}/>
    </>
  )
}

const interestsStyles = {
  display: 'inline-flex', 
  flexDirection: 'row', 
  gap: '.5rem',
  flexWrap: 'wrap',
}

const AppStyles = () => {
  const app = document.querySelector('#root')
  app.height = 'auto'

  app.style.display = 'grid'
  app.style.gridTemplateRows = '.5fr 1fr 1fr 1fr 1fr'
  app.style.gridTemplateColumns = '.25fr 1fr 1fr 1fr 1fr '
  app.style.gridTemplateAreas = `
  "sidebar header header header header"
  "sidebar . settings settings sidecard" 
  "sidebar . settings settings sidecard" 
  "sidebar . settings settings ." 
  "sidebar . settings settings ."  `
}

export default Settings


const themeCreator = (themeOptions, themeStrings) => (
  <form>
  <fieldset>
    <legend>Choose a theme: </legend>
    {themeOptions.map((theme, idx) => (
      <div>
        <input type="radio" name="theme" id={theme}/>
        <label htmlFor={theme}>{themeStrings[idx]}</label>
        <SyntaxHighlighter language="javascript" style={theme}>
        const hello = 'hello'
        </SyntaxHighlighter>
      </div>
    ))}
  </fieldset>
</form>
)