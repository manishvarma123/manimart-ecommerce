import React from 'react';
import h_img1_1 from '../Images/home-img1-1.jpg';
import h_img2_1 from '../Images/home-img2-1.jpg';
import h_img2_2 from '../Images/home-img2-2.jpg';
import h_img3_1 from '../Images/home-img3-1.jpg';
import h_img4_1 from '../Images/home-img4-1.jpg';
import h_img5_1 from '../Images/home-img5-1.jpg';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';

export default function Appliances() {

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
        },
        {
            id: 5,
            img1: h_img5_1,
            img2: h_img2_2,
            desc: "18 lbs Combination Washer Dryer – Sanitize, Allergen, Winterize, Vented Dry- 2021 Model, White",
            before_price: "$329.00",
            current_price: "$309.00",
            sale: true,
        },
    ]

    const home = arr.map(
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
                            <h1 className='text-[34px] lg:text-[70px] text-[#0671e3] font-bold mb-10 lg:mb-16'>Home appliances</h1>
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
                                {home}
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
