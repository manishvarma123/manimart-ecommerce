import React from 'react';
import laptop_img1_1 from '../Images/laptop-img1-1.jpg';
import laptop_img1_2 from '../Images/laptop-img1-2.jpg';
import laptop_img2_1 from '../Images/laptop-img2-1.jpg';
import laptop_img3_1 from '../Images/laptop-img3-1.jpg';
import laptop_img4_1 from '../Images/laptop-img4-1.jpg';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';

export default function Laptop() {

    const arr = [
        {
            id: 1,
            img1: laptop_img1_1,
            img2: laptop_img1_2,
            desc: "14″ FHD Ultrabook (400 nits) with 10th Gen Intel i7-10510U Processor up to 4.90 GHz, 1 TB PCIe SSD, 16GB RAM, and Windows 11 Pro",
            before_price: "",
            current_price: "$1099.00",
            sale: false,
        },
        {
            id: 2,
            img1: laptop_img2_1,
            img2: laptop_img1_2,
            desc: "15.6″ Rugged Ultrabook – 4K UHD – 3840 x 2160 – Intel Core i7 11th Gen i7-1195G7 2.90 GHz – 32 GB RAM – 1 TB SSD – Carbon Gray",
            before_price: "",
            current_price: "$799.00",
            sale: false,
        },
        {
            id: 3,
            img1: laptop_img3_1,
            img2: laptop_img1_2,
            desc: "13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",
            before_price: "$1499.00",
            current_price: "$1399.00",
            sale: true,
        },
        {
            id: 4,
            img1: laptop_img4_1,
            img2: laptop_img1_2,
            desc: "15.6″ FHD Display Laptop – Intel i7 – Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey",
            before_price: "$1029.00",
            current_price: "$999.00",
            sale: true,
        }
    ]

    const laptop = arr.map(
        (obj) => {
            return (
                <Card img1={obj.img1} img2={obj.img2} desc={obj.desc} b_price={obj.before_price} c_price={obj.current_price} sale={obj.sale} />
            )
        }
    )

    return (
        <>
            <div className='w-screen bg-white border-b-2 border-gray-300'>
                <div className="max-w-[1240px] m-auto ">
                    <div className="h-full lg:flex flex-row-reverse ">
                        <div className="overflow-y-scroll no-scrollbar basis-3/4 px-6  lg:px-16 py-16 lg:py-24">
                            <h1 className='text-[34px] lg:text-[70px] text-[#0671e3] font-bold mb-10 lg:mb-16'>PCs & laptop</h1>
                            <p className='text-[16px] lg:text-[17px] text-gray-600 leading-7 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis velit, iaculis vel risus non, convallis rhoncus ligula. Vestibulum ut lorem posuere, malesuada neque et, placerat quam. In hac habitasse platea dictumst. Sed bibendum porttitor sem, at sollicitudin orci placerat nec.</p>
                            <div className="flex justify-between items-center mb-10">
                                <p>Showing all {arr.length} results</p>
                                <select name="" id="">
                                    <option value="">Default sorting</option>
                                    <option value="">Sort by popularity</option>
                                    <option value="">Sort by average rating</option>
                                    <option value="">Sort by latest</option>
                                    <option value="">Sort by price:low to high</option>
                                    <option value="">Sort by price:high to low</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                                {laptop}
                            </div>
                        </div>
                        <div className="basis-1/4 px-4 py-4 lg:border-r-2 border-gray-300">
                            <Category />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
