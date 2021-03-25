import React, { useState } from 'react'
import { useLocation} from 'react-router-dom'
import * as styles from './Settings.styles'
import Sidebar from '../Sidebar/Sidebar'
import Sidecard from '../Sidecard/Sidecard'
import { v4 as uuidv4 } from 'uuid'
import Modal from './Modal/Modal'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, coy, okaidia, twilight, tomorrow, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'
import Header from '../Header/Header'


const Settings = ({userInfo, changeUserInfo}) => {
  const [modalOpen, toggleModal] = useState(false)
  const classes = makeStyles(materialStyles)()
  const settings = ['name', 'email', 'password']
  const themeOpts = {
    'Dark': dark, 
    'Coy': coy, 
    'Okaida': okaidia, 
    'Twilight': twilight, 
    'Tomorrow': tomorrow, 
    'Solarized Light': solarizedlight,
  }
  const location = useLocation()
  const currentTabOpts = {
    '/': 'Dashboard', 
    '/feed': 'Feed',
    '/settings': 'Settings'
  }

  return (
    <>
      <Modal modalOpen={modalOpen} toggleModal={toggleModal} userInfo={userInfo} changeUserInfo={changeUserInfo}/>
      <Sidebar />

      <Header modalOpen={modalOpen} />

      <styles.Container modalOpen={modalOpen}>
        <styles.SettingsOptions key={uuidv4()}>
          {settings.map((setting) => (
            <div key={uuidv4()}>
              <styles.Property>{`${setting.toUpperCase()}:`}</styles.Property>
              <styles.Value>{userInfo[setting]}</styles.Value>
            </div>
          ))}

        <div>
          <styles.Property style={{alignSelf: 'center'}}>THEME: </styles.Property>
          <styles.ThemeContainer>
            <styles.Value>{userInfo.theme}</styles.Value>
            <SyntaxHighlighter language="javascript" style={themeOpts[userInfo.theme]}>
              const hello = 'hello'
            </SyntaxHighlighter>
          </styles.ThemeContainer>
        </div>

        <div>
          <styles.Property>INTERESTS: </styles.Property>
          <div style={interestsStyles}>
            {userInfo.interests.map(el => (
              <Chip key={uuidv4()}label={el} className={classes.chip}/>
            ))}
          </div>
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

const materialStyles = {
  chip: {
    fontSize: '1.2rem'
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user
})

const mapDispatchToProps = (dispatch) => ({
  changeTheme: theme => dispatch(actions.changeSettings({theme}))
})


export default connect(mapStateToProps, mapDispatchToProps)(Settings)
