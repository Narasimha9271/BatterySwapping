import React from "react";
import Logo from "../assets/img/swap-logo.png";
import { Link } from "react-router-dom";

const Title = () => (
    <Link to="/">
        <img className="h-20 w-35 ml-2  top-0  " alt="logo" src={Logo} />
    </Link>
);

const Header = () => {
    return (
        <div className="flex items-center justify-between bg-white shadow-lg h-20 sticky z-[999] top-0">
            <Title />
            <div className="nav-items">
                <div className="flex  py-10 ">
                    <button className="p-3  text-base font-bold text-black  hover:bg-green-300 rounded-full">
                        <Link to="/">Home</Link>
                    </button>

                    <button className="p-3 text-base font-bold text-black hover:bg-green-300 rounded-full ">
                        <Link to="/about">About Us</Link>
                    </button>

                    <button className="p-3 text-base font-bold text-black  hover:bg-green-300 rounded-full">
                        <Link to="/stations">Swap Stations</Link>
                    </button>

                    <button className="p-3 text-base font-bold text-black mr-3  hover:bg-green-300 rounded-3xl">
                        <Link to="/payment">Payment</Link>
                    </button>

                    <button className="m-3 bg-blue-500  text-white font-semibold py-2 px-4 rounded-md hover:bg-white hover:border-blue-500 hover:text-blue-500 border border-blue-500 transition-colors duration-300">
                        <Link to="/login"> Log In</Link>
                    </button>

                    <button className="m-3 bg-white hover:bg-blue-500 hover:text-white text-blue-500 border border-blue-500 hover:border-transparent font-semibold py-2 px-4 rounded-md">
                        <Link to="/signup"> Sign Up</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
