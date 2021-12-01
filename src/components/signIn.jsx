/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Btn from '../elements/btn'
import { BtnContainer, Form, Input } from '../elements/formItems'
import { Header, HeaderContainer, Title } from '../elements/header'
import { ReactComponent as SvgSignIn } from '../assets/registro.svg'
import { auth } from '../firebase/firebaseConfig'

const Svg = styled(SvgSignIn)`
  width: 100%;
  max-height: 6.25rem; /* 100px*/
  margin-bottom: 1.25rem; /* 20px */
`

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    password2: '',
  })

  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const singIn = (e) => {
    e.preventDefault()
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
          <Btn primario as="button" type="submit">Sign in</Btn>
        </BtnContainer>
      </Form>
    </>
  )
}

export default SignIn
