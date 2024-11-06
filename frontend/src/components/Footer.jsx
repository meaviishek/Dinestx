import React from 'react'
import { Logo } from '.'
import { BsPersonFillAdd } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {


  return (
    <div className='mt-0 overflow-hidden'>
      <footer className="text-gray-400 max-w-screen mx-auto">
        {/* Discord Community */}
        <div className="w-3/4 rounded-3xl lg:px-4 my-4 mx-auto bg-gray-200">
          <div className='flex flex-col lg:flex-row justify-between items-center text-left p-8 gap-8'>
            <div className='flex flex-col text-left'>
              <h5 className="mb-2 text-xl lg:text-3xl font-bold text-gray-700">Join Our Team</h5>
              <p className="mb-0 text-base text-gray-500 sm:text-lg">
                Join our team as a Developer, Designer, or Social Media Manager, and be part of our dynamic community dedicated to excellence and innovation.
              </p>
            </div>
            <div className="flex items-end ">
              <Link to='joinus' className="w-full  bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <BsPersonFillAdd className='w-6 h-6' />
                <div className="text-left  ml-2">
                  <div className="mb-1 text-lg">Apply</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='w-full bg-gray-900 px-4 py-5'>
          <div className='max-w-screen-xl mx-auto'>
            {/* Copyright and Links */}
            <div className="mt-8 items-center justify-between sm:flex">
              <div className="mt-4 sm:mt-0 flex flex-row items-center justify-center space-x-2">
                &copy; 2024 <span className='font-museo mx-2'>dinestx</span> All rights reserved.
              </div>

              {/* Developer Profile and Portfolio Links */}
              <div className="mt-4 sm:mt-0 text-center">
                <a href="https://developer-profile-link.com" target="_blank"  className="text-gray-400 hover:text-white mx-2">
                  Abhishek Kumar
                </a>
                <a href="https://portfolio-link.com" target="_blank"  className="text-gray-400 hover:text-white mx-2">
                Vishnu Prakash
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4 sm:mt-0 justify-center sm:justify-end">
                <a href="https://www.instagram.com" target="_blank" >
                  <LuInstagram className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" >
                  <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="https://wa.me/yourwhatsappnumber" target="_blank" >
                  <FaWhatsapp className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Bottom Text */}
            <div className='text-center justify-center text-[100px] md:text-[200px] lg:text-[350px] font-bold lg:-mb-[180px] flex opacity-25'>
              <div className='font-museo select-none'>dinestx</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
