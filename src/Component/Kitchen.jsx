import React from 'react';
import kit_img1_1 from '../Images/kitchen-img1-1.jpg';
import kit_img1_2 from '../Images/kitchen-img1-2.jpg';
import kit_img2_1 from '../Images/kitchen-img2-1.jpg';
import kit_img3_1 from '../Images/kitchen-img3-1.jpg';
import kit_img3_2 from '../Images/kitchen-img3-2.jpg';
import kit_img4_1 from '../Images/kitchen-img4-1.jpg';
import kit_img5_1 from '../Images/kitchen-img5-1.jpg';
import kit_img6_1 from '../Images/kitchen-img6-1.jpg';
import kit_img6_2 from '../Images/kitchen-img6-2.jpg';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';

export default function Kitchen() {

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
        },
        {
            id: 5,
            img1: kit_img5_1,
            img2: kit_img3_2,
            desc: "2 Door Apartment Size Refrigerator with Freezer, 7.2 cu ft, Platinum Series, Stainless Steel",
            before_price: "$899.00",
            current_price: "$849.00",
            sale: true,
        },
        {
            id: 6,
            img1: kit_img6_1,
            img2: kit_img6_2,
            desc: "Mini Fridge with Freezer for Bedroom Office or Dorm with Adjustable Remove Glass Shelves Compact Refrigerator",
            before_price: "$499.00",
            current_price: "$449.00",
            sale: true,
        },
    ]

    const kitchen = arr.map(
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
                            <h1 className='text-[34px] lg:text-[70px] text-[#0671e3] font-bold mb-10 lg:mb-16'>Kitchen appliances</h1>
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
                                {kitchen}
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
