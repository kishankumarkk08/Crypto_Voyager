import './App.css'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
      </Route>
    )
  )

  return (
    <>
      <div className="bg-black h-screen w-full">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
