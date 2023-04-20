import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import Display from '../component/Display'

function Interface() {
  const [display, setDisplay] = useState(null)
  const navigate = useNavigate()
  const {user} = useSelector((state)=> state.auth)

    const fetchRestaurants = async () => {
    const response = await fetch('/business/businesses')
    const data = await response.json()
    setDisplay(
      data.map((restaurant, key) => {
        return (
          <div key={key} className='interface-buslink'>
            <img src={restaurant.image} alt="" />
            <div className='interface-link-des'>
              <a href={`/interface/business/${restaurant._id}`}><h2>{restaurant.username}</h2></a>
            </div>
          </div>
        )
      })
    )
  }

  useEffect(()=> {
    if(!user) {
      navigate('/')
    }
  }, [user,navigate])

  useEffect(()=>{
    fetchRestaurants()
  }, [])
  return (
    <div className='interface-ctn'>
      {display}
      {/* <Display display={display}/> */}
    </div>
  )
}

export default Interface
