import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function ReviewPost() {
    const [formReview, setFormReview] = useState({
        username: "",
        review: "",
        rating: "",
    })

    const handleChange = (event) => {
        //use the event object to detect key and value to update
            setFormReview({ ...formReview, [event.target.name]: event.target.value });
            console.log(formReview)
        };
    
        const handleSubmit = (event) => {
            //prevent page from refreshing on form submission
            event.preventDefault();
            //pass the search term to moviesearch prop, which is apps getMovie function
            console.log(formReview,'*')
        };
  return (
    <div>
        <form action="">
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
        </form>
    </div>
  )
}

export default ReviewPost