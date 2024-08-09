import React from 'react';
import logo from '../Images/logo.svg';

export default function Footer() {
    return (
        <div className='w-screen'>
            <div className="w-full">
                <div className="max-w-[1200px] m-auto px-3 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="flex justify-start items-start">
                            <img src={logo} className='mr-2 mt-[6px]' alt="" />
                            <h1 className='text-[#0671e3] text-[24px] font-bold'>manimart</h1>
                        </div>
                        <div className="">
                            <h1 className='text-[24px] font-bold mb-6'>Shop</h1>
                            <ul className='text-[#0671e3]'>
                                <li><a href="">Hot deals</a></li>
                                <li><a href="">Categories</a></li>
                                <li><a href="">Brands</a></li>
                                <li><a href="">Rebates</a></li>
                                <li><a href="">Weekly deals</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h1 className='text-[24px] font-bold mb-6'>Need help?</h1>
                            <ul className='text-[#0671e3]'>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Order tracking</a></li>
                                <li><a href="">FAQs</a></li>
                                <li><a href="">Return policy</a></li>
                                <li><a href="">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <h1 className='text-[24px] font-bold mb-6'>Contact</h1>
                            <ul className='text-[#0671e3]'>
                                <li><a href="">123 Fifth Avenue, New York, NY<br /> 10160</a></li>
                                <li><a href="">contact@info.com</a></li>
                                <li><a href="">929-242-6868</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-black/90">
                <div className="max-w-[1200px] m-auto px-3 py-8 lg:py-16 text-center text-white">
                    <p className='text-[16px] md:text-[17px]'>© 2024 Electronic Store. Powered by Electronic Store</p>
                    <p>Designed by : <span className='text-[#0671e3]'>Manish Varma</span></p>
                </div>
            </div>
        </div>
    )
}

