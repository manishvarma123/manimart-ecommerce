import React from 'react';
import t_img1 from '../Images/today-img1.jpg';
import t_img2_1 from '../Images/today-img2-1.jpg';
import t_img2_2 from '../Images/today-img2-2.jpg';
import t_img3_1 from '../Images/today-img3-1.jpg';
import t_img4_1 from '../Images/today-img4-1.jpg';
import t_img4_2 from '../Images/today-img4-2.jpg';
import t_img5_1 from '../Images/today-img5-1.jpg';
import t_img6_1 from '../Images/today-img6-1.jpg';
import t_img7_1 from '../Images/today-img7-1.jpg';
import t_img7_2 from '../Images/today-img7-2.jpg';
import t_img8_1 from '../Images/today-img8-1.jpg';

import Card from './Card';

export default function H_deal() {

    const arr = [
        {
            id: 1,
            img1: t_img1,
            img2: t_img1,
            desc: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
            before_price: "$49.00",
            current_price: "$44.00",
            sale:true,
        },
        {
            id: 2,
            img1: t_img2_1,
            img2: t_img2_2,
            desc: "Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",
            before_price: "$249.00",
            current_price: "$219.00",
            sale:true,
        },
        {
            id: 3,
            img1: t_img3_1,
            img2: t_img2_2,
            desc: "Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White",
            before_price: "$229.00",
            current_price: "$209.00",
            sale:true,
        },
        {
            id: 4,
            img1: t_img4_1,
            img2: t_img4_2,
            desc: "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
            before_price: "$699.00",
            current_price: "$659.00",
            sale:true,
        },
        {
            id: 5,
            img1: t_img5_1,
            img2: t_img4_2,
            desc: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
            before_price: "$1299.00",
            current_price: "$1199.00",
            sale:true,
        },
        {
            id: 6,
            img1: t_img6_1,
            img2: t_img4_2,
            desc: "5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey",
            before_price: "$1099.00",
            current_price: "$999.00",
            sale:true,
        },
        {
            id: 7,
            img1: t_img7_1,
            img2: t_img7_2,
            desc: "13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",
            before_price: "$1499.00",
            current_price: "$1399.00",
            sale:true,
        },
        {
            id: 8,
            img1: t_img8_1,
            img2: t_img7_2,
            desc: "15.6″ FHD Display Laptop – Intel i7 – Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey",
            before_price: "$1029.00",
            current_price: "$999.00",
            sale:true,
        },
    ]

    const deal = arr.map(
        (obj) => {
            return (
                <Card img1={obj.img1} img2={obj.img2} desc={obj.desc} b_price={obj.before_price} c_price={obj.current_price} />
            )
        }
    )

    return (
        <div className="mb-10 md:mb-16 border-[1px] border-gray-300 p-4 bg-white shadow-md">
            <div className="flex items-baseline mb-10">
                <h1 className='font-bold text-[24px] mr-4'>Today’s best deal</h1>
                <a href="" className='font-bold text-[#0274be]'>See more</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-4">
                {deal}
            </div>
        </div>
    )
}
