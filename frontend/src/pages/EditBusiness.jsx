import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editBusiness } from '../features/auth/authBusinessSlice';
import { getBusiness } from '../features/auth/authBusinessSlice';
import { deleteBusiness } from '../features/auth/authBusinessSlice';
import { logout } from '../features/auth/authBusinessSlice';



function EditBusiness() {

    const [businessForm, setBusinessForm] = useState({
        image: "",
    })
    const {id} = useParams()

    const {image} = businessForm

    const {user, isLoading} = useSelector((state)=> state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // useEffect(() => {
    //     setBusinessForm(user.image)
    // },[user,isLoading])


    const businessChange = (event) => {
        //use the event object to detect key and value to update
            setBusinessForm({ ...businessForm, [event.target.name]: event.target.value });
            console.log(businessForm)
        };
    
        const businessSubmit = (event) => {
            //prevent page from refreshing on form submission
            event.preventDefault();

            dispatch(editBusiness(
                {
                    ...user,
                    image: image,
                }
                ))
            setBusinessForm({
                image: "",
            })
            console.log(businessForm,'*')
            // navigate('/businessinterface')
        };



    const [dish, setDish] = useState(null);
    const [formDish, setFormDish] = useState({
        searchterm: "",
    })

    useEffect(()=>{
        dispatch(getBusiness(id))
    },[])


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
              <div>
                <button>Add to Menu</button>
              </div>
            </div>
          )
        })
      )
    };

    useEffect(()=>{
        fetchDish('chicken')
    },[])

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

        <div>
            <form action="" onSubmit={businessSubmit}>
                <h2>Edit Business Info</h2>
                Profile Picture <input type="text" name="image" value={businessForm.image} onChange={businessChange}/>
                <button type='submit'>Update Photo</button>
            </form>
        </div>

        <div>
            <button onClick={()=>{
                dispatch(deleteBusiness(user._id))
                dispatch(logout())
                navigate('/')
            }}>Delete Business</button>
        </div>
    </div>
    
  )
}

export default EditBusiness