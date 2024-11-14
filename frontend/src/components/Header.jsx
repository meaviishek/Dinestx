import {useEffect} from 'react'
import { googleLogin } from '../services/userServices';
import { Logo } from '.';
import { GoogleLogin,googleLogout  } from '@react-oauth/google';

import { NavLink,Link } from 'react-router-dom';

import { useState } from 'react';
import Reveal from './Reveal';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleGoogleLogin = async (response) => {
    try {
      const res = await googleLogin(response.credential);
      setUser(res);
      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(res));
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem('user');
  };

  // Load user data from local storage on page load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (

    <div>
    {/* <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    <div
      aria-hidden="true"
      className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
    >
      <div
        style={{
          clipPath:
            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
        }}
        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
      />
    </div>
    <div
      aria-hidden="true"
      className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
    >
      <div
        style={{
          clipPath:
            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
        }}
        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
      />
    </div>
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className="text-sm/6 text-gray-900">
        <strong className="font-semibold">GeneriCon 2023</strong>
        <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
          <circle r={1} cx={1} cy={1} />
        </svg>
        Join us in Denver from June 7 – 9 to see what’s coming next.
      </p>
      <a
        href="#"
        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
        Register now <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
    <div className="flex flex-1 justify-end">
      <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
        <span className="sr-only">Dismiss</span>
        <IoCloseOutline aria-hidden="true" className="h-5 w-5 text-gray-900" />
      </button>
    </div>
  </div> */}

  <header
    className="fixed inset-x-0 bottom-0 md:top-4 lg:top-4 z-40 mx-auto w-full bg-white/20 py-3 shadow backdrop-blur-md md:rounded-3xl lg:max-w-screen-lg md:bottom-auto">
    <div className="px-4">
        <div className="flex items-center justify-between">
     
            <div className="flex shrink-0">
                <a aria-current="page" className="flex items-center" href="/">
                    <img className="h-10 w-auto object-fit: cover" src={Logo} alt=""/>
                    <p className="sr-only">Website Title</p>
                </a>
            </div>
         
            <nav className="flex md:items-center md:justify-center md:gap-5 font-sans">
                <NavLink to='/' aria-current="page"
                    className={({isActive} )=>`relative mx-2 text-gray-800 font-semibold hover:after:block transition-all duration-300 ${isActive ? 'after:flex after:translate-y-0' : 'after:hidden after:translate-y-2'} 
    after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 
    after:w-3 after:h-[5px] after:top-8 after:bg-blue-700 after:transition-transform 
    after:duration-500 after:rounded-t-full` }
                    href="#">
                    {/* <GoHomeFill  size='25px' className='mx-1'/> */}
                    Home
                    </NavLink>
                <NavLink to="/services" className={({isActive} )=>`relative mx-2 text-gray-800 font-semibold hover:after:block transition-all duration-300 ${isActive ? 'after:flex after:translate-y-0' : 'after:hidden after:translate-y-2'} 
    after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 
    after:w-3 after:h-[5px] after:top-8 after:bg-blue-700 after:transition-transform 
    after:duration-500 after:rounded-t-full` }
                    href="#">
                    {/* <MdMiscellaneousServices size='25px'  className='' /> */}
                    Services
                    </NavLink>
                   
                      <NavLink to="/works" className={({isActive} )=>`relative mx-2 text-gray-800 font-semibold hover:after:block transition-all duration-300 ${isActive ? 'after:flex after:translate-y-0' : 'after:hidden after:translate-y-2'} 
    after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 
    after:w-3 after:h-[5px] after:top-8 after:bg-blue-700 after:transition-transform 
    after:duration-500 after:rounded-t-full` }
                    href="#">
                    {/* <GoProjectSymlink size='25px' /> */}
                    Works
                    </NavLink>
            </nav>
            <div className="relative inline-block text-2xl items-center justify-end gap-3">
            {user ? (
        <div>
          <img
            src={user.picture}
            alt="User Profile"
            onClick={toggleDropdown}
            className="w-10 h-10 rounded-full cursor-pointer"
          />

          {isOpen && (
            <div className={`absolute z-10 w-36 p-1 bg-white/70 rounded-lg shadow  transition-all lg:-left-16 right-0   lg:-bottom-16 bottom-14 -translate-y-0 lg:translate-y-4 animate-dropdown duration-300 transform ease-out opacity-100 `}>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )  : (
        <div>
        <button
    onClick={toggleDropdown}
    id="dropdownOffsetButton"
    data-dropdown-toggle="dropdownDistance"
    data-dropdown-offset-distance="35"
    data-dropdown-offset-skidding="0"
    className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
  >
    Login
  </button>
     
  {isOpen && (
    <div
      className={`absolute z-10 w-48 bg-white/70 rounded-lg shadow lg:mt-4 transition-all lg:-left-16 right-0   lg:-bottom-20 bottom-14 -translate-y-0 lg:translate-y-4 animate-dropdown duration-300 transform ease-out opacity-100 `}
      onClick={() => setIsOpen(false)}
    >
      
          <button
            onClick={handleGoogleLogin}
            className="flex items-center p-2 w-full rounded  transition duration-200"
          >
           <GoogleLogin onSuccess={handleGoogleLogin}  />
          </button>
   
    </div>
  )}
  </div>
     )}


</div>



        </div>
    </div>
</header>
   
 
  
  
  </div>
  
  )
}

export default Header