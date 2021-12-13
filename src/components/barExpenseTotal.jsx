/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { useMonthlyAmont } from '../context/monthlyAmountContext'
import formatAmount from '../functions/coinConverter'
import theme from '../theme'

const TotalBar = styled.div`
    background: ${theme.green};
    font-size: 1.25rem; /* 20px */
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.62rem 2.25rem; /* 10px 40px */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 31.25rem) { /* 500px */
        flex-direction: column;
        font-size: 14px;
    }
`

const ExpensesBar = () => {
  const { totalAmount } = useMonthlyAmont()

  return (
    <TotalBar>
      <p>Total expenses in the month:</p>
      <p>{formatAmount(totalAmount)}</p>
    </TotalBar>
  )
}

export default ExpensesBar
