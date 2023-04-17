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
                  user.accountType === 'customer' ? (
                    <div>
                      <button onClick={()=>{
                        dispatch(logout())
                        dispatch(reset())
                        navigate('/')
                        }}>
                        Logout
                      </button>
                      <button>
                        My Reviews
                      </button>
                      <button>
                        Restaurants
                      </button>
                    </div>
                    
                  ) : (
                    <div>
                    <button onClick={()=>{
                      dispatch(logout())
                      dispatch(reset())
                      navigate('/')
                      }}>
                      Logout
                    </button>
                    <button>
                      Customer Reviews
                    </button>
                    <button>
                      Edit Menu
                    </button>
                  </div>
                  )
          // <button onClick={()=>{
          //   dispatch(logout())
          //   dispatch(reset())
          //   navigate('/')
          // }}>
          //   Logout
          // </button>
        ) : (
          <div>
            <Link to="/business">
              <div>Business</div>
            </Link>
            <Link to="/customer">
              <div>Customer</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav