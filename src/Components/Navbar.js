import React from 'react'


const Navbar = ({ShowRegisterHandler,ShowLoginHandler,showLogOut,logoutHandler}) => {

const brandName = localStorage.getItem("BrandName")

  return (
    <>
    <div className='NavbarSelction container-fluid'>
        <div>
        <h3>Papa DashBoard</h3>
        </div>
        <div>
        {/* <h3><span className='text-white'>BrandName:</span><span className='text-danger'>&nbsp;&nbsp;{brandName}</span></h3> */}
        <div className='firmName'>
          <h4>FirmName  :  {brandName}</h4>
        </div>
        </div>
        <div className='login-signup'>
          {!showLogOut ? <>
     <span className='login' onClick={ShowLoginHandler}>Login /</span>
     <span className='register' onClick={ShowRegisterHandler}>Register</span>
     </> : <span onClick={logoutHandler}>LogOut</span>}
          
     </div>
    </div>
    
    </>
  )
}

export default Navbar
