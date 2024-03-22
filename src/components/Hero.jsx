import React from "react";
import heroImage from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    // <div className=' relative  bg-cover bg-center  h-96 w-screen'  style={{ backgroundImage: `url(${heroImage})` }}>
    //   <div className="absolute translate-x-52 translate-y-52		">
    //  <h1 className='text-gray-900 text-lg font-semibold'>Welcome to Zenn</h1>
    //  <p className="text-gray-900 text-lg font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, voluptas?</p>
    //  <button>Get Started</button>
    //  </div>
    // </div>

    <div
      className="relative bg-cover bg-cente h-[700px] lg:h-[450px] w-screen "
      style={{ backgroundImage: `url(${heroImage})`}}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      <div className="absolute inset-40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-gray-50 text-5xl font-bold mb-3">
            Welcome to <span className="underline decoration-blue-400	decoration-4 "> Ze<span className="text-cyan-500">N</span>N</span> 
          </h1>
          <p className="text-slate-200 text-lg font-semibold mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            voluptas?
          </p>
          <button className="bg-blue-400 text-white font-normal px-8 py-2 rounded hover:opacity-90 uppercase ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
