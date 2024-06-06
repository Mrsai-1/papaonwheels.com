import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import SlideBar from '../Components/SlideBar'
import Login from '../Components/Forms/Login'
import Register from '../Components/Forms/Register'
import AddBrand from '../Components/Forms/AddBrand'
import AddProduct from '../Components/Forms/AddProduct'
import Welcome from '../Components/Welcome'

const LandingPage = () => {
    
const [login,setLogin] = useState(false)
const [register,setRegister] = useState(false)
const [brand,setBrand] = useState(false)
const [product,setProduct] = useState(false);
const [welcome,setWelcome]=useState(false)

function ShowLoginHandler(){
    setLogin(true)
    setRegister(false)
    setBrand(false)
    setProduct(false)
    setWelcome(false)

}

function ShowRegisterHandler(){
    
    setRegister(true)
    setLogin(false)
    setBrand(false)
    setProduct(false)
    setWelcome(false)

}

function ShowBrandHandler(){
    setBrand(true)
    setLogin(false)
    setRegister(false)
    setProduct(false)
    setWelcome(false)

}

function ShowProductHandler(){
    setProduct(true)
    setLogin(false)
    setRegister(false)
    setBrand(false)
    setWelcome(false)

}
function showWelcomeScreen(){
  setProduct(false)
  setLogin(false)
  setRegister(false)
  setBrand(false)
  setWelcome(true)
}
  return (
    <>  
      <div>
      <Navbar ShowRegisterHandler={ShowRegisterHandler} ShowLoginHandler={ShowLoginHandler} />
      <div className="register-slider">
      <SlideBar ShowBrandHandler={ShowBrandHandler} ShowProductHandler={ShowProductHandler} />
      {login && <Login showWelcomeScreen={showWelcomeScreen}/>}
      {register && <Register ShowLoginHandler={ShowLoginHandler} />}
      {brand && <AddBrand  />}
      {product && <AddProduct/>}
      {welcome && <Welcome/>}
    </div>
    </div>
    </>

  )
}

export default LandingPage
