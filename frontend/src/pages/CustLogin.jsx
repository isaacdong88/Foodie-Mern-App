// import React from 'react'
// import { useState, useEffect } from 'react'
// import {useSelector, useDispatch} from 'react-redux'
// import {useNavigate} from 'react-router-dom'
// import {register, login, reset} from '../features/auth/authSlice'

// function CustLogin() {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     })

//     const {email, password} = formData

//     const navigate = useNavigate()
//     const dispatch = useDispatch()

//     const {user, isLoading, isError, isSuccess, message} = useSelector((state)=> state.auth)

//     useEffect(()=>{
//         if(isError) {
//             console.log(message)
//         }
//         if(isSuccess || user) {
//             navigate('/interface')
//         }

//         dispatch(reset())
//     }, [user,isError,isSuccess,message,navigate,dispatch])

//     const handleChange = (event) => {
//         //use the event object to detect key and value to update
//             setFormData({ ...formData, [event.target.name]: event.target.value });
//             console.log(formData)
//         };
    
//         const handleSubmit = (event) => {
//             //prevent page from refreshing on form submission
//             event.preventDefault();
//             const userData = {
//                 email,
//                 password
//             }
//             dispatch(login(userData))
//             console.log(formData,'*')
//         };

//     if(isLoading) {
//         return 'Page Loading'
//     }
//   return (
//     <div>
//         <form onSubmit={handleSubmit} action="">
//             <h1>Customer Login</h1>
//             <div>
//                 <input type="text" id="email2" name="email" value={email} placeholder='Email' onChange={handleChange}/>
//             </div>
//             <div>
//                 <input type="password" id="password2" name="password" value={password} placeholder='Password' onChange={handleChange}/>
//             </div>
//             <div>
//                 <button type='submit'>Submit</button>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default CustLogin