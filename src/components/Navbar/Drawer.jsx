import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NavLink } from 'react-router-dom';


export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden">

      <Button onClick={() => setOpen(true)}>
        <MenuRoundedIcon fontSize='large' className="text-[#e5e5e5] hover:text-gray-400" />
      </Button>
      <Drawer anchor={"top"} open={open} onClose={() => setOpen(false)}>
        <div className="bg-[#14213d]">
          <ul className="flex flex-col justify-center items-center gap-10 p-7 my-auto cursor-pointer ">
            <NavLink to="/" className="text-lg font-medium text-[#e5e5e5] hover:text-[#fca311] md:block overflow-hidden">Home</NavLink>
            <NavLink to="/dashboard" className="text-lg font-medium text-[#e5e5e5] hover:text-[#fca311] md:block overflow-hidden">Dashboard</NavLink>
            <NavLink to="/news" className="text-lg font-medium text-[#e5e5e5] hover:text-[#fca311] md:block overflow-hidden">News</NavLink>
            <NavLink to="/compare" className="text-lg font-medium text-[#e5e5e5] hover:text-[#fca311] md:block overflow-hidden">Compare</NavLink>
            <NavLink to="/about" className="text-lg font-medium text-[#e5e5e5] hover:text-[#fca311] md:block overflow-auto">About</NavLink>
          </ul>
        </div>
      </Drawer>

    </div>
  );
}