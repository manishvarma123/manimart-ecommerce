import React from 'react';
import air_img1_1 from '../Images/air-img1-1.jpg';
import air_img1_2 from '../Images/air-img1-2.jpg';
import air_img2_1 from '../Images/air-img2-1.jpg';
import air_img3_1 from '../Images/air-img3-1.jpg';
import air_img4_1 from '../Images/air-img4-1.jpg';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';

export default function Air() {

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
        <>
            <div className='w-screen bg-white border-b-2 border-gray-300'>
                <div className="max-w-[1240px] m-auto ">
                    <div className="h-full lg:flex flex-row-reverse ">
                        <div className="overflow-y-scroll no-scrollbar basis-3/4 px-6  lg:px-16 py-16 lg:py-24">
                            <h1 className='text-[34px] lg:text-[70px] text-[#0671e3] font-bold mb-10 lg:mb-16'>Air conditioner</h1>
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
                                {air}
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
