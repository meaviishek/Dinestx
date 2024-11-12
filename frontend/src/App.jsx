import { useState } from 'react'

import { Floating, Footer, Header} from './components'
import { Outlet } from 'react-router-dom'
function App() {
 

  return (
    <>
      <div className="h-screen w-screen overflow-y-scroll scrollbar-thin bg-gray-100">
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
