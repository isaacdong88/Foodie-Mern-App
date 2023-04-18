import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewPost from '../component/ReviewPost'

function RestaurantPage() {
    const [display, setDisplay] = useState(null)
    const params = useParams()
    const restaurant = params.id
    const url = `/business/business/${restaurant}`
  
      const fetchRestaurants = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setDisplay(data)
    }

    useEffect(()=>{
        fetchRestaurants()
      }, [])
  return (
    <div>
        {display?.username}
        <ReviewPost restaurant={display}/>

    </div>
  )
}

export default RestaurantPage