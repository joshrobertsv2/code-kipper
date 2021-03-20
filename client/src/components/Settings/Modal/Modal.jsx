import React, { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import * as styles from './Modal.styles'
import { makeStyles } from '@material-ui/core/styles'
import CancelIcon from '@material-ui/icons/Cancel'
import EditIcon from '@material-ui/icons/Edit'
import Chip from '@material-ui/core/Chip'
import { Button } from '@material-ui/core'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark, coy, okaidia, twilight, tomorrow, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'

 const Modal = ({ modalOpen, toggleModal, userInfo, changeUserInfo }) => {
  const classStyles = makeStyles(extraStyles)()
  const usernameRef = useRef()
  const emailRef = useRef()
  const password1Ref = useRef()
  const password2Ref = useRef()
  
  const [editState, changeEditState] = useState({
    username: {value: '', disabled: true,}, 
    email: {value: '', disabled: true,}, 
    password1: {value: '', disabled: true,}, 
    password2: {value: '', disabled: true,}
  })
  const [interestsText, setInterestsText] = useState('')

  const codeSnippet = 
  `const theme = 'theme' 
   \nconsole.log('hello world!')`

  const themeOptions = [dark, coy, okaidia, twilight, tomorrow, solarizedlight]
  const themeStrings = ['Dark', 'Coy', 'Okaidia', 'Twilight', 'Tomorrow', 'Solarized Light']

  const toggleEditStatus = async (property) => {
    if(property !== 'password')
      await changeEditState({...editState, [property]: {...editState[property],disabled: false}})
    else 
    await changeEditState({
    ...editState, 
    password1: {...editState.password1, disabled: false}, 
    password2: {...editState.passwrod2, disabled: false}
    })
  }

  const editValue = async (property, ref) => {
    await changeEditState({...editState, [property]: {...editState[property],value: ref.current.value}})
  }

  const stopEditing = async () => {
    await changeEditState({
      username: {value: '', disabled: true,}, 
      email: {value: '', disabled: true,}, 
      password1: {value: '', disabled: true,}, 
      password2: {value: '', disabled: true,}
    })

    toggleModal(false)
  }

  const handleInterestsInput = async (e) => {
    const text = e.target?.value

    await setInterestsText(text)

    if(e.target.value.includes(',') || e.target.value.includes(' ')) {
      const newInterestsText = interestsText.slice(0, interestsText.length)

      const interestsArr = userInfo.Interests
      interestsArr.push(newInterestsText)

      await changeUserInfo({...userInfo, Interests: interestsArr})

      setInterestsText('')
      e.target.value = ''
    }
  }

  const deleteInterest = (idx) => {
    const newInterests = userInfo.Interests
    newInterests.splice(idx, 1) 
    changeUserInfo({...userInfo, Interests: newInterests})
  }

  const updateSettings = async () => {

  }


  const portal = ReactDOM.createPortal(
    <styles.Container>
      <CancelIcon color="error" className={classStyles.cancel} onClick={stopEditing}/>

      <styles.InputContainer>
        <styles.Label htmlFor="username">Username: </styles.Label>
        <styles.InputField id="username" ref={usernameRef} disabled={editState.username.disabled} onChange={(e) => editValue('username', usernameRef)}/>
        <EditIcon className={classStyles.edit} onClick={(e) => toggleEditStatus('username')}/>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.Label htmlFor="email">Email: </styles.Label>
        <styles.InputField type="email" id="email" ref={emailRef} disabled={editState.email.disabled} onChange={(e) => editValue('email', emailRef)}/>
        <EditIcon className={classStyles.edit} onClick={(e) => toggleEditStatus('email')}/>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.Label htmlFor="password1">Password: </styles.Label>
        <styles.InputField type="password" id="password1" ref={password1Ref} disabled={editState.password1.disabled} onChange={(e) => editValue('password1', password1Ref)}/>
        <EditIcon className={classStyles.edit} onClick={(e) => toggleEditStatus('password')}/>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.Label htmlFor="password2">Confirm Password: </styles.Label>
        <styles.InputField type="password" id="password2" ref={password2Ref} disabled={editState.password2.disabled} onChange={(e) => editValue('password2', password2Ref)}/>
      </styles.InputContainer>

      <form>
        <fieldset>
          <legend>Choose a theme: </legend>
          {themeStrings.map((currTheme, idx) => (
            <styles.ThemeContainer>
              <input type="radio" name="theme" id={currTheme} value={currTheme}/>
              <label htmlFor={currTheme}>{currTheme}</label>
              <SyntaxHighlighter language="javascript" style={themeOptions[idx]}>
                {codeSnippet}
              </SyntaxHighlighter>
            </styles.ThemeContainer>
          ))}
        </fieldset>
      </form>

      
      <div style={extraStyles2.interests}>
        <div>
          <styles.InterestsLabel htmlFor="interests">Interests: </styles.InterestsLabel>
          <styles.InterestsInput id="interests" onChange={handleInterestsInput}/>
        </div>

        <div>
          {userInfo.Interests.map((el, idx) => (
            <Chip label={el} color="primary" onDelete={(e) => deleteInterest(idx)} className={classStyles.chip}/>
          ))}
        </div>

      </div>

      <Button className={classStyles.cancelChanges} onClick={stopEditing}>Cancel Changes</Button>
      <Button className={classStyles.saveChanges} onClick={updateSettings}>Save Changes</Button>
    </styles.Container>
  , document.querySelector('#portal'))



  return modalOpen? portal : null
}


const extraStyles2 = {
  interests: {
    display: 'flex', 
    flexDirection: 'column', 
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
}


const extraStyles = {
  cancel: {
    alignSelf: 'flex-end',
  },
  edit: {
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
    color: 'white',
  }, 
  cancelChanges: {
    background: 'gray', 
    color: 'white', 
    padding: '1rem',
    width: '30%',
    display: 'flex',
    margin: 'auto',
  },
  saveChanges: {
    background: 'green', 
    color: 'white',
    padding: '1rem', 
    width: '30%',
    display: 'flex',
    margin: 'auto',
  }, 
  chip: {
    margin: '.3rem',
    fontSize: '1.2rem', 
    padding: '.3rem'
  }
}

export default Modal