/* eslint-disable no-unused-vars */
import React from 'react'
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

const LogIn = () => (
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
    <Form autocomplete="nope">
      <Svg />
      <Input type="email" name="email" placeholder="Email" autocomplete="new-email" />
      <Input type="password" name="password" placeholder="Password" autocomplete="new-password" />
      <BtnContainer>
        <Btn primario as="button" type="submit">Log In</Btn>
      </BtnContainer>
    </Form>
  </>
)

export default LogIn
