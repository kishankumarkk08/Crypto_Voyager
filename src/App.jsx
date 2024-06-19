import './App.css'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import News from './components/News/News'
import Compare from './components/Compare/Compare'
import Dashboard from './components/Dashboard/Dashboard'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='news' element={<News />} />
        <Route path='compare' element={<Compare />} />
        <Route path='about' element={<About />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
