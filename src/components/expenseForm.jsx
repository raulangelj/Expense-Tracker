/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'
import Btn from '../elements/btn'
import {
  FilterCont, Form, Input, LargeInput, BtnContainer,
} from '../elements/formItems'
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import Alert from '../elements/alert'
import SelecteCategorys from './selectCategory'
import DatePicker from './datePicker'
import addItem from '../firebase/addItem'
import { useAuth } from '../context/authContext'
import editItem from '../firebase/editItem'

const ExpenseForm = ({ item }) => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [alert, setAlert] = useState({
    type: '',
    message: '',
  })

  const [expense, setExpense] = useState({
    description: '',
    value: '',
    category: 'home',
    date: new Date(),
  })

  ExpenseForm.propTypes = {
    item: PropTypes.object,
  }

  ExpenseForm.defaultProps = {
    item: {},
  }

  // USE USEEFFECT TO CLEAN THE COMPONENT AFTER THE UNMOUNT
  useEffect(() => () => {
    setExpense({
      description: '',
      value: '',
      category: 'Home',
      date: new Date(),
    })
    setAlert({
      type: '',
      message: '',
    })
  }, [])

  useEffect(() => {
    if (item && Object.keys(item).length > 0) {
      if (user.uid === item?.userUid) {
        setExpense({
          category: item.category,
          description: item.description,
          value: item.value,
          date: item.date,
        })
      } else {
        navigate('/history')
      }
    }
  }, [item, user, navigate])

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

  const cleanStatesOnSuccess = (successMessage) => {
    setExpense({
      description: '',
      value: '',
      category: 'Home',
      date: new Date(),
    })
    setAlert({
      type: 'succes',
      message: successMessage,
    })
    clearAlert()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const valid = validateExpense()
    if (valid) {
      if (item && Object.keys(item).length > 0) {
        editItem({
          ...expense,
          id: item.id,
        })
          .then(() => {
            cleanStatesOnSuccess('Item updated succesfully.')
            const timer = setTimeout(() => {
              navigate('/history')
              clearTimeout(timer)
            }, 1500)
          })
          .catch(() => {
            setAlert({
              type: 'error',
              message: 'Something wrong happended, try again later.',
            })
            clearAlert()
          })
      } else {
        addItem(expense, user.uid)
          .then(() => {
            cleanStatesOnSuccess('Expense added correctly.')
          })
          .catch(() => {
            setAlert({
              type: 'error',
              message: 'Something wrong happended, try again later.',
            })
            clearAlert()
          })
      }
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
          {
            item && Object.keys(item).length > 0
              ? 'Save Item'
              : 'Add Expense'
          }
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
