import React from 'react'
import { Helmet } from 'react-helmet'
import BtnReturn from '../elements/BtnReturn'
import { Header, Title } from '../elements/header'

const ExpensesList = () => (
  <>
    <Helmet>
      <title>Expenses History</title>
    </Helmet>
    <Header>
      <BtnReturn route="/" />
      <Title>Expenses History</Title>
    </Header>
  </>
)

export default ExpensesList
