// Hooks
import { useEffect, useState } from 'react'
// Firebase Auth
import { onAuthStateChanged, getAuth } from 'firebase/auth'
// Components
import Login from '../Login/Login'
import Main from './Main'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth()

  useEffect(() => {
    // 1-auth, 2-method
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null)
    })
  }, [])

  return <div>{user ? <Main /> : <Login />}</div>
}

export default Dashboard
