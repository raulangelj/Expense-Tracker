/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { format, fromUnixTime } from 'date-fns'
import { es, enUS } from 'date-fns/locale'
import { useAuth } from '../context/authContext'
import { db } from '../firebase/firebaseConfig'

// TRANSLATE
const locale = enUS

const formatDate = (date) => format(fromUnixTime(date), "MMMM dd', ' yyyy", { locale })

const useGetExpenses = () => {
  // ? CAN IT BE DONE WITH USEMEMO? RIGHT NOW IT RERENDERS TE COMPONENT 3 TIMES
  const { user } = useAuth()
  const [allExepenses, setAllExpenses] = useState([])
  const [lastExpense, setLastExpense] = useState()
  const [moreToLoad, setMoreToLoad] = useState(false)

  const getMoreData = () => {
    db.collection('expenses')
      .where('userUid', '==', user.uid)
      .orderBy('date', 'desc')
      .limit(10)
      .startAfter(lastExpense)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length > 0) {
          const data = snapshot.docs.map((exp) => ({
            ...exp.data(),
            id: exp.id,
            date: formatDate(exp.data().date),

          }))
          setAllExpenses(allExepenses.concat(data))
          setLastExpense(snapshot.docs[snapshot.docs.length - 1])
          setMoreToLoad(true)
        } else {
          setMoreToLoad(false)
        }
      })
  }

  // PASAR A USEMEMO TO IMPROVE PERFORMANCE
  useEffect(() => {
    const unsubscribe = db.collection('expenses')
      .where('userUid', '==', user.uid)
      .orderBy('date', 'desc')
      .limit(10)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length > 0) {
          setLastExpense(snapshot.docs[snapshot.docs.length - 1])
          setMoreToLoad(true)
          const data = snapshot.docs.map((exp) => ({
            ...exp.data(),
            id: exp.id,
            date: formatDate(exp.data().date),

          }))
          setAllExpenses(data)
        } else {
          setMoreToLoad(false)
        }
      })
    return unsubscribe
  }, [user])
  return [allExepenses, getMoreData, moreToLoad]
}

export default useGetExpenses
