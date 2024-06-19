import React from 'react'
import NorthIcon from '@mui/icons-material/North';

const ScrollToTop = () => {

  const goTop = () => {
    window.scrollTo({ top: 1, left: 1, behavior: 'smooth' });
    console.log("clicked")
  }

  return (
    <div id="myBtn" className="flex justify-center items-center rounded-full fixed bottom-8 right-3 z-30 border-2 text-xs sm:text-2xl p-1 sm:p-2 text-[#fca311] border-[#fca311] hover:bg-[#fca311] hover:text-[#e5e5e5] cursor-pointer hover:transition-all hover:duration-[0.3s] sm:w-10 sm:h-10" onClick={goTop}>
      <NorthIcon />
    </div>
  )
}

export default ScrollToTop