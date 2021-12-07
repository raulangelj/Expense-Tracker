/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet' // HELMET PERMITE AGREGAR META DATA EN CADA COMPONENTE
import ExpenseForm from './components/expenseForm'
import Btn from './elements/btn'
import {
  BtnsContainer, Header, HeaderContainer, Title,
} from './elements/header'
import BtnLogOut from './elements/signOutBtn'

const App = () => {
  const a = 0
  // eslint-disable-next-line no-console
  console.log('Render app')

  return (
    <>
      <Helmet>
        <title>Add Expense</title>
      </Helmet>
      <Header>
        <HeaderContainer>
          <Title>Add Expense</Title>
          <BtnsContainer>
            <Btn to="/category">Category</Btn>
            <Btn to="/history">History</Btn>
            <BtnLogOut />
          </BtnsContainer>
        </HeaderContainer>
      </Header>
      <ExpenseForm />
    </>
  )
}

export default App
