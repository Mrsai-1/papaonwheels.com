import React from 'react'

const SlideBar = ({ShowProductHandler,ShowBrandHandler,showAllProductsScreen,showFirmmTitle}) => {




  return (
   <>
   <div className='SlideBarSection'>
      <ul>
     {showFirmmTitle && <li onClick={ShowBrandHandler}>Add Brand</li>}
      <li onClick={ShowProductHandler}>Add Product</li>
      <li onClick={showAllProductsScreen}>All Products</li>
      <li>User Details</li>
      
      </ul>
    </div>
    </>
  )
}

export default SlideBar
