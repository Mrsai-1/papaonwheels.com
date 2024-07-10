import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import SlideBar from "../Components/SlideBar";
import Login from "../Components/Forms/Login";
import Register from "../Components/Forms/Register";
import AddBrand from "../Components/Forms/AddBrand";
import AddProduct from "../Components/Forms/AddProduct";
import Welcome from "../Components/Welcome";
import AllProducts from "../Components/Forms/AllProducts";

const LandingPage = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [brand, setBrand] = useState(false);
  const [product, setProduct] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [showAllProducts, setAllProducts] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showFirmmTitle, setShowFirmTitle] = useState(true)

useEffect(()=>{
  const LoginToken= localStorage.getItem('loginToken')
  if(LoginToken){
  setShowLogOut(true)
  
  }
},[])


useEffect(()=>{
  const brandName= localStorage.getItem('BrandName')
  if(brandName){
    setShowFirmTitle(false)
  }
},[])

const logoutHandler=()=>{
  if(window.confirm("Are you sure u want to logout..?")){
  localStorage.removeItem("loginToken")
  localStorage.removeItem("FirmId")
  localStorage.removeItem("BrandName")
  setShowLogOut(false)
  setShowFirmTitle(true)
  }
}

  function ShowLoginHandler() {
    setLogin(true);
    setRegister(false);
    setBrand(false);
    setProduct(false);
    setWelcome(false);
    setAllProducts(false);

  }

  function ShowRegisterHandler() {
    setRegister(true);
    setLogin(false);
    setBrand(false);
    setProduct(false);
    setWelcome(false);
    setAllProducts(false);

  }

  function ShowBrandHandler() {
    if(showLogOut){
    setBrand(true);
    setLogin(false);
    setRegister(false);
    setProduct(false);
    setWelcome(false);
    setAllProducts(false);
    }
    else{
      alert("Please Login First...!")
      setRegister(false);
      setLogin(true);
    }
  }

  function ShowProductHandler() {
    if(showLogOut){
    setProduct(true);
    setLogin(false);
    setRegister(false);
    setBrand(false);
    setWelcome(false);
    setAllProducts(false);
  }
  else{
    alert("Please Login First...!")
    setRegister(false);
    setLogin(true);
    
  }
  }
  function showWelcomeScreen() {
    setProduct(false);
    setLogin(false);
    setRegister(false);
    setBrand(false);
    setWelcome(true);
    setAllProducts(false);
  }
  function showAllProductsScreen() {
    if(showLogOut){

    setProduct(false);
    setLogin(false);
    setRegister(false);
    setBrand(false);
    setWelcome(false);
    setAllProducts(true);
  }
  else{
    alert("Please Login First...!")
    setRegister(false);
    setLogin(true);
  }
  }


  return (
    <>
      <div>
        <Navbar
          ShowRegisterHandler={ShowRegisterHandler}
          ShowLoginHandler={ShowLoginHandler}
          showLogOut={showLogOut}
          logoutHandler={logoutHandler}
        />
        <div className="register-slider">
          <SlideBar
            ShowBrandHandler={ShowBrandHandler}
            ShowProductHandler={ShowProductHandler}
            showAllProductsScreen={showAllProductsScreen}
            showFirmmTitle={showFirmmTitle}
          />
          {login && <Login showWelcomeScreen={showWelcomeScreen} />}
          {register && <Register ShowLoginHandler={ShowLoginHandler} />}
          {brand && showLogOut && <AddBrand />}
          {product && showLogOut &&  <AddProduct />}
          {welcome && showLogOut &&  <Welcome />}
         
          {showAllProducts && showLogOut &&  <AllProducts />}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
