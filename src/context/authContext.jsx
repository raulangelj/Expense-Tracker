import React, { useState, useMemo, useContext } from 'react'
import PropTypes from 'prop-types'
import { auth } from '../firebase/firebaseConfig'

// CREATE THE CONTEXT
const AuthContext = React.createContext()

// CUSTOM HOOK TO ACCES CONTEXT
const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const login = useMemo(() => {
    auth.onAuthStateChanged((res) => {
      setUser(res)
      setLoading(false)
    })
    return {
      user,
      setUser,
    }
  }, [auth, user])

  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <AuthContext.Provider value={login}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext, useAuth }
