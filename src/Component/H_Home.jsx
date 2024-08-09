import React from 'react';
import h_img1_1 from '../Images/home-img1-1.jpg';
import h_img2_1 from '../Images/home-img2-1.jpg';
import h_img2_2 from '../Images/home-img2-2.jpg';
import h_img3_1 from '../Images/home-img3-1.jpg';
import h_img4_1 from '../Images/home-img4-1.jpg';
import Card from './Card';

export default function H_Home() {

    const arr = [
        {
            id: 1,
            img1: h_img1_1,
            img2: h_img1_1,
            desc: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
            before_price: "$49.00",
            current_price: "$44.00",
            sale: true,
        },
        {
            id: 2,
            img1: h_img2_1,
            img2: h_img2_2,
            desc: "Compact Pulsator Washer for Clothes, .9 Cubic ft. Tub, White, BPAB10WH",
            before_price: "$319.00",
            current_price: "$259.00",
            sale: true,
        },
        {
            id: 3,
            img1: h_img3_1,
            img2: h_img2_2,
            desc: "Full-Automatic Compact Washer with Wheels, 1.6 cu. ft, 11 lbs capacity with 6 Wash Programs Washer",
            before_price: "$309.00",
            current_price: "$279.00",
            sale: true,
        },
        {
            id: 4,
            img1: h_img4_1,
            img2: h_img2_2,
            desc: "Small Space Heat Pump Dryer with Sensor Dry, 12 Preset Machine Cycles, 40 Minute Express Drying",
            before_price: "",
            current_price: "$349.00",
            sale: false,
        }
    ]

    const home = arr.map(
        (obj) => {
            return (
                <Card img1={obj.img1} img2={obj.img2} desc={obj.desc} b_price={obj.before_price} c_price={obj.current_price} sale={obj.sale} />
            )
        }
    )

    return (
        <div className="mb-10 md:mb-16 border-[1px] border-gray-300 p-4 bg-white shadow-md">
            <div className="flex items-baseline mb-10">
                <h1 className='font-bold text-[24px] mr-4'>Home appliances</h1>
                <a href="" className='font-bold text-[#0274be]'>See more</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-4">
                {home}
            </div>
        </div>
    )
}
