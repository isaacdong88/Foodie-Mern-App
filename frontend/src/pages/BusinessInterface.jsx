import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function BusinessInterface() {
  const navigate = useNavigate()
  const {user} = useSelector((state)=> state.auth)
  useEffect(()=> {
    if(!user) {
      navigate('/')
    }
  }, [user,navigate])
  return (
    <div>Business Interface</div>
  )
}

export default BusinessInterface