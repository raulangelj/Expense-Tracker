/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Btn from '../elements/btn'
import { BtnContainer, Form, Input } from '../elements/formItems'
import { Header, HeaderContainer, Title } from '../elements/header'
import { ReactComponent as SvgLogIn } from '../assets/login.svg'

const Svg = styled(SvgLogIn)`
  width: 100%;
  max-height: 12.5rem; /* 200px*/
  margin-bottom: 1.25rem; /* 20px */
`

const LogIn = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const login = () => {

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
          autocomplete="new-email"
          onChange={(e) => handelChange(e)}
        />
        <Input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          autocomplete="new-password"
          onChange={(e) => handelChange(e)}
        />
        <BtnContainer>
          <Btn primario as="button" type="submit">Log In</Btn>
        </BtnContainer>
      </Form>
    </>
  )
}

export default LogIn
