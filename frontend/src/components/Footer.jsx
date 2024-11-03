import React from 'react'
import { Logo } from '.'

function Footer() {
  const footerNavs = [
    {
        href: 'javascript:void()',
        name: 'About'
    },
    {
        href: 'javascript:void()',
        name: 'Blog'
    },
    {
        href: 'javascript:void()',
        name: ''
    },
    {
        href: 'javascript:void()',
        name: 'Team'
    },
    {
        href: 'javascript:void()',
        name: 'Careers'
    },

    {
        href: 'javascript:void()',
        name: 'Suuport'
    }
]
  return (
    <div className=' mt-0  overflow-hidden  '>
      <footer className="text-gray-400   max-w-screen mx-auto">
        {/* Discord Community */}
        <div className="w-3/4 rounded-3xl lg:px-4 my-4 mx-auto bg-gray-200">
          <div className='flex flex-col lg:flex-row justify-between items-center text-left p-8 gap-4'>
            <div className='flex flex-col text-left'>
              <h5 className="mb-2 text-xl lg:text-3xl font-bold text-gray-700">Join Our Team</h5>
              <p className="mb-0 text-base text-gray-400 sm:text-lg">You can join us as Developer, Designer or Social Media Management </p>
            </div>
            <div className="flex items-end">
              <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                </svg>
                <div className="text-left rtl:text-right">
                  <div className="mb-1 text-xs">Join Now</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">Discord</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className='w-full bg-gray-900 px-4 py-5'>
          <div className='max-w-screen-xl mx-auto'>
            {/* CopyRight */}
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0 flex flex-row items-center justify-center space-x-2">
                    &copy; 2024
                    <div>
                      <img src={Logo} className="h-7"/>
                    </div>
                    All rights reserved.
                </div>
            </div>
            {/* Bottm Text */}
            <div className=' text-center justify-center text-[100px]    md:text-[200]  lg:text-[350px] font-bold lg:-mb-[180px] flex opacity-25 '>
              <div className='font-museo select-none'>dinestx</div>
            </div>
          </div>
        </div>


      </footer>
    </div>
  )
}

export default Footer