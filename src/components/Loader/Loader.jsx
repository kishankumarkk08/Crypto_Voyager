import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <div className="w-full h-[100%] flex justify-center items-center z-50">
      <CircularProgress />
    </div>
  )
}

export default Loader