/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo, useContext } from 'react'
import PropTypes from 'prop-types'
import { auth } from '../firebase/firebaseConfig'
import useMonthlyItems from '../hooks/useMonthlyItem'

const TotalExpenseAmountContext = React.createContext()

// CUSTOM HOOK TO GET THE MONTHLY AMOUNT
const useMonthlyAmont = () => useContext(TotalExpenseAmountContext)

const TotalExpenseAmountProvider = ({ children }) => {
  // ! CHECK PERFORMANCE
  const [totalAmount, setTotalAmount] = useState(0)
  const items = useMonthlyItems()

  const montlyAmount = useMemo(() => {
    let total = 0
    items.forEach((item) => {
      total += item.value
    })
    setTotalAmount(total)
    return {
      totalAmount,
      setTotalAmount,
    }
  }, [totalAmount, items])

  TotalExpenseAmountProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <TotalExpenseAmountContext.Provider value={montlyAmount}>
      { children }
    </TotalExpenseAmountContext.Provider>
  )
}

export { TotalExpenseAmountProvider, useMonthlyAmont }
