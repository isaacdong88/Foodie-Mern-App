import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewPost from '../component/ReviewPost'

function RestaurantPage() {
    const [display, setDisplay] = useState(null)
    const [reviews, setReviews] = useState(null)
    const params = useParams()
    const restaurant = params.id
    const url = `/business/business/${restaurant}`
  
      const fetchRestaurants = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setDisplay(data)
    }

        const fetchReviews = async () => {
            const response = await fetch(`/reviews/${restaurant}`)
            const data = await response.json()
            setReviews(
              data.map((review, key) => {
                return (
                  <div key={key} className='rest-page-reviews'>
                    <div>{review.customerName}</div>
                    <div>{review.review}</div>
                    <div>{review.rating}</div>
                  </div>
                )
              })
            )
        }

    useEffect(()=>{
        fetchRestaurants()
      }, [])

      useEffect(()=>{
        fetchReviews()
      }, [])
      
  return (
    <div className='rest-page-ctn'>
        {display?.username}
        {reviews}
        <ReviewPost restaurant={display}/>
    </div>
  )
}

export default RestaurantPage