import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Btn from '../elements/btn'
import { BtnContainer, Form, Input } from '../elements/formItems'
import { Header, HeaderContainer, Title } from '../elements/header'
import { ReactComponent as SvgLogIn } from '../assets/login.svg'
import { auth } from '../firebase/firebaseConfig'
import Alert from '../elements/alert'

const Svg = styled(SvgLogIn)`
  width: 100%;
  max-height: 12.5rem; /* 200px*/
  margin-bottom: 1.25rem; /* 20px */
`

const LogIn = () => {
  const navigate = useNavigate()
  const [alert, setAlert] = useState({
    type: '',
    message: '',
  })
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (alert.type === 'succes') {
      const timer = setTimeout(() => {
        clearInterval(timer)
        navigate('/')
      }, 3500)
    }
  })

  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const settingAlert = (type, message) => {
    setAlert({
      type,
      message,
    })
  }

  const login = (e) => {
    e.preventDefault()

    // VALIDATE DATA
    const exprEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
    if (user.email === '' || user.password === '') {
      settingAlert('error', 'Debe llenar todos los campo para continuar.')
    } else if (!exprEmail.test(user.email)) {
      settingAlert('error', 'Correo no valido.')
    } else {
      auth.signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          setAlert({
            type: 'succes',
            message: `Bienvenido ${res.user.email.split('@')[0]}`,
          })
        })
        .catch((error) => {
        // console.error('error', error)
          switch (error.code) {
            case 'auth/wrong-password':
              settingAlert('error', 'La contraseña tiene que ser de al menos 6 caracteres.')
              break
            case 'auth/user-not-found':
              settingAlert('error', 'No se encontro ningun usuario con estas credenciales.')
              break
            default:
              settingAlert('error', 'Hubo un error al intentar crear la cuenta.')
              break
          }
        })
    }
    const timer = setTimeout(() => {
      setAlert({
        type: '',
        message: '',
      })
      clearTimeout(timer)
    }, 4000) // WE USE 4 SECS BECAUSE IS THE TIME WE SET THE ANIMATION
  }

  return (
    <>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <Header>
        <HeaderContainer>
          <Title>Log in</Title>
          <div>
            <Btn to="/sign-in">Sign in</Btn>
          </div>
        </HeaderContainer>
      </Header>
      <Form autocomplete="nope" onSubmit={login}>
        <Svg />
        <Input
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          autoComplete="new-email"
          onChange={(e) => handelChange(e)}
        />
        <Input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          autoComplete="new-password"
          onChange={(e) => handelChange(e)}
        />
        <BtnContainer>
          <Btn primario as="button" type="submit">Log In</Btn>
        </BtnContainer>
      </Form>
      {
        alert.message
        && (
        <Alert
          type={alert.type}
          message={alert.message}
        />
        )
      }
    </>
  )
}

export default LogIn
