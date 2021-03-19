import React, { useState, useEffect} from 'react'
import * as styles from './Settings.styles'
import Sidebar from '../Sidebar/Sidebar'
import Sidecard from '../Sidecard/Sidecard'
import { v4 as uuidv4 } from 'uuid'
import Modal from './Modal/Modal'

const Settings = ({userInfo, changeUserInfo}) => {
  const [modalOpen, toggleModal] = useState(false)

  const settings = ['Name', 'Email', 'Password']
  const themeOptions = ['okaidia', 'twilight', 'coy', 'solarized-light', 'tomorrow']
  AppStyles()
  return (
    <>
      <Modal modalOpen={modalOpen} toggleModal={toggleModal} userInfo={userInfo} changeUserInfo={changeUserInfo}/>
      <Sidebar />

      <styles.Title modalOpen={modalOpen}>Code Kipper</styles.Title>

      <styles.Container modalOpen={modalOpen}>

        {settings.map((setting) => (
          <styles.SettingsOption key={uuidv4()}>
            <styles.Property>{setting}</styles.Property>
            <styles.Value>{userInfo[setting]}</styles.Value>
          </styles.SettingsOption>
        ))}

        <styles.DeleteAccount>Delete Account</styles.DeleteAccount>
        <styles.EditButton onClick={(e) =>  toggleModal(true)}>Edit Account Info</styles.EditButton>
        

      </styles.Container>


      <Sidecard modalOpen={modalOpen}/>
    </>
  )
}

const AppStyles = () => {
  const app = document.querySelector('#root')
  app.height = 'auto'

  app.style.display = 'grid'
  app.style.gridTemplateRows = '.5fr 1fr 1fr 1fr 1fr'
  app.style.gridTemplateColumns = '1fr 1fr 1fr 1fr '
  app.style.gridTemplateAreas = `
  "header header header header"
  "sidebar settings settings sidecard" 
  "sidebar settings settings sidecard" 
  ". settings settings ." 
  ". . . ."  `
}

export default Settings
