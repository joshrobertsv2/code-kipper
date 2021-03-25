import React, { useState } from 'react'
import { connect } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'
import Sidecard from '../Sidecard/Sidecard'
import Header from '../Header/Header'
import Modal from './Modal/Modal'
import Code from '../Code'
import * as styles from './Settings.styles'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import { v4 as uuidv4 } from 'uuid'



const Settings = ({userInfo, changeUserInfo}) => {
  const [modalOpen, toggleModal] = useState(false)
  const classes = makeStyles(styles.materialStyles)()
  const settings = ['name', 'email', 'password']
  return (
    <>
      {modalOpen? <Modal toggleModal={toggleModal} />: null}
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
            <Code code="const snippet = 'snippet'" language="javascript" />
          </styles.ThemeContainer>
        </div>

        <div>
          <styles.Property>INTERESTS: </styles.Property>
          <div style={styles.interestsStyles}>
            {userInfo.interests.map(el => (
              <Chip key={uuidv4()}label={el} className={classes.chip}/>
            ))}
          </div>
        </div>
        </styles.SettingsOptions>

        <styles.DeleteAccount>Delete Account</styles.DeleteAccount>
        <styles.EditButton onClick={(e) => toggleModal(true)}>Edit Account Info</styles.EditButton>
        

      </styles.Container>


      <Sidecard modalOpen={modalOpen}/>
    </>
  )
}


const mapStateToProps = (state) => ({
  userInfo: state.user
})


export default connect(mapStateToProps, null)(Settings)
