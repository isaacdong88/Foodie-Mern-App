import React from 'react'
import { useState, useEffect } from 'react'


function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const {email, password} = formData

    // handleChange - updates formData when we type into form
    const handleChange = (event) => {
    //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData)
    };

    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
        console.log(formData,'*')
    };
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <h1>Customer Login</h1>
            <div>
                <input type="text" id="email" name="email" value={email} placeholder='Email' onChange={handleChange}/>
            </div>
            <div>
                <input type="password" id="password" name="password" value={password} placeholder='Password' onChange={handleChange}/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>

  )
}

export default Login