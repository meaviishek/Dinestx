import React from 'react'
import { useState } from 'react';

function Joinus() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div> <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div className="container max-w-screen-lg mx-auto">
      <div>
        <h2 className="font-semibold text-xl text-gray-600 text-center">Join Our Team</h2>
        <p className="text-gray-500 mb-6 text-center">Please fill out the form below to apply. Ensure all fields are filled correctly.</p>
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Personal Details</p>
              <p>All fields are required. Please provide accurate information.</p>
              <div>

              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                {/* Full Name */}
                <div className="md:col-span-5">
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
  
                {/* Email */}
                <div className="md:col-span-5">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="email@domain.com"
                  />
                </div>
  
                {/* Phone Number */}
                <div className="md:col-span-5">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    pattern="[0-9]{10}"
                    placeholder="1234567890"
                  />
                </div>
  
                {/* Profession Dropdown */}
                <div className="md:col-span-3">
                  <label htmlFor="profession">Profession</label>
                  <select
                    id="profession"
                    name="profession"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="">Select your profession</option>
                    <option value="student">Student</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
  
                {/* Role Dropdown */}
                <div className="md:col-span-2">
                  <label htmlFor="role">Role</label>
                  <select
                    id="role"
                    name="role"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="">Select a role</option>
                    <option value="web_dev">Web Developer</option>
                    <option value="app_dev">App Developer</option>
                    <option value="ui_ux">UI/UX Designer</option>
                    <option value="graphic_designer">Graphic Designer</option>
                    <option value="social_media">Social Media Manager</option>
                  </select>
                </div>
  
    
  
                {/* Portfolio & GitHub Links */}
                <div className="md:col-span-3">
                  <label htmlFor="portfolio">Portfolio Website Link</label>
                  <input
                    type="url"
                    name="portfolio"
                    id="portfolio"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="github">GitHub Link</label>
                  <input
                    type="url"
                    name="github"
                    id="github"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="https://github.com/username"
                  />
                </div>
  
                {/* Submit Button */}
                <div className="md:col-span-5 text-right">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </div>
 
  )
}

export default Joinus