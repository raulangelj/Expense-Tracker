import React from 'react'
import { Helmet } from 'react-helmet'
import Btn from '../elements/btn'
import { Form, Input } from '../elements/formItems'
import { Header, HeaderContainer, Title } from '../elements/header'

const SignIn = () => (
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
    <Form>
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <Input type="password" name="password2" placeholder="Confirm password" />
    </Form>
  </>
)

export default SignIn
