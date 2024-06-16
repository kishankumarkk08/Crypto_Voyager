import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import AnchorTemporaryDrawer from './Drawer'



const navbar = () => {

  return (
    <>

      <div className="w-full flex justify-between items-center bg-black sticky top-0 z-10">
        <img className="p-2 h-28 md:h-32 cursor-pointer" src="newLogo.png" alt="CryptoVoyager Logo" />
        <div>
          <ul className="flex justify-end items-center lg:gap-10 sm:gap-4 p-6 overflow-hidden mx-auto cursor-pointer">
            <li>
              <NavLink to="/" className={({ isActive }) => `text-lg font-medium text-[#e5e5e5] md:hover:text-[#fca311] hidden md:block hover:transition-all hover:duration-[0.2s] ${isActive ? "text-[#fca311]" : "text-[#e5e5e5]"} overflow-hidden`}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => `text-lg font-medium text-[#e5e5e5] md:hover:text-[#fca311] hidden md:block hover:transition-all hover:duration-[0.2s] ${isActive ? "text-[#fca311]" : "text-[#e5e5e5]"} overflow-hidden`}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/news" className={({ isActive }) => `text-lg font-medium text-[#e5e5e5] md:hover:text-[#fca311] hidden md:block hover:transition-all hover:duration-[0.2s] ${isActive ? "text-[#fca311]" : "text-[#e5e5e5]"} overflow-hidden`}>News</NavLink>
            </li>
            <li>
              <NavLink to="/compare" className={({ isActive }) => `text-lg font-medium text-[#e5e5e5] md:hover:text-[#fca311] hidden md:block hover:transition-all hover:duration-[0.2s] ${isActive ? "text-[#fca311]" : "text-[#e5e5e5]"} overflow-hidden`}>Compare</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `text-lg font-medium text-[#e5e5e5] md:hover:text-[#fca311] hidden md:block hover:transition-all hover:duration-[0.2s] ${isActive ? "text-[#fca311]" : "text-[#e5e5e5]"} overflow-hidden`}>About</NavLink>
            </li>
          </ul>
        </div>
        <button className="border-2 md:p-3 md:px-4 rounded-full md:m-10 border-solid border-[#fca311] text-[#e5e5e5] font-extrabold md:block p-2 hover:bg-[#fca311] hover:text-[#14213d] hover:transition-all hover:duration-[0.3s] overflow-hidden"><span className="text-xs md:text-sm p-2">Login</span></button>


        {/* small screen menu */}
        <div className="md:hidden">
          <AnchorTemporaryDrawer />
        </div>


      </div>

    </>
  )
}

export default navbar