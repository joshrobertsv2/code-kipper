import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import * as style from './Modal.styles'
import { makeStyles } from '@material-ui/core/styles'
import CancelIcon from '@material-ui/icons/Cancel'

 const Modal = ({ modalOpen, toggleModal, userInfo, changeUserInfo }) => {
  const classStyles = makeStyles(styles)()
  const usernameRef = useRef()
  const emailRef = useRef()
  const password1Ref = useRef()
  const password2Ref = useRef()
  
  const [editState, changeEditState] = useState({
    username: false, 
    email: false, 
    password1: false, 
    password2: false,
  })


  const portal = ReactDOM.createPortal(
    <style.Container>
        <CancelIcon color="error" className={classStyles.cancel}/>
    </style.Container>
  , document.querySelector('#portal'))



  return modalOpen? portal : null

}




const styles = {
  cancel: {
    alignSelf: 'flex-end',
  }
}

export default Modal