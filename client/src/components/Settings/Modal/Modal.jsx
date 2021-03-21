import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import * as styles from './Modal.styles'
import { makeStyles } from '@material-ui/core/styles'
import CancelIcon from '@material-ui/icons/Cancel'
import EditIcon from '@material-ui/icons/Edit'
import Chip from '@material-ui/core/Chip'
import { Button } from '@material-ui/core'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark, coy, okaidia, twilight, tomorrow, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { v4 as uuidv4 } from 'uuid'

 const Modal = ({ modalOpen, toggleModal, userInfo, changeUserInfo }) => {
  const classStyles = makeStyles(extraStyles)()
  const usernameRef = useRef(userInfo.Name)
  const emailRef = useRef(userInfo.Email)
  const password1Ref = useRef(userInfo.Password)
  const password2Ref = useRef(userInfo.Password)
  
  const [editState, changeEditState] = useState({
    username: {value: userInfo.Name, disabled: true,}, 
    email: {value: userInfo.Email, disabled: true,}, 
    password1: {value: userInfo.Password, disabled: true,}, 
    password2: {value: userInfo.Password, disabled: true,},
    theme: userInfo.Theme,
    interests: userInfo.Interests
  })
  const [interestsText, setInterestsText] = useState('')

  const codeSnippet = 
  `const theme = 'theme'`

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

    const Property2 = property.charAt(0).toUpperCase() + property.slice(1)
    changeUserInfo({...userInfo, [property]: {...userInfo[Property2],value: ref.current.value}})
  }

  const changeTheme = async (e) => {
    await changeEditState({...editState, theme: e.target.value})
    changeUserInfo({...userInfo, Theme: e.target.value})
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

      await changeEditState({...editState, interests: interestsArr})

      setInterestsText('')
      e.target.value = ''
    }
  }

  const deleteInterest = (idx) => {
    const newInterests = userInfo.Interests
    newInterests.splice(idx, 1) 
    changeEditState({...editState, editState: newInterests})
  }

  const updateSettings = async (e) => {
    e.preventDefault()

    await changeUserInfo({
      ...userInfo, 
      Name: editState.username.value, 
      Password: editState.password1.value,
      Email: editState.email.value, 
      Theme: editState.theme,
      Interests: editState.interests
    })
    toggleModal(false)
  }


  const portal = ReactDOM.createPortal(
    <styles.Container onSubmit={e => e.preventDefault()}>
      <CancelIcon color="error" className={classStyles.cancel} onClick={stopEditing}/>

      <styles.InputContainer>
        <styles.Label htmlFor="username">Username: </styles.Label>
        <styles.InputField id="username" ref={usernameRef} disabled={editState.username.disabled} onChange={(e) => editValue('username', usernameRef)} value={editState.username.value}/>
        <EditIcon className={classStyles.edit} onClick={(e) => toggleEditStatus('username')}/>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.Label htmlFor="email">Email: </styles.Label>
        <styles.InputField type="email" id="email" ref={emailRef} disabled={editState.email.disabled} onChange={(e) => editValue('email', emailRef)} value={editState.email.value}/>
        <EditIcon className={classStyles.edit} onClick={(e) => toggleEditStatus('email')}/>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.Label htmlFor="password1">Password: </styles.Label>
        <styles.InputField type="password" id="password1" ref={password1Ref} disabled={editState.password1.disabled} onChange={(e) => editValue('password1', password1Ref)} value={editState.password1.value}/>
        <EditIcon className={classStyles.edit} onClick={(e) => toggleEditStatus('password')}/>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.Label htmlFor="password2">Confirm Password: </styles.Label>
        <styles.InputField type="password" id="password2" ref={password2Ref} disabled={editState.password2.disabled} onChange={(e) => editValue('password2', password2Ref)} value={editState.password1.value}/>
      </styles.InputContainer>


      <fieldset onChange={changeTheme} value={editState.theme}>
        <legend>Choose a theme: </legend>
        {themeStrings.map((currTheme, idx) => (
          <styles.ThemeContainer key={uuidv4()}>
            <input type="radio" name="theme" id={currTheme} value={currTheme} defaultChecked={editState.theme === currTheme}/>
            <label htmlFor={currTheme}>{currTheme}</label>
            <SyntaxHighlighter language="javascript" style={themeOptions[idx]}>
              {codeSnippet}
            </SyntaxHighlighter>
          </styles.ThemeContainer>
        ))}
      </fieldset>


      
      <div style={extraStyles2.interests}>
        <div>
          <styles.InterestsLabel htmlFor="interests">Interests: </styles.InterestsLabel>
          <styles.InterestsInput id="interests" onChange={handleInterestsInput}/>
        </div>

        <div>
          {userInfo.Interests.map((el, idx) => (
            <Chip key={uuidv4()} label={el} color="primary" onDelete={(e) => deleteInterest(idx)} className={classStyles.chip}/>
          ))}
        </div>

      </div>

      <Button className={classStyles.cancelChanges} onClick={stopEditing}>Cancel Changes</Button>
      <Button className={classStyles.saveChanges} type="submit" onClick={updateSettings}>Save Changes</Button>
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