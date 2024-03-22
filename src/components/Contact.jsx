import React from 'react'
import Form from './Form'

export default function Contact() {
  return (
    <div className='w-full h-screen p-10 bg-tertiary flex flex-col justify-center items-center '>
      <h2 className="text-gray-900 font-bold text-3xl underline decoration-4 decoration-blue-400 p-2">Contact</h2>
      <p className="text-gray-600 text-lg p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ut.</p>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center items-center">
          <h3 className="text-gray-800 mr-5">Location:</h3>
          <h4 className="text-gray-700 text-base">A1808 Adam Street</h4>
          <h5 className="text-gray-700 text-base">New York, NY 535022</h5>
          </div>
         
        </div>
      </div>
      <Form />
    </div>
  )
}

// #F1F5F9