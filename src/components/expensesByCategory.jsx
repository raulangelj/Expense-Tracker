/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { element } from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import uuid from 'react-uuid'
import BtnReturn from '../elements/BtnReturn'
import IconCategorie from '../elements/categoriesIcon'
import { Header, Title } from '../elements/header'
import {
  ListCategories,
  ListElementCategories,
  CategoryList,
  ValueList,
} from '../elements/listElements'
import formatAmount from '../functions/coinConverter'
import useItemsByCategory from '../hooks/useItemsByCategory'
import useMonthlyItems from '../hooks/useMonthlyItem'
import ExpensesBar from './barExpenseTotal'

const ExpensesByCategory = () => {
  // eslint-disable-next-line no-console
  console.log('render expenses by category')
  const items = useItemsByCategory()

  return (
    <>
      <Helmet>
        <title>Expenses by Category</title>
      </Helmet>
      <Header>
        <BtnReturn route="/" />
        <Title>Expenses by Category</Title>
      </Header>
      <ListCategories>
        {
          items.map((item, index) => {
            return (
              <ListElementCategories key={uuid()}>
                <CategoryList>
                  <IconCategorie id={item.category} />
                  {item.category}
                </CategoryList>
                <ValueList>{formatAmount(item.count)}</ValueList>
              </ListElementCategories>
            )
          })
        }
      </ListCategories>
      <ExpensesBar />
    </>
  )
}

export default ExpensesByCategory
