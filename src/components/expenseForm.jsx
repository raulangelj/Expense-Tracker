/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Btn from '../elements/btn'
import {
  FilterCont, Form, Input, LargeInput, BtnContainer,
} from '../elements/formItems'
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import Alert from '../elements/alert'
import SelecteCategorys from './selectCategory'

const ExpenseForm = () => {
  const [alert, setAlert] = useState({
    type: '',
    message: '',
  })

  const [expense, setExpense] = useState({
    description: '',
    value: '',
    category: 'Hogar',
  })

  const handleChange = (e) => {
    const numbers = /^(\d{1,10})(\.)?(\d{1,2})?$/g
    const { value, name } = e.target
    if ((name === 'value' && numbers.test(value)) || name === 'description') {
      setExpense({
        ...expense,
        [e.target.name]: value,
      })
    }
  }

  return (
    <Form>
      <FilterCont>
        <SelecteCategorys
          state={{ expense, setExpense }}
        />
        <p>Date Picker</p>
      </FilterCont>
      <div>
        <Input
          type="text"
          name="description"
          placeholder="descripcion"
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
    </Form>
  )
}

export default ExpenseForm
