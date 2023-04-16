import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'


function Nav() {
const navigate = useNavigate()
const dispatch = useDispatch()
const {user} = useSelector((state) => state.auth)

  return (
    <div className='nav-bar'>
      <div>
        {user ? (
          <button onClick={()=>{
            dispatch(logout())
            dispatch(reset())
            navigate('/')
          }}>
            Logout
          </button>
        ) : (
          <div>
            <Link to="/login">
              <div>Login</div>
            </Link>
            <Link to="/register">
              <div>Register</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav