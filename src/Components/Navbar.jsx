import React, { useState } from 'react';
import { FaAppStore, FaGithub } from 'react-icons/fa';
import logoImage from '../assets/logo.png';
import { Link } from 'react-router'; 
import { IoHomeOutline } from 'react-icons/io5';
import { MdInstallDesktop } from 'react-icons/md';

const Navbar = () => {
  const [active, setActive] = useState("home"); 

  return (
    <div className="navbar bg-base-100 shadow-sm px-[50px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

         
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link
                to="/"
                onClick={() => setActive("home")}
                className={active === "home" ? "w-full border-b-2 border-[#3569c8]" : "w-full"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={() => setActive("apps")}
                className={active === "apps" ? "w-full border-b-2 border-[#3569c8]" : "w-full"}
              >
                Apps
              </Link>
            </li>
            <li>
              <Link
                to="/installation"
                onClick={() => setActive("installation")}
                className={active === "installation" ? "w-full border-b-2 border-[#3569c8]" : "w-full"}
              >
                Installation
              </Link>
            </li>
          </ul>
        </div>

      
        <Link to="/" onClick={() => setActive("home")} className="flex justify-center items-center">
          <img className="h-[40px] w-[40px]" src={logoImage} alt="logo" />
          <span className="text-2xl text-[#3569c8] pl-2">Appoza</span>
        </Link>
      </div>

    
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <Link
              to="/"
              onClick={() => setActive("home")}
              className={`flex justify-center items-center gap-2 cursor-pointer ${active === "home" ? "border-b-2 border-[#3569c8]" : ""}`}
            >
              <IoHomeOutline />
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              onClick={() => setActive("apps")}
              className={`flex justify-center items-center gap-2 cursor-pointer ${active === "apps" ? "border-b-2 border-[#3569c8]" : ""}`}
            >
              <FaAppStore />
              <span>Apps</span>
            </Link>
          </li>

          <li>
            <Link
              to="/installation"
              onClick={() => setActive("installation")}
              className={`flex justify-center items-center gap-2 cursor-pointer ${active === "installation" ? "border-b-2 border-[#3569c8]" : ""}`}
            >
              <MdInstallDesktop />
              <span>Installation</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button
          onClick={() => window.open("https://github.com/Zarif207", "_blank")}
          className="btn rounded-[4px] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] text-white px-4 py-2 flex items-center gap-2"
        >
          <FaGithub /> Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;