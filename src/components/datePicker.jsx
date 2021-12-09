/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import DayPicker from 'react-day-picker/DayPickerInput'
import { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'
import { es, enUS } from 'date-fns/locale'
import PropType from 'prop-types'
import theme from '../theme'
import { months, daysWeekShort } from '../data/dayPickerLanguage'

// CHANGE FOR OTHER LANGUAGE IN DATE
const locale = enUS

const parseDate = (str, format) => {
  const parsed = dateFnsParse(str, format, new Date(), { locale })
  if (DateUtils.isDate(parsed)) {
    return parsed
  }
  return undefined
}

const formatDate = (date, format) => dateFnsFormat(date, format, { locale })

const InputContainer = styled.div`
    input {
        font-family: 'Work Sans', sans-serif;       
        box-sizing: border-box;
        background: ${theme.lightGrey};
        border: none;
        cursor: pointer;
        border-radius: 0.625rem; /* 10px */
        height: 5rem; /* 80px */
        width: 100%;
        padding: 0 1.5rem; /* 20px */
        font-size: 1.5rem; /* 24px */
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
 
    @media(max-width: 60rem){ /* 950px */
        & > * {
            width: 100%;
        }
    }
`

const DatePicker = ({ state }) => {
  const { expense, setExpense } = state
  const { date } = expense

  DatePicker.propTypes = {
    state: PropType.object.isRequired,
  }

  return (
    <InputContainer>
      <DayPicker
        value={date}
        format="MMMM dd',' yyyy" // CHANGE TO TRANSLATE
        formatDate={formatDate}
        parseDate={parseDate}
        onDayChange={(day) => setExpense({
          ...expense,
          date: day,
        })}
        // CHANGE TO TRANSLATE
        // dayPickerProps={
        //   {
        //     months,
        //     weekdaysShort: daysWeekShort,
        //   }
        // }
      />
    </InputContainer>
  )
}

export default DatePicker
