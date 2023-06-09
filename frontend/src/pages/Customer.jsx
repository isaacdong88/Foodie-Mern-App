import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {register, login, reset} from '../features/auth/authSlice'
import divider from '../divider.png'

function Customer() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const {username, email, password, confirmPassword} = formData

    const [formData2, setFormData2] = useState({
        email2: "",
        password2: "",
    })

    const {email2, password2} = formData2

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state)=> state.auth)

    useEffect(()=>{
        if(isError) {
            console.log(message)
        }
        if(isSuccess || user) {
            navigate('/interface')
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

    const handleChange2 = (event) => {
        //use the event object to detect key and value to update
            setFormData2({ ...formData2, [event.target.name]: event.target.value });
            console.log(formData2)
        };
    
        const handleSubmit2 = (event) => {
            //prevent page from refreshing on form submission
            event.preventDefault();
            const userData = {
                email2,
                password2
            }
            dispatch(login(userData))
            console.log(formData2,'*')
        };

    if(isLoading) {
        return 'Page Loading'
    }
  return (
    <div className='login-form'>
        <div className='form-register'>
            <form onSubmit={handleSubmit} action="">
                <h2>Create Customer Account</h2>
                <div>
                <input type="text" id="username" name="username" value={username} placeholder='Username' required onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" id="email" name="email" value={email} placeholder='Email' required onChange={handleChange}/>
                </div>
                <div>
                    <input type="password" id="password" name="password" value={password} placeholder='Password' required onChange={handleChange}/>
                </div>
                <div>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} placeholder='Confirm Password' required onChange={handleChange}/>
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>

        <div className='form-divider'>
            <img src={divider} alt="" />
        </div>
        
        <div className='login-sec'>
            <form onSubmit={handleSubmit2} action="">
                <h2>Customer Login</h2>
                <div>
                    <input type="text" id="email2" name="email2" value={email2} placeholder='Email' required onChange={handleChange2}/>
                </div>
                <div>
                    <input type="password" id="password2" name="password2" value={password2} placeholder='Password' required onChange={handleChange2}/>
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Customer