import React from 'react'
import Login from './Login'
import NavBar from '@/components/user/navbar'
import Footer from '@/components/user/Footer'

export default function page() {
  return (
    <div>
      <NavBar/>
      <Login/>
      <Footer/>
    </div>
  )
}
