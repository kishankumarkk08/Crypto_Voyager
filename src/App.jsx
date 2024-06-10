import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-full bg-[#000000]">
        <Navbar />
      </div>
    </>
  )
}

export default App
