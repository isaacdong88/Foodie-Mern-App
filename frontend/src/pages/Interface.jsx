import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ReviewPost from '../component/ReviewPost'
import Display from '../component/Display'

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
          <div key={key}>
            <a href={`/interface/business/${restaurant._id}`}><h2>{restaurant.username}</h2></a>
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
    <div>
      <Display display={display}/>
      <ReviewPost />
    </div>
  )
}

export default Interface
