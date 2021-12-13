/* eslint-disable no-unused-vars */
import { endOfMonth, getUnixTime, startOfMonth } from 'date-fns'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext'
import { db } from '../firebase/firebaseConfig'

const useMonthlyItems = () => {
  const [monthlyItems, setMonthlyItems] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    const startMonth = getUnixTime(startOfMonth(new Date()))
    const endMonth = getUnixTime(endOfMonth(new Date()))

    if (user) {
      const unsubscribe = db.collection('expenses')
        .orderBy('date', 'desc')
        .where('date', '>=', startMonth)
        .where('date', '<=', endMonth)
        .where('userUid', '==', user.uid)
        .onSnapshot((snapshot) => {
          let amount = 0
          const items = snapshot.docs.map((doc) => {
            amount += doc.data().value
            return {
              ...doc.data(),
            }
          })
          setMonthlyItems(items)
        })
      return unsubscribe
    }
    return null
  }, [user])

  return monthlyItems
}

export default useMonthlyItems
