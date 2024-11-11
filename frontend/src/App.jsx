import { useState } from 'react'

import { Floating, Footer, Header} from './components'
import ScrollTop from './components/ScrollTop'
import { Outlet } from 'react-router-dom'
function App() {
 

  return (
    <>
   
      <div id="scrollable-container" className="h-screen w-screen overflow-y-auto  scrollbar-thin  bg-gray-100">
      <ScrollTop />
         <Header/>
      
         <main>
 <Outlet/>
       
         </main>
         <Floating/>
         <Footer/>
         </div>
    </>
  )
}

export default App
