import React from 'react'
import './Nabar.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import Cartnot from './Cartnot';


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        My<span className='sp'>Burg</span>
      </div>
      <div className="nav-buttons">
        <button className="paynow bt"><span className="i"><FaMoneyCheckAlt /></span> Pay Now! <span className='note'></span></button>
        <button className="cart bt"><span className="i"><FaShoppingCart /></span> Your Cart</button>
      </div>
    </nav>
  )
}

export default Navbar
