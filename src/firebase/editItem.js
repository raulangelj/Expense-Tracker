import getUnixTime from 'date-fns/getUnixTime'
import { db } from './firebaseConfig'

const editItem = (expense) => {
  const {
    description, category, id,
  } = expense
  let { date, value } = expense
  // CONVERT VALUE IN A TWO DECIMAL NUMBER
  value = parseFloat(value).toFixed(2)

  // CONVERT THE DATE INTO SECONDS
  date = getUnixTime(date)

  return db.collection('expenses').doc(id).update({
    description: `${description[0].toUpperCase()}${description.slice(1).toLowerCase()}`,
    value: Number(value),
    category,
    date,
  })
}

export default editItem
