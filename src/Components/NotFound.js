import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
   
    <div className='errorSection'>
        
      <h1 className='text-center'>404</h1>
      <div className='text-center'>Page Not Found</div><br></br>
      <Link to='/'> <button className='btn btn-primary '>Go To DashBoard</button></Link>

    </div>
    </>
  )
}

export default NotFound
