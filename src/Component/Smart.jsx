import React from 'react';
import s_img1_1 from '../Images/smart-img1-1.jpg';
import s_img1_2 from '../Images/smart-img1-2.jpg';
import t_img2_1 from '../Images/today-img2-1.jpg';
import t_img2_2 from '../Images/today-img2-2.jpg';
import t_img3_1 from '../Images/today-img3-1.jpg';
import s_img4_1 from '../Images/smart-img4-1.jpg';
import s_img4_2 from '../Images/smart-img4-2.jpg';
import s_img5_1 from '../Images/smart-img5-1.jpg';
import s_img5_2 from '../Images/smart-img5-2.jpg';
import Category from './Category'
import Card from './Card';
import Footer from './Footer';

export default function Smart() {

    const arr = [
        {
            id: 1,
            img1: s_img1_1,
            img2: s_img1_2,
            desc: "Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking",
            before_price: "",
            current_price: "$129.00",
            sale: false,
        },
        {
            id: 2,
            img1: t_img2_1,
            img2: t_img2_2,
            desc: "Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",
            before_price: "$249.00",
            current_price: "$219.00",
            sale: true,
        },
        {
            id: 3,
            img1: t_img3_1,
            img2: t_img2_2,
            desc: "Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White",
            before_price: "$229.00",
            current_price: "$209.00",
            sale: true,
        },
        {
            id: 4,
            img1: s_img4_1,
            img2: s_img4_2,
            desc: "Smart Wifi Alexa Control, 6L Top Fill Cool Mist for Baby and Plants, Ultrasonic, Essential Oil Diffuser",
            before_price: "",
            current_price: "$199.00",
            sale: false,
        },
        {
            id: 5,
            img1: s_img5_1,
            img2: s_img5_2,
            desc: "Smartwatch with Bright Touchscreen Display, Up to 6 Days of Battery Life, Orchid Purple",
            before_price: "",
            current_price: "$299.00",
            sale: false,
        },

    ]

    const smart = arr.map(
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
                            <h1 className='text-[34px] lg:text-[70px] text-[#0671e3] font-bold mb-10 lg:mb-16'>Smart home</h1>
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
                                {smart}
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
