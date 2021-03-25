import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import * as styles from './Modal.styles'
import { makeStyles } from '@material-ui/core/styles'
import CancelIcon from '@material-ui/icons/Cancel'
import EditIcon from '@material-ui/icons/Edit'
import Chip from '@material-ui/core/Chip'
import { Button } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/actions'
import CodeBlock from '../../Code'

 const Modal = ({ toggleModal, userInfo, changeSettings }) => {
  const classStyles = makeStyles(styles.materialStyles)()
  const [editState, changeEditState] = useState({
    username: {value: userInfo.name, disabled: true,}, 
    email: {value: userInfo.email, disabled: true,}, 
    password1: {value: userInfo.password, disabled: true,}, 
    password2: {value: userInfo.password, disabled: true,},
    theme: userInfo.theme,
    interests: userInfo.interests
  })

  const usernameRef = useRef(userInfo.name)
  const emailRef = useRef(userInfo.email)
  const password1Ref = useRef(userInfo.password)
  const password2Ref = useRef(userInfo.password)

  const labels = ['Username:', 'Email:', 'Password:', 'Confirm Password:']
  const refList = [usernameRef, emailRef, password1Ref, password2Ref ]
  const idList = ['username', 'email', 'password1', 'password2']
  const editList = ['username', 'email', 'password', 'password']
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

  const changeTheme = async (e) => {
    await changeEditState({...editState, theme: e.target.value})
  }

  const stopEditing = async () => {
    toggleModal(false)
  }

  const handleInterestsInput = async (e) => {
    const interestsText = e.target?.value

    if(interestsText.includes(',') || interestsText.includes(' ')) {
      const newInterest = interestsText.slice(0, interestsText.length - 1)
      await changeEditState({...editState, interests: [...editState.interests, newInterest]})
      e.target.value = ''
    }
  }

  const deleteInterest = (idx) => {
    const newInterests = userInfo.interests
    changeEditState({...editState, editState: newInterests.splice(idx, 1) })
  }

  const updateSettings = async (e) => {
    e.preventDefault()
    changeSettings({...userInfo, ...editState})
    toggleModal(false)
  }


  return ReactDOM.createPortal(
    <styles.Container onSubmit={e => e.preventDefault()}>
      <CancelIcon color="error" className={classStyles.cancel} onClick={stopEditing}/>

      {labels.map((el, idx) => {
        const currLabel = labels[idx], currId = idList[idx], currRef = refList[idx], currEdit = editList[idx]
        return (
        <styles.InputContainer key={idx}>
          <styles.Label htmlFor={currLabel}>{currLabel}</styles.Label>
          <styles.InputField type="text" id={currLabel} ref={currRef} value={editState[currId].value}
            disabled={editState[currId].disabled} onChange={(e) => editValue(currId, currRef)} 
            />
          <EditIcon className={classStyles.edit} onClick={(e) => toggleEditStatus(currEdit)}/>
        </styles.InputContainer>
        )
      })}


      <fieldset onChange={changeTheme} value={editState.theme}>
        <legend>Choose a theme: </legend>
        {themeStrings.map((currTheme, idx) => (
          <styles.ThemeContainer key={uuidv4()}>
            <input type="radio" name="theme" id={currTheme} value={currTheme} defaultChecked={editState.theme === currTheme}/>
            <label htmlFor={currTheme}>{currTheme}</label>
            <CodeBlock code="const theme = 'theme'" language="javascript" themeOverride={currTheme}/>
          </styles.ThemeContainer>
        ))}
      </fieldset>

      <styles.InterestsContainer>
        <div>
          <styles.InterestsLabel htmlFor="interests">Interests: </styles.InterestsLabel>
          <styles.InterestsInput id="interests" onChange={handleInterestsInput}/>
        </div>

        <div>
          {editState.interests.map((el, idx) => (
            <Chip key={uuidv4()} label={el} color="primary" onDelete={(e) => deleteInterest(idx)} className={classStyles.chip}/>
          ))}
        </div>
      </styles.InterestsContainer>

      <Button className={classStyles.cancelChanges} onClick={stopEditing}>Cancel Changes</Button>
      <Button className={classStyles.saveChanges} type="submit" onClick={updateSettings}>Save Changes</Button>
    </styles.Container>
  , document.querySelector('#portal'))
}


const mapStateToProps = (state) => ({
  userInfo: state.user
})

const mapDispatchToProps = (dispatch) => ({
  changeSettings: settings => dispatch(actions.changeSettings({settings}))
})


export default connect(mapStateToProps, mapDispatchToProps)(Modal)