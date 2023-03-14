import React from 'react'
import Logo from "../assets/img/swap-logo.png";
import { Link } from "react-router-dom";

const Title =() => (
  <a href="/">
  <img className="h-20 w-35 ml-2  top-0  " alt="logo" 
  src={Logo}
  />
  </a>
);


const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-lg h-20 sticky top-0">
          <Title/>
        <div className="nav-items">
          <div className="flex  py-10 " >
            <button className="p-3  text-base font-bold text-black  hover:bg-green-200 rounded-full">
              <Link to="/">Home</Link>
            </button>
            
            <button className="p-3 text-base font-bold text-black hover:bg-green-200 rounded-full ">
              <Link to="/about">About Us</Link>
            </button>
            

            <button className="p-3 text-base font-bold text-black  hover:bg-green-200 rounded-full">
              <Link to="/stations">Swap Stations</Link>
            </button>

            <button className="p-3 text-base font-bold text-black  hover:bg-green-200 rounded-full">
              <Link to="/team"> The Team</Link>
            </button>

            <button className="p-3 text-base font-bold text-black mr-3  hover:bg-green-200 rounded-full">
              <Link to="/contact">Contact</Link>
            </button>

          </div>
        </div>
      </div>
  )
}

export default Header