import React from 'react'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'


function Nav() {
const navigate = useNavigate()
const dispatch = useDispatch()
const {user} = useSelector((state) => state.auth)
const [display, setDisplay] = useState(null)

  const fetchRestaurants = async () => {
  const response = await fetch('/business/businesses')
  const data = await response.json()
  setDisplay(
    data.map((restaurant, key) => {
      return (
        <div key={key}>
          <a href={`/interface/business/${restaurant._id}`}><h2>{restaurant.username}</h2></a>
        </div>
      )
    })
  )
  navigate('/interface')
}


  return (
    <div className='nav-bar'>
      <div>
        {user ? (
                  user.accountType === 'customer' ? (
                    <div className='nav-bar1'>
                      <h3>Welcome {user.username}</h3>
                      <button onClick={()=>{
                        dispatch(logout())
                        dispatch(reset())
                        navigate('/')
                        }}>
                        Logout
                      </button>
                      <button onClick={()=>{
                        navigate('/interface/myreviews')
                      }}>
                        My Reviews
                        {/* <Link to="/interface/myreviews">
                          <div>My Reviews</div>
                        </Link> */}
                      </button>
                      <button onClick={fetchRestaurants}>
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
                      Business Page
                    </button>
                    <button>
                      Edit Business
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