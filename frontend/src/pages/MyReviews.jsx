import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getReviews } from '../features/reviews/reviewsSlice'
import { reset } from '../features/reviews/reviewsSlice'
import { deleteReview } from '../features/reviews/reviewsSlice'

function MyReviews() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state)=> state.auth)
    const {reviews, isLoading, isError, message} = useSelector((state)=> state.reviews)

    useEffect(()=>{
        if(isError) {
            console.log(message)
        }

        if(!user){
            navigate('/')
        }

        dispatch(getReviews())
        return () => {
            dispatch(reset())
        }
    }, [user,navigate, isError, message, dispatch])

    if(isLoading) {
        return "Loading Reviews"
    }

  return (
    <div>
        {reviews.length > 0 ? (
            <div>
                {reviews.map((review, key)=> {
                    return (
                        <div key={key} className='rest-page-reviews'>
                            <div>Review for {review.businessName}</div>
                            <div>{new Date(review.createdAt).toLocaleString()} Rating {review.rating}/10</div>
                            <div>{review.review}</div>
                            <button onClick={()=> {
                                dispatch(deleteReview(review._id))
                            }}>X</button>
                            <button>Edit Review</button>
                        </div>
                    )
                })}
            </div>
        ) : (<h3>You have no reviews</h3>)}
    </div>
  )
}

export default MyReviews