import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createReview} from '../features/reviews/reviewsSlice'

function ReviewPost(props) {
    const [formReview, setFormReview] = useState({
        review: "",
        rating: "",
        business: "",
        businessName: ""
    })

    const { review, rating} = formReview

    const dispatch = useDispatch()

    const handleChange = (event) => {
        //use the event object to detect key and value to update
            setFormReview({ ...formReview, [event.target.name]: event.target.value });
            console.log(formReview)
        };
    
        const handleSubmit = (event) => {
            //prevent page from refreshing on form submission
            event.preventDefault();
            const reviewData = {
                review,
                rating,
                business: props.restaurant._id,
                businessName: props.restaurant.username
            }
            dispatch(createReview(reviewData))
            setFormReview({
                review: "",
                rating: "",
                business: "",
                businessName: ""
            })
            console.log(formReview,'*')
        };
  return (
    <div className='write-review-form'>
        <form onSubmit={handleSubmit} action="">
            <h2>Write Review</h2>
            {/* <input className='text-field' type="text" name='review' value={review} onChange={handleChange} /> <br /> */}
            <textarea name="review" id="review" value={review} cols="40" rows="12" onChange={handleChange} ></textarea><br />
            <label htmlFor="rating">Bad 1-10 Excellent</label>
            <input type="number" id='rating' name='rating' value={rating} min='1' max='10' onChange={handleChange}/> <br />
            <div>
                <button type='submit'>Add Review</button>
            </div>
        </form>
    </div>
  )
}

export default ReviewPost