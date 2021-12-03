import React from 'react'
import { Helmet } from 'react-helmet'
import { useAuth } from '../context/authContext'
import BtnReturn from '../elements/BtnReturn'
import { Header, Title } from '../elements/header'

const ExpensesList = () => {
  console.log('se renderizo expenses list')
  const { user } = useAuth()
  console.log(user)
  return (
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
}

export default ExpensesList
