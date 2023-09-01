import React from 'react';
import "../css/Navbar.css";
import {BsFillCartPlusFill } from "react-icons/bs";
import img from "../asset/640b06d58091f108d43cec17_Logo Pharmacy©.svg"
function Navbar() {
  return (
    <div>
      <div className='navbar-mainContainer'>
          <div className='logoContainer'> 
            <img src={img} alt="logoImage" />
          </div>
          <div className='linkContainer'>
            <div className='links'>Home</div>
            <div className='links'>About Us</div>
            <div className='links'>Services</div>
            <div className='links'>Shop</div>
          </div>
          <div className='cartContainer'>
            <BsFillCartPlusFill size={30} color='#6b54fd' />
            <div className='getInTouch'>
              Get in Touch
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar