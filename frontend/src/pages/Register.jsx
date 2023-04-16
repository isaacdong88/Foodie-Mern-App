import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {register, reset} from '../features/auth/authSlice'

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const {username, email, password,confirmPassword} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state)=> state.auth)

    useEffect(()=>{
        if(isError) {
            console.log(message)
        }
        if(isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user,isError,isSuccess,message,navigate,dispatch])

    // handleChange - updates formData when we type into form
    const handleChange = (event) => {
    //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData)
    };

    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords do not match")
        } else {
            const userData = {
                username,
                email,
                password
            }
            dispatch(register(userData))
        }
        console.log(formData,'*')
    };

    if(isLoading) {
        return 'Page Loading'
    }
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <h1>Create Customer Account</h1>
            <div>
            <input type="text" id="username" name="username" value={username} placeholder='Username' onChange={handleChange}/>
            </div>
            <div>
                <input type="text" id="email" name="email" value={email} placeholder='Email' onChange={handleChange}/>
            </div>
            <div>
                <input type="password" id="password" name="password" value={password} placeholder='Password' onChange={handleChange}/>
            </div>
            <div>
                <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} placeholder='Confirm Password' onChange={handleChange}/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Register