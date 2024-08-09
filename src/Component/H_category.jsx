import React from 'react';
import air from '../Images/category-air-conditioner.jpg';
import audio from '../Images/category-audio.jpg';
import gadgets from '../Images/category-gadgets.jpg';
import home from '../Images/category-home.jpg';
import kitchen from '../Images/category-kitchen.jpg';
import laptop from '../Images/category-laptop.jpg';
import refrigerator from '../Images/category-refrigerator.jpg';
import smart from '../Images/category-smart.jpg';

export default function H_category() {
    return (
        <div>
            <div className=" mb-10 md:mb-16 border-[1px] border-gray-300">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white">
                    <div className="relative mb-8">
                        <a href="" >
                            <img src={air} className='' alt="" />
                            <div className="absolute bottom-0 left-0 right-0 sm:pb-2 md:pb-4 text-center">
                                <h1 className='font-bold text-[14px] md:text-[16px]'>AIR CONDITIONER</h1>
                                <p className='text-gray-400 text-[12px] font-bold'>4 PRODUCTS</p>
                            </div>
                        </a>
                    </div>
                    <div className="relative mb-8">
                        <a href="" >
                            <img src={audio} className='' alt="" />
                            <div className="absolute bottom-0 left-0 right-0 sm:pb-2 md:pb-4 text-center">
                                <h1 className='font-bold text-[14px] md:text-[16px]'>AUDIO & VIDEO</h1>
                                <p className='text-gray-400 text-[12px] font-bold'>5 PRODUCTS</p>
                            </div>
                        </a>
                    </div>
                    <div className="relative mb-8">
                        <a href="" >
                            <img src={gadgets} className='' alt="" />
                            <div className="absolute bottom-0 left-0 right-0 sm:pb-2 md:pb-4 text-center">
                                <h1 className='font-bold text-[14px] md:text-[16px]'>GADGETS</h1>
                                <p className='text-gray-400 text-[12px] font-bold'>6 PRODUCTS</p>
                            </div>
                        </a>
                    </div>
                    <div className="relative mb-8">
                        <a href="" >
                            <img src={home} className='' alt="" />
                            <div className="absolute bottom-0 left-0 right-0 sm:pb-2 md:pb-4 text-center">
                                <h1 className='font-bold text-[14px] md:text-[16px]'>HOME APPLIANCES</h1>
                                <p className='text-gray-400 text-[12px] font-bold'>5 PRODUCTS</p>
                            </div>
                        </a>
                    </div>
                    <div className="relative mb-8">
                        <a href="" >
                            <img src={kitchen} className='' alt="" />
                            <div className="absolute bottom-0 left-0 right-0 sm:pb-2 md:pb-4 text-center">
                                <h1 className='font-bold text-[14px] md:text-[16px]'>KITCHEN APPLIANCES</h1>
                                <p className='text-gray-400 text-[12px] font-bold'>6 PRODUCTS</p>
                            </div>
                        </a>
                    </div>
                    <div className="relative mb-8">
                        <a href="" >
                            <img src={laptop} className='' alt="" />
                            <div className="absolute bottom-0 left-0 right-0 sm:pb-2 md:pb-4 text-center">
                                <h1 className='font-bold text-[14px] md:text-[16px]'>PCS & LAPTOP</h1>
                                <p className='text-gray-400 text-[12px] font-bold'>4 PRODUCTS</p>
                            </div>
                        </a>
                    </div>
                    <div className="relative mb-8">
                        <a href="" >
                            <img src={refrigerator} className='' alt="" />
                            <div className="absolute bottom-0 left-0 right-0 sm:pb-2 md:pb-4 text-center">
                                <h1 className='font-bold text-[14px] md:text-[16px]'>REFRIGERATOR</h1>
                                <p className='text-gray-400 text-[12px] font-bold'>4 PRODUCTS</p>
                            </div>
                        </a>
                    </div>
                    <div className="relative mb-8">
                        <a href="" >
                            <img src={smart} className='' alt="" />
                            <div className="absolute bottom-0 left-0 right-0 sm:pb-2 md:pb-4 text-center">
                                <h1 className='font-bold text-[14px] md:text-[16px]'>SMART HOME</h1>
                                <p className='text-gray-400 text-[12px] font-bold'>5 PRODUCTS</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
