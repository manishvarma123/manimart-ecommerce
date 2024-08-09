import React from 'react';
import banner from '../Images/banner-image.jpg';

export default function Banner() {
  return (
    <div className='w-screen  h-[50vh] md:h-[70vh] bg-cover bg-center' style={{backgroundImage:`url(${banner})`}}>

    </div>
  )
}
