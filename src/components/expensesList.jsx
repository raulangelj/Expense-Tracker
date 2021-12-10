/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import BtnReturn from '../elements/BtnReturn'
import { Header, Title } from '../elements/header'
import useGetExpenses from '../hooks/useGetExpenses'
import ExpensesBar from './barExpenseTotal'
import {
  List,
  ListElement,
  CategoryList,
  DescriptionList,
  ValueList,
  DateList,
  BtnContainerList,
  BtnAccionList,
  BtnLoadMoreList,
  BtnCenterContainerList,
  SubtitleContainerList,
  SubtitleList,
} from '../elements/listElements'
import IconCategorie from '../elements/categoriesIcon'
import formatAmount from '../functions/coinConverter'
import { ReactComponent as IconEdit } from '../assets/editar.svg'
import { ReactComponent as IconErase } from '../assets/borrar.svg'
import Btn from '../elements/btn'

const ExpensesList = () => {
  const { user } = useAuth()
  const [allExepense, getMoreData, moreToload] = useGetExpenses()
  // eslint-disable-next-line no-console
  console.log('history', allExepense)

  const sameDate = (expenses, index, expense) => {
    if (index !== 0) {
      const actualDate = expense.date
      const lastDate = expenses[index - 1].date
      if (actualDate === lastDate) {
        return true
      }
      return false
    }
    return false
  }

  return (
    <>
      <Helmet>
        <title>Expenses History</title>
      </Helmet>
      <Header>
        <BtnReturn route="/" />
        <Title>Expenses History</Title>
      </Header>
      <List>
        {
          allExepense
          && allExepense.map((expense, index) => {
            return (
              <div key={expense.id}>
                {
                  !sameDate(allExepense, index, expense)
                  && <DateList>{expense.date}</DateList>
                }
                <ListElement key={expense.id}>
                  <CategoryList>
                    <IconCategorie id={expense.category} />
                    {expense.category}
                  </CategoryList>
                  <DescriptionList>
                    {expense.description}
                  </DescriptionList>
                  <ValueList>
                    {formatAmount(expense.value)}
                  </ValueList>
                  <BtnContainerList>
                    <BtnAccionList as={Link} to={`/edit/${expense.id}`}>
                      <IconEdit />
                    </BtnAccionList>
                    <BtnAccionList>
                      <IconErase />
                    </BtnAccionList>
                  </BtnContainerList>
                </ListElement>
              </div>
            )
          })
        }
        {
          moreToload
          && (
            <BtnCenterContainerList>
              <BtnLoadMoreList onClick={getMoreData}>More</BtnLoadMoreList>
            </BtnCenterContainerList>
          )
        }
        {
          allExepense?.length === 0
            && (
            <SubtitleContainerList>
              <SubtitleList>There are no expenses</SubtitleList>
              <Btn as={Link} to="/">Add expense</Btn>
            </SubtitleContainerList>
            )
        }
      </List>
      <ExpensesBar />
    </>
  )
}

export default ExpensesList
