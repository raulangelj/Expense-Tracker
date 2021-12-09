import React from 'react'
import { Helmet } from 'react-helmet'
import BtnReturn from '../elements/BtnReturn'
import { Header, Title } from '../elements/header'
import ExpensesBar from './barExpenseTotal'

const ExpensesByCategory = () => (
  <>
    <Helmet>
      <title>Expenses by Category</title>
    </Helmet>
    <Header>
      <BtnReturn route="/" />
      <Title>Expenses by Category</Title>
    </Header>
    <ExpensesBar />
  </>
)

export default ExpensesByCategory
