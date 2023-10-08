// Hooks
import { useEffect, useState } from 'react'
// Firebase Auth
import { onAuthStateChanged, getAuth } from 'firebase/auth'
// Components
import Login from './Login'
import DashBoardForm from './DashBoardForm'

const MainDashboard = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth()

  useEffect(() => {
    // 1-auth, 2-method
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null)
    })
  }, [])

  return <div>{user ? <DashBoardForm /> : <Login />}</div>
}

export default MainDashboard
