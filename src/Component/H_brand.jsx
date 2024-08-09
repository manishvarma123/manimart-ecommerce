import React from 'react';
import brand from '../Images/home_brand.jpg';

export default function H_brand() {
  return (
    <div className='bg-white'>
        <div className="md:grid grid-cols-2 gap-4">
            <div className="p-10">
                <h2 className='text-gray-500 text-[16px] font-bold  mb-[26px]'>BRAND’S DEAL</h2>
                <h1 className='text-[24px] lg:text-[34px] font-bold mb-[20px]'>Save up to $200 on select Samsung washing machine</h1>
                <p className='font-semibold mb-[20px]'>Tortor purus et quis aenean tempus tellus fames.</p>
                <a href="" className='font-bold text-[#0274be] mb-[25px]'>Shop now</a>
            </div>
            <div className="overflow-hidden">
                <img className='w-full' src={brand} alt="" />
            </div>
        </div>
    </div>
  )
}
