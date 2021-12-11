/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import BtnReturn from '../elements/BtnReturn'
import { Header, Title } from '../elements/header'
import useGetItem from '../hooks/useGetItem'
import ExpensesBar from './barExpenseTotal'
import ExpenseForm from './expenseForm'

const EditExpense = () => {
  // eslint-disable-next-line no-console
  console.log('render edit expense, se renderiza dos veces por el item que busca')
  const { id } = useParams()
  const [item] = useGetItem(id)

  return (
    <>
      <Helmet>
        <title>Edit Item</title>
      </Helmet>
      <Header>
        <BtnReturn route="/history" />
        <Title>Edit Item</Title>
      </Header>
      <ExpenseForm item={item} />
      <ExpensesBar />
    </>
  )
}

export default EditExpense
