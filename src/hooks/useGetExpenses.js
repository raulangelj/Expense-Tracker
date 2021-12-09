/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useAuth } from '../context/authContext'
import { db } from '../firebase/firebaseConfig'

const useGetExpenses = () => {
  const [allExepenses, setAllExpenses] = useState()
  const { user } = useAuth()

  // PASAR A USEMEMO TO IMPROVE PERFORMANCE
  useEffect(() => {
    const unsubscribe = db.collection('expenses')
      .where('userUid', '==', user.uid)
      .orderBy('date', 'desc')
      .limit(10)
      .onSnapshot((snapshot) => {
        setAllExpenses(
          snapshot.docs.map((exp) => ({
            ...exp.data(),
            id: exp.id,
          })),
        )
      })
    return unsubscribe
  }, [user])
  return [allExepenses]
}

export default useGetExpenses
