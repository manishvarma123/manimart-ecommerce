import React from 'react';
import t_img1 from '../Images/today-img1.jpg';
import t_img2_2 from '../Images/today-img2-2.jpg';

export default function Card({img1,img2,desc,b_price,c_price,sale}) {
    return (
        <div className="w-full group">
            <div className="w-full relative">
                <div className="">
                    <img src={img1} className='w-full' alt="" />
                </div>
                {/* <div className={(sale===yes?"block":"hidden")+"absolute top-0 left-0 right-0 bottom-0 hidden group-hover:block"}> */}
                <div className="absolute top-0 left-0 right-0 bottom-0 hidden group-hover:block">
                    <img src={img2} className='w-full' alt="" />
                </div>
                <span className={`absolute top-3 left-3 bg-white py-0.5 px-2.5 shadow-md rounded-3xl text-gray-700 ${(sale===true)?"inline-block":"hidden"}`}>Sale!</span>
                <span className='absolute top-3 right-3 text-gray-700 hidden group-hover:block'><i className="fa-solid fa-cart-shopping rounded-full bg-white p-2 shadow-md"></i></span>
            </div>
            <div className="py-3 px-2">
                <div className="text-yellow-500">
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <p className='font-bold text-[14px] md:text-[16px] line-clamp-4 md:line-clamp-3 mb-1'>{desc}</p>
                <p><span className='text-gray-400 text-[14px] md:text-[16px] line-through font-bold mr-1.5'>{b_price}</span><span className='font-bold text-[14px] md:text-[16px] text-gray-700'>{c_price}</span></p>
            </div>
        </div>
    )
}
