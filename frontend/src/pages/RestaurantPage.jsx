import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewPost from '../component/ReviewPost'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { reset } from '../features/reviews/reviewsSlice'

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
                    <div className='rpr-sec1'>Review by {review.customerName}</div>
                    <div className='rpr-sec2'>
                        <div>
                            Rating {review.rating}/10
                        </div>
                        <div>
                            {new Date(review.createdAt).toLocaleString()}
                        </div>
                    </div>
                    <div className='rpr-sec3'>{review.review}</div>
                  </div>
                )
              })
            )
        }

    const dispatch = useDispatch()
    const navigate = useNavigate()    
    const {isError, isSuccess, message} = useSelector((state)=> state.reviews)

    //fetch new review again once user post a new review
    useEffect(()=>{
        if(isError) {
            console.log(message)
        }
        if(isSuccess) {
            fetchReviews()
        }

        dispatch(reset())
    }, [isError,isSuccess,message,navigate,dispatch])    

    useEffect(()=>{
        fetchRestaurants()
      }, [])

      //initially fetches all reviews when page loads
      useEffect(()=>{
        fetchReviews()
      },[])
      
  return (
    <div className='rest-page-ctn'>
        <div className='bus-profile'>
            <img src={display?.image} alt="" />
            <h3>{display?.username}</h3>
        </div>
        <div className='customer-reviews'>
            <h2>Customer Reviews</h2>
            <div className='rest-page-reviewsDis'>
                {reviews}
            </div>
        </div>
        <div>
            <ReviewPost restaurant={display}/>
        </div>
    </div>
  )
}

export default RestaurantPage