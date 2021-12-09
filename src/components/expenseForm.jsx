/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Btn from '../elements/btn'
import {
  FilterCont, Form, Input, LargeInput, BtnContainer,
} from '../elements/formItems'
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import Alert from '../elements/alert'
import SelecteCategorys from './selectCategory'
import DatePicker from './datePicker'
import addExpense from '../firebase/addExpense'
import { useAuth } from '../context/authContext'

const ExpenseForm = () => {
  const { user } = useAuth()
  const [alert, setAlert] = useState({
    type: '',
    message: '',
  })

  const [expense, setExpense] = useState({
    description: '',
    value: '',
    category: 'Home',
    date: new Date(),
  })

  const handleChange = (e) => {
    const numbers = /^(\d{0,10})(\.)?(\d{1,2})?$/g
    const { value, name } = e.target
    if ((name === 'value' && numbers.test(value)) || name === 'description') {
      setExpense({
        ...expense,
        [e.target.name]: value,
      })
    }
  }

  const validateExpense = () => {
    if (
      expense.description !== ''
      && expense.value !== ''
      && expense.value !== null
      && expense.value !== undefined
    ) {
      return true
    }
    return false
  }

  const clearAlert = () => {
    const timer = setTimeout(() => {
      setAlert({
        type: '',
        message: '',
      })
      clearTimeout(timer)
    }, 4000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const valid = validateExpense()
    if (valid) {
      addExpense(expense, user.uid)
        .then(() => {
          setExpense({
            description: '',
            value: '',
            category: 'Home',
            date: new Date(),
          })
          setAlert({
            type: 'succes',
            message: 'Expense added correctly.',
          })
          clearAlert()
        })
        .catch(() => {
          setAlert({
            type: 'error',
            message: 'Something wrong happended, try again later.',
          })
        })
    } else {
      setAlert({
        type: 'error',
        message: 'Make sure to complete correctly all the fields.',
      })
      clearAlert()
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FilterCont>
        <SelecteCategorys
          state={{ expense, setExpense }}
        />
        <DatePicker
          state={{ expense, setExpense }}
        />
      </FilterCont>
      <div>
        <Input
          type="text"
          name="description"
          placeholder="description"
          value={expense.description}
          onChange={(e) => handleChange(e)}
        />
        <LargeInput
          type="text"
          name="value"
          placeholder="$0.00"
          value={expense.value}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <BtnContainer>
        <Btn as="button" primary wIcon type="submit">
          Add Expense
          <PlusIcon />
        </Btn>
      </BtnContainer>
      {
        alert.type
          && <Alert type={alert.type} message={alert.message} />
      }
    </Form>
  )
}

export default ExpenseForm
