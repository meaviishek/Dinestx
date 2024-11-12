import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import {Home,Joinus,Services, Works} from "./components/index.js"
import { GoogleOAuthProvider } from '@react-oauth/google';

const router=createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='works'  element={<Works/>}/>
      <Route path='joinus' element={<Joinus/>}/>
      </Route>
    </>
  )
)
// const clientId=import.meta.env.GOOGLE_CLIENT_ID
createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='753089874776-2l6fh7dn97p4ocp2f31cn06pkk5qq61q.apps.googleusercontent.com'>
  <StrictMode>
 
    <RouterProvider router={router}/>
  </StrictMode>
  </GoogleOAuthProvider>
)
