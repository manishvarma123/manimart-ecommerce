import React from 'react';
import air_img1_1 from '../Images/air-img1-1.jpg';
import air_img1_2 from '../Images/air-img1-2.jpg';
import air_img2_1 from '../Images/air-img2-1.jpg';
import air_img3_1 from '../Images/air-img3-1.jpg';
import air_img4_1 from '../Images/air-img4-1.jpg';
import Card from './Card';

export default function H_air() {

    const arr = [
        {
            id: 1,
            img1: air_img1_1,
            img2: air_img1_2,
            desc: "Air Conditioner 5000 BTU, Efficient Cooling for Smaller Areas Like Bedrooms and Guest Rooms",
            before_price: "$159",
            current_price: "$139.00",
            sale: true,
        },
        {
            id: 2,
            img1: air_img2_1,
            img2: air_img1_2,
            desc: "Dual Hose Portable Air Conditioner, Dehumidifier, Fan with Activated Carbon Filter in Platinum",
            before_price: "",
            current_price: "$149.00",
            sale: false,
        },
        {
            id: 3,
            img1: air_img3_1,
            img2: air_img1_2,
            desc: "Star 9,500 BTU 115V Dual Inverter Window Air Conditioner with Wi-Fi Control",
            before_price: "",
            current_price: "$199.00",
            sale: false,
        },
        {
            id: 4,
            img1: air_img4_1,
            img2: air_img1_2,
            desc: "BTU 115V Window-Mounted Air Conditioner with Remote Control White",
            before_price: "",
            current_price: "$179.00",
            sale: false,
        }
    ]

    const air = arr.map(
        (obj) => {
            return (
                <Card img1={obj.img1} img2={obj.img2} desc={obj.desc} b_price={obj.before_price} c_price={obj.current_price} sale={obj.sale} />
            )
        }
    )

    return (
        <div className="mb-10 md:mb-16 border-[1px] border-gray-300 p-4 bg-white shadow-md">
            <div className="flex items-baseline mb-10">
                <h1 className='font-bold text-[24px] mr-4'>Air Conditioner</h1>
                <a href="" className='font-bold text-[#0274be]'>See more</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-4">
                {air}
            </div>
        </div>
    )
}
