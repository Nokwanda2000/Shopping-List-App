import React from 'react'
import Login from '../features/components/login'
import Footer from '../features/components/footer'
import Layoutpage from './layoutpage'

const Loginpage = () => {
  return (
    <>
    <Layoutpage/>
    <div>
      <Login/>
    </div>
    <Footer/>
    </>
  )
}

export default Loginpage
