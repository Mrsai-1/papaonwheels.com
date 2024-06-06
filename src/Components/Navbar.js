import React from 'react'


const Navbar = ({ShowRegisterHandler,ShowLoginHandler}) => {


  return (
    <>
    <div className='NavbarSelction container-fluid'>
        <div>
        <h3>Papa DashBoard</h3>
        </div>
        <div className='login-signup'>
     <span className='login' onClick={ShowLoginHandler}>Login /</span><span className='register' onClick={ShowRegisterHandler}>Register</span>
     </div>
    </div>
    </>
  )
}

export default Navbar
