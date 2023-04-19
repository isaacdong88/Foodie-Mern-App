import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editReview} from '../features/reviews/reviewsSlice'
import { useParams,useNavigate } from 'react-router-dom'
import { getReview } from '../features/reviews/reviewsSlice'


function EditReview() {
    const {id} = useParams()
    const {review, isLoading} = useSelector((state) => state.reviews)
    const [formReview, setFormReview] = useState({
        review: "",
        rating: "",
    })

    // const { review, rating} = formReview

    const dispatch = useDispatch()
    const navigate = useNavigate()

useEffect(()=>{
    dispatch(getReview(id))
},[])

useEffect(() => {
    setFormReview(review)
},[isLoading])



    const handleChange = (event) => {
        //use the event object to detect key and value to update
            setFormReview({ ...formReview, [event.target.name]: event.target.value });
            console.log(formReview)
        };
    
        const handleSubmit = (event) => {
            //prevent page from refreshing on form submission
            event.preventDefault();

            dispatch(editReview(
                {
                    ...review,
                    review: formReview.review,
                    rating: formReview.rating
                }
                ))
            setFormReview({
                review: "",
                rating: "",
            })
            console.log(formReview,'*')
            navigate('/interface/myreviews')
        };
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <h2>Write Review</h2>

            <input type="text" name='review' value={formReview.review} onChange={handleChange} /> <br />
            <label htmlFor="rating">Bad 1-10 Excellent</label>
            <input type="number" id='rating' name='rating' value={formReview.rating} min='1' max='10' onChange={handleChange}/> <br />
            <div>
                <button type='submit'>Add Review</button>
            </div>
            <div>
                <button onClick={()=>{
                    navigate('/interface/myreviews')
                }}>Back</button>
            </div>  
        </form>
    </div>
  )
}

export default EditReview