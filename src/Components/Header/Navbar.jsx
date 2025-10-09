import React from 'react';
import logoImage from "../../assets/logo.png"
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";





const Navbar = () => {
    return (
        <div>
                 <div className="navbar bg-base-100 shadow-sm px-[50px]">
  
              <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link to='/'><li>Home</li></Link>
        <Link to='/allApps'><li>Apps</li></Link>
        <li>Installation</li>
      </ul>
    </div>
        <img className='h-[40px] w-[40px]' src={logoImage}/>
    <a className="text-2xl text-[#3569c8] pl-2">Appoza</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10">
      <Link className='flex justify-center items-center gap-2' to='/'><IoHomeOutline /><li>Home</li></Link>
      <Link className='flex justify-center items-center gap-2' to='/allApps'><FaAppStore /><li>Apps</li></Link>
      <Link className='flex justify-center items-center gap-2' to='/installation'><MdInstallDesktop /><li>Installation</li></Link>
    </ul>
  </div>
  <div className="navbar-end">
    <button
  onClick={() => window.open("https://github.com/Zarif207", "_blank")}
  className="btn rounded-[4px] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] text-white px-4 py-2 flex items-center gap-2"
>
  <FaGithub />
  Contribute
</button>
  </div>
  

</div>
        </div>
    );
};

export default Navbar;