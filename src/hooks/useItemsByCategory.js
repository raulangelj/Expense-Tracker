/* eslint-disable no-unused-vars */
import { object } from 'prop-types'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext'
import { db } from '../firebase/firebaseConfig'
import useMonthlyItems from './useMonthlyItem'

const useItemsByCategory = () => {
  const [itemsCategory, setItemsCategory] = useState([])
  const items = useMonthlyItems()

  useEffect(() => {
    const categoryCount = items?.reduce((resultItem, item) => {
      const actualCategory = item.category
      const actualValue = item.value
      resultItem[actualCategory] += actualValue
      return resultItem
    }, {
      food: 0,
      'account & payment': 0,
      home: 0,
      transport: 0,
      clothes: 0,
      health: 0,
      shopping: 0,
      fun: 0,
    })

    setItemsCategory(Object.keys(categoryCount).map((cat) => ({
      category: cat,
      count: categoryCount[cat],
    })))
  }, [items])

  return itemsCategory
}

export default useItemsByCategory
