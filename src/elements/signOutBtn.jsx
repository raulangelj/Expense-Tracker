/* eslint-disable no-console */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as LogOutIcon } from '../assets/log-out.svg'
import { auth } from '../firebase/firebaseConfig'
import Btn from './btn'

const BtnLogOut = () => {
  const navigate = useNavigate()
  const logout = () => {
    auth.signOut()
      .then(() => {
        navigate('/sign-in')
      })
      .catch((error) => console.log('ERROR LOG OUT', error))
  }

  return (
    <Btn largeIcon as="button" onClick={logout}>
      <LogOutIcon />
    </Btn>
  )
}

export default BtnLogOut
