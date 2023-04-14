import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav-bar'>
        <Link to="/login">
            <div>Login</div>
        </Link>
        <Link to="/register">
            <div>Register</div>
        </Link>

    </div>
  )
}

export default Nav