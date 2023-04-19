import React from 'react'
import { useState } from 'react';

function EditBusiness() {

    const [dish, setDish] = useState(null);
    const [formDish, setFormDish] = useState({
        searchterm: "",
    })

    // const fetchReviews = async () => {
    //     const response = await fetch(`/reviews/${restaurant}`)
    //     const data = await response.json()
        // setReviews(
        //   data.map((review, key) => {
        //     return (
        //       <div key={key} className='rest-page-reviews'>
        //         <div>{review.customerName}</div>
        //         <div>{new Date(review.createdAt).toLocaleString()} Rating {review.rating}/10</div>
        //         <div>{review.review}</div>
        //       </div>
        //     )
        //   })
        // )
    // }


    const fetchDish = async (searchTerm) => {
      // make fetch request and store response
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      console.log(data)
      setDish(
        data.meals?.map((dish, key) => {
          return (
            <div key={key} className='meal-item'>
              <div>{dish.strMeal}</div>
              <div>
                <img src={dish.strMealThumb} alt="" />
              </div>
            </div>
          )
        })
      )
    };

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
    //use the event object to detect key and value to update
        setFormDish({ ...formDish, [event.target.name]: event.target.value });
        console.log(formDish)
    };

    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search term to moviesearch prop, which is apps getMovie function
        fetchDish(formDish.searchterm);
        console.log(formDish,'*')
    };

  return (
    <div>
        <form className="formfield" onSubmit={handleSubmit}>
            <input className="searcharea" type="text" name="searchterm" onChange={handleChange} value={formDish.searchterm} placeholder='Search Items for Menu' />
            <input type="submit" value="Search" />
        </form>
        <form action=""></form>
        <div className='meal-Result'>
            {dish ? dish : "Search for Menu items"}
        </div>
    </div>
  )
}

export default EditBusiness