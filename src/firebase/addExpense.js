/* eslint-disable no-unused-vars */
import getUnixTime from 'date-fns/getUnixTime'
import fromUnixTime from 'date-fns/fromUnixTime'
import { db } from './firebaseConfig'

//* DATE IS A DATE OBJET AND USES UNIXTIME TO TURN IT INTO SECONS TO SAVE IT
const addExpense = (expense, userUid) => {
  const {
    description, category,
  } = expense
  let { date, value } = expense
  // CONVERT VALUE IN A TWO DECIMAL NUMBER
  value = parseFloat(value).toFixed(2)

  // CONVERT THE DATE INTO SECONDS
  date = getUnixTime(date)

  return db.collection('expenses').add({
    description,
    value,
    category,
    date,
    userUid,
  })
}

export default addExpense
