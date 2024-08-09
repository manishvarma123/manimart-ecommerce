import React from 'react';
import laptop_img1_1 from '../Images/laptop-img1-1.jpg';
import laptop_img1_2 from '../Images/laptop-img1-2.jpg';
import laptop_img2_1 from '../Images/laptop-img2-1.jpg';
import laptop_img3_1 from '../Images/laptop-img3-1.jpg';
import laptop_img4_1 from '../Images/laptop-img4-1.jpg';
import Card from './Card';

export default function H_laptop() {

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
        <div className="mb-10 md:mb-16 border-[1px] border-gray-300 p-4 bg-white shadow-md">
            <div className="flex items-baseline mb-10">
                <h1 className='font-bold text-[24px] mr-4'>PCs & Laptop</h1>
                <a href="" className='font-bold text-[#0274be]'>See more</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-4">
                {laptop}
            </div>
        </div>
    )
}
