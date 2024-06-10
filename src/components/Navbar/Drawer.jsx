import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import data from "./Nav.json"


export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false)
  return (
    <div>

      <Button onClick={() => setOpen(true)}>
        <MenuRoundedIcon fontSize='large' className="text-[#e5e5e5] hover:text-gray-400" />
      </Button>
      <Drawer anchor={"top"} open={open} onClose={() => setOpen(false)}>
        <div className="bg-[#14213d]">
          <ul className="flex flex-col justify-center items-center gap-10 p-7 my-auto cursor-pointer ">
            {data.map((data, index) => (
              <li className="text-lg font-medium text-[#e5e5e5] hover:text-[#fca311] md:block">{data.title}</li>
            ))}
          </ul>
        </div>
      </Drawer>

    </div>
  );
}