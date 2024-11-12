import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import {Home,Services, DiUI, Works} from "./components/index.js"


const router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/DiUI' element={<DiUI/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/works'  element={<Works/>}/>

      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
