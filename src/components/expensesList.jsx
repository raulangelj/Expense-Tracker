/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet'
import { useAuth } from '../context/authContext'
import BtnReturn from '../elements/BtnReturn'
import { Header, Title } from '../elements/header'
import ExpensesBar from './barExpenseTotal'

const ExpensesList = () => {
  const { user } = useAuth()

  return (
    <>
      <Helmet>
        <title>Expenses History</title>
      </Helmet>
      <Header>
        <BtnReturn route="/" />
        <Title>Expenses History</Title>
      </Header>
      <ExpensesBar />
    </>
  )
}

export default ExpensesList
