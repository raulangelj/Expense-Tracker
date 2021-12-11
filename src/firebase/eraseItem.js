import { db } from './firebaseConfig'

const eraseItem = (id) => {
  db.collection('expenses').doc(id).delete()
}

export default eraseItem
