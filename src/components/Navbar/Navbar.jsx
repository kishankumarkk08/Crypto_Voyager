import React, { useState } from 'react'
import AnchorTemporaryDrawer from './Drawer'

const navbar = () => {

  return (
    <div className="w-full flex justify-between items-center bg-[#000000]">
      <img className="p-2 h-28 md:h-32 cursor-pointer" src="newLogo.png" alt="CryptoVoyager Logo" />
      <div>
        <ul className="flex justify-end items-center lg:gap-10 sm:gap-7 p-6 mx-auto cursor-pointer ">
          <li className="text-lg font-medium text-[#e5e5e5] md:hover:text-[#fca311] hidden md:block hover:transition-all hover:duration-[0.2s]">Home</li>
          <li className="text-lg font-medium text-[#e5e5e5] md:hover:text-[#fca311] hidden md:block hover:transition-all hover:duration-[0.2s]">Trade</li>
          <li className="text-lg font-medium text-[#e5e5e5] md:hover:text-[#fca311] hidden md:block hover:transition-all hover:duration-[0.2s]">News</li>
          <li className="text-lg font-medium text-[#e5e5e5] md:hover:text-[#fca311] hidden md:block hover:transition-all hover:duration-[0.2s]">Compare</li>
          <li className="text-lg font-medium text-[#e5e5e5] md:hover:text-[#fca311] hidden md:block hover:transition-all hover:duration-[0.2s]">About</li>
        </ul>
      </div>
      <button className="border-2 md:p-3 md:px-4 rounded-full md:m-10 border-solid border-[#fca311] text-[#e5e5e5] font-extrabold md:block p-2 hover:bg-[#fca311] hover:text-[#14213d] hover:transition-all hover:duration-[0.3s]"><span className="text-xs md:text-sm p-2">Login</span></button>


      {/* small screen menu */}
      <div className="md:hidden">
        <AnchorTemporaryDrawer />
      </div>


    </div>
  )
}

export default navbar