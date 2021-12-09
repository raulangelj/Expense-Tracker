import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Btn from '../elements/btn'
import { BtnContainer, Form, Input } from '../elements/formItems'
import { Header, HeaderContainer, Title } from '../elements/header'
import { ReactComponent as SvgSignIn } from '../assets/registro.svg'
import { auth } from '../firebase/firebaseConfig'
import Alert from '../elements/alert'

const Svg = styled(SvgSignIn)`
  width: 100%;
  max-height: 6.25rem; /* 100px*/
  margin-bottom: 1.25rem; /* 20px */
`

const SignIn = () => {
  const navigate = useNavigate()
  let timer = ''
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState({
    email: '',
    password: '',
    password2: '',
  })

  // USE USEEFFECT TO CLEAN THE COMPONENT AFTER THE UNMOUNT
  useEffect(() => () => {
    setUser({
      email: '',
      password: '',
      password2: '',
    })
  }, [])

  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const singIn = (e) => {
    e.preventDefault()

    // VALIDATE DATA
    const exprEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
    if (user.email === '' || user.password === '' || user.password2 === '') {
      setErrorMessage('Debe llenar todos los campo para continuar.')
    } else if (!exprEmail.test(user.email)) {
      setErrorMessage('Correo no valido.')
    } else if (user.password !== user.password2) {
      setErrorMessage('Las contraseñas ingresadas no coinciden.')
    } else {
      // Sign in
      auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
          // console.log(res)
          navigate('/')
        })
        .catch((error) => {
          // console.error('error', error)
          switch (error.code) {
            case 'auth/invalid-password':
              setErrorMessage('La contraseña tiene que ser de al menos 6 caracteres.')
              break
            case 'auth/email-already-in-use':
              setErrorMessage('Ya existe una cuenta con el correo electrónico proporcionado.')
              break
            case 'auth/invalid-email':
              setErrorMessage('El correo electrónico no es válido.')
              break
            default:
              setErrorMessage('Hubo un error al intentar crear la cuenta.')
              break
          }
        })
    }
    timer = setTimeout(() => {
      setErrorMessage('')
      clearTimeout(timer)
    }, 4000) // WE USE 4 SECS BECAUSE IS THE TIME WE SET THE ANIMATION
  }

  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <Header>
        <HeaderContainer>
          <Title>Sign in</Title>
          <div>
            <Btn to="/log-in">Log in</Btn>
          </div>
        </HeaderContainer>
      </Header>
      <Form onSubmit={singIn}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => handelChange(e)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => handelChange(e)}
        />
        <Input
          type="password"
          name="password2"
          placeholder="Confirm password"
          value={user.password2}
          onChange={(e) => handelChange(e)}
        />
        <BtnContainer>
          <Btn primary as="button" type="submit">Sign in</Btn>
        </BtnContainer>
      </Form>
      {
        errorMessage
        && (
        <Alert
          type="error"
          message={errorMessage}
        />
        )
      }
    </>
  )
}

export default SignIn
