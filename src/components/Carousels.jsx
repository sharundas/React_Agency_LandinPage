import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import about from '../assets/about.jpg'

export default function Carousels() {
  
  return (
    <div className='flex items-center justify-center p-10'>
      <Carousel width={600} autoPlay  >
        <div className="">
        <img className='w-[200px]' src={about} alt="image" />
        </div>
        <div className="">
        <img className='w-[200px]' src={about} alt="image" />
        </div>
        <div className="">
        <img className='w-[200px]' src={about} alt="image" />
        </div>
        <div className="">
        <img className='w-[200px]' src={about} alt="image" />
        </div>
       
      </Carousel>
    </div>
  )
}
