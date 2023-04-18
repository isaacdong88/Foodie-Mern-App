import React, { useState } from 'react'
import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function BusinessInterface() {
    const navigate = useNavigate()
    
    const {user} = useSelector((state)=> state.auth)
  const [busReview, setBusReview] = useState(null)

  const fetchReviews = async () => {
    const response = await fetch(`/reviews/${user._id}`)
    const data = await response.json()
    setBusReview(
      data.map((review, key) => {
        return (
          <div key={key} className='rest-page-reviews'>
            <div>{review.customerName}</div>
            <div>{new Date(review.createdAt).toLocaleString()} Rating {review.rating}/10</div>
            <div>{review.review}</div>
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

      //initially fetches all reviews when page loads
      useEffect(()=>{
        fetchReviews()
      },[])

  return (
    <div>
        {user.username}
        <div className='rest-page-reviewsDis'>
            {busReview}
        </div>
    </div>
  )
}

export default BusinessInterface