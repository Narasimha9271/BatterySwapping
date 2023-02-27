import React from 'react'
import Logo from "../assets/img/swaplogo.png";
import { Link } from "react-router-dom";

const Title =() => (
  <a href="/">
  <img className="h-18 w-20 p-2 mt-5" alt="logo" 
  src={Logo}
  />
  </a>
);


const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 shadow-lg h-20">
          <Title/>
        <div className="nav-items">
          <ul className="flex  py-10 " >
            <li className="px-2  text-base font-bold text-black hover:text-gray-500">
              <Link to="/">Home</Link>
            </li>
            
            <li className="px-2 text-base font-bold text-black hover:text-gray-500 ">
              <Link to="/about">About Us</Link>
            </li>

            <li className="px-2 text-base font-bold text-black hover:text-gray-500">
              <Link to="/stations">Swap Stations</Link>
            </li>

            <li className="px-2 text-base font-bold text-black hover:text-gray-500">
              <Link to="/team"> The Team</Link>
            </li>

            <li className=" px-2  text-base font-bold text-black hover:text-gray-500">
            <Link to="/cart">Cart</Link>
            </li>

            <li className="px-2 text-base font-bold text-black hover:text-gray-500">
              <Link to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </div>
  )
}

export default Header