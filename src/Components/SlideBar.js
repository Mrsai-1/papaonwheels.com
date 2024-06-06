import React from 'react'

const SlideBar = ({ShowProductHandler,ShowBrandHandler}) => {




  return (
   <>
   <div className='SlideBarSection'>
      <ul>
      <li onClick={ShowBrandHandler}>Add Brand</li>
      <li onClick={ShowProductHandler}>Add Product</li>
      <li>All Products</li>
      <li>User Details</li>
      
      </ul>
    </div>
    </>
  )
}

export default SlideBar
