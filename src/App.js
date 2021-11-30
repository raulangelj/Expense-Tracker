import React from 'react'
import { Helmet } from 'react-helmet' // HELMET PERMITE AGREGAR META DATA EN CADA COMPONENTE
import Btn from './elements/btn'
import {
  BtnContainer, Header, HeaderContainer, Title,
} from './elements/header'

const App = () => (
  <>
    <Helmet>
      <title>Add Expense</title>
    </Helmet>
    <Header>
      <HeaderContainer>
        <Title>Add Expense</Title>
        <BtnContainer>
          <Btn to="/category">Category</Btn>
          <Btn to="/history">History</Btn>
          <Btn to="/">X</Btn>
        </BtnContainer>
      </HeaderContainer>
    </Header>
  </>
)

export default App
