/* eslint-disable no-unused-vars */
import { format, fromUnixTime } from 'date-fns'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { db } from '../firebase/firebaseConfig'

const useGetItem = (id) => {
  const [item, setItem] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    db.collection('expenses').doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setItem({
            ...doc.data(),
            id: doc.id,
            date: fromUnixTime(doc.data().date),
          })
        } else {
          navigate('/history')
        }
      })
  }, [id, navigate])
  return [item]
}

export default useGetItem
