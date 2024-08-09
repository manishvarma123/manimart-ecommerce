import React from 'react';
import kit_img1_1 from '../Images/kitchen-img1-1.jpg';
import kit_img1_2 from '../Images/kitchen-img1-2.jpg';
import kit_img2_1 from '../Images/kitchen-img2-1.jpg';
import kit_img3_1 from '../Images/kitchen-img3-1.jpg';
import kit_img3_2 from '../Images/kitchen-img3-2.jpg';
import kit_img4_1 from '../Images/kitchen-img4-1.jpg';
import Card from './Card';

export default function H_kitchen() {

    const arr = [
        {
            id: 1,
            img1: kit_img1_1,
            img2: kit_img1_2,
            desc: "0.9 Cubic Feet Capacity 900 Watts Kitchen Essentials for the Countertop Stainless Steel",
            before_price: "$599.00",
            current_price: "$559.00",
            sale: true,
        },
        {
            id: 2,
            img1: kit_img2_1,
            img2: kit_img1_2,
            desc: "Microwave Oven with Smart Sensor Easy Clean Interior ECO Mode 1.2 Cu Ft Stainless Steel",
            before_price: "$529.00",
            current_price: "$509.00",
            sale: true,
        },
        {
            id: 3,
            img1: kit_img3_1,
            img2: kit_img3_2,
            desc: "Double Door Mini Fridge with Freezer for Office or Dorm with Adjustable Remove Glass Shelves",
            before_price: "",
            current_price: "$479.00",
            sale: false,
        },
        {
            id: 4,
            img1: kit_img4_1,
            img2: kit_img3_2,
            desc: "36″ Side-by-Side Refrigerator and Freezer with 25 Cubic Ft. Total Capacity, Black",
            before_price: "$799.00",
            current_price: "$749.00",
            sale: true,
        }
    ]

    const kitchen = arr.map(
        (obj) => {
            return (
                <Card img1={obj.img1} img2={obj.img2} desc={obj.desc} b_price={obj.before_price} c_price={obj.current_price} sale={obj.sale} />
            )
        }
    )

    return (
        <div className="mb-10 md:mb-16 border-[1px] border-gray-300 p-4 bg-white shadow-md">
            <div className="flex items-baseline mb-10">
                <h1 className='font-bold text-[24px] mr-4'>Kitchen appliances</h1>
                <a href="" className='font-bold text-[#0274be]'>See more</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-4">
                {kitchen}
            </div>
        </div>
    )
}
