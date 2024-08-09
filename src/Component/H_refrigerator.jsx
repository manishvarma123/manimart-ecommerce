import React from 'react';
import refri_img1_1 from '../Images/refri-img1-1.jpg';
import refri_img1_2 from '../Images/refri-img1-2.jpg';
import refri_img2_1 from '../Images/refri-img2-1.jpg';
import refri_img3_1 from '../Images/refri-img3-1.jpg';
import refri_img3_2 from '../Images/refri-img3-2.jpg';
import refri_img4_1 from '../Images/refri-img4-1.jpg';
import Card from './Card';

export default function H_refrigerator() {

    const arr = [
        {
            id: 1,
            img1: refri_img1_1,
            img2: refri_img1_2,
            desc: "Double Door Mini Fridge with Freezer for Office or Dorm with Adjustable Remove Glass Shelves",
            before_price: "",
            current_price: "$479.00",
            sale: false,
        },
        {
            id: 2,
            img1: refri_img2_1,
            img2: refri_img1_2,
            desc: "36″ Side-by-Side Refrigerator and Freezer with 25 Cubic Ft. Total Capacity, Black",
            before_price: "$799.00",
            current_price: "$749.00",
            sale: true,
        },
        {
            id: 3,
            img1: refri_img3_1,
            img2: refri_img3_2,
            desc: "Mini Fridge with Freezer for Bedroom Office or Dorm with Adjustable Remove Glass Shelves Compact Refrigerator",
            before_price: "$499.00",
            current_price: "$449.00",
            sale: true,
        },
        {
            id: 4,
            img1: refri_img4_1,
            img2: refri_img1_2,
            desc: "2 Door Apartment Size Refrigerator with Freezer, 7.2 cu ft, Platinum Series, Stainless Steel",
            before_price: "$899.00",
            current_price: "$849.00",
            sale: true,
        }
    ]

    const refrigerator = arr.map(
        (obj) => {
            return (
                <Card img1={obj.img1} img2={obj.img2} desc={obj.desc} b_price={obj.before_price} c_price={obj.current_price} sale={obj.sale} />
            )
        }
    )

    return (
        <div className="mb-10 md:mb-16 border-[1px] border-gray-300 p-4 bg-white shadow-md">
            <div className="flex items-baseline mb-10">
                <h1 className='font-bold text-[24px] mr-4'>Refrigerator</h1>
                <a href="" className='font-bold text-[#0274be]'>See more</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-4">
                {refrigerator}
            </div>
        </div>
    )
}
