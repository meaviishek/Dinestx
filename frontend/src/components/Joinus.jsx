import React from 'react'
import { useState } from 'react';
import { submitApply } from '../services/userServices';
function Joinus() {
  const [isOpen, setIsOpen] = useState(false);
  const [loding,setloding]=useState(false);
  const [errormsg,setErrormsg]=useState('')
  const [isSubmitted,setIsSubmitted]=useState(false);



  const [formData,setformData]=useState({
    name:'',
    email:'',
    phoneNumber:'',
    profession:'',
    role:'',
    portfolioLink:'',
    githubLink:''
  })

  const handlechange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrormsg('')
    setloding(true);

    try{
          if(formData.phoneNumber.length !== 10){
            setErrormsg('Phone number must be exactly 10 digits long.')
            return;
          }
         const response= await submitApply(formData);

         console.log(response)
         if(response){
            setIsSubmitted(true)
            setformData({name:'',email:'',phoneNumber:'',profession:'',role:'',portfolioLink:'',githubLink:'' })
         }

    }catch(error){
            setErrormsg('Something went Wrong. Please try again later.')
    }finally{
      setloding(false)
    }
    

  }

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div> 
    
  
    
    
    
    
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div className="container max-w-screen-lg mx-auto">
      <div>
        <h2 className="font-semibold text-xl text-gray-600 text-center">Join Our Team</h2>
        <p className="text-gray-500 mb-6 text-center">Please fill out the form below to apply. Ensure all fields are filled correctly.</p>
        {errormsg && <p className="text-red-500 mb-4">{errormsg}</p>}
        <div className="bg-white  shadow-lg p-4 px-4 md:p-8 mb-6 rounded-2xl">
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
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id='name'
                    value={formData.name}
                    onChange={handlechange}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    required
                    placeholder='Enter Your Full Name'

                  />
                </div>
  
                {/* Email */}
                <div className="md:col-span-5">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handlechange}

                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="email@domain.com"
                    required
                  />
                </div>
  
                {/* Phone Number */}
                <div className="md:col-span-5">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handlechange}
      
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    pattern="[0-9]{10}"
                    placeholder="Enter your Phone Number"
                    required
                    minLength={10}
                    maxLength={10}
                  />
                </div>
  
                {/* Profession Dropdown */}
                <div className="md:col-span-3">
                  <label htmlFor="profession">Profession</label>
                  <select
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handlechange}
                    required
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="" disabled>Select your profession</option>
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
                    value={formData.role}
                    onChange={handlechange}
                    required
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="" disabled>Select a role</option>
                    <option value="web_dev">Web Developer</option>
                    <option value="app_dev">App Developer</option>
                    <option value="ui_ux">UI/UX Designer</option>
                    <option value="graphic_designer">Graphic Designer</option>
                    <option value="social_media">Social Media Manager</option>
                  </select>
                </div>
  
    
  
                {/* Portfolio & GitHub Links */}
                <div className="md:col-span-3">
                  <label htmlFor="portfolioLink">Portfolio Website Link</label>
                  <input
                    type="url"
                    name="portfolioLink"
                    id="portfolioLink"
                    value={formData.portfolioLink}
                    onChange={handlechange}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="githubLink">GitHub Link</label>
                  <input
                    type="url"
                    name="githubLink"
                    value={formData.githubLink}
                    onChange={handlechange}
                    id="githubLink"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="https://github.com/username"
                  />
                </div>
  
                {/* Submit Button */}
                <div className="md:col-span-5 text-right">
                  <button disabled={loding} onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {loding ? 'Submitting':'Submit'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-green-600">Application Submitted!</h2>
            <p className="mt-4">Thank you for applying. We will review your application and get back to you soon.</p>
            <button
              onClick={closeModal}
              className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
  </div>
 
  )
}

export default Joinus