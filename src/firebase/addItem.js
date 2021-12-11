import getUnixTime from 'date-fns/getUnixTime'
import { db } from './firebaseConfig'

//* DATE IS A DATE OBJET AND USES UNIXTIME TO TURN IT INTO SECONS TO SAVE IT
const addItem = (expense, userUid) => {
  const {
    description, category,
  } = expense
  let { date, value } = expense
  // CONVERT VALUE IN A TWO DECIMAL NUMBER
  value = parseFloat(value).toFixed(2)

  // CONVERT THE DATE INTO SECONDS
  date = getUnixTime(date)

  return db.collection('expenses').add({
    description: `${description[0].toUpperCase()}${description.slice(1).toLowerCase()}`,
    value: Number(value),
    category,
    date,
    userUid,
  })
}

export default addItem
