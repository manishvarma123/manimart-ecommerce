import React from 'react';
import a_img1_1 from '../Images/audio-img1-1.jpg';
import a_img1_2 from '../Images/audio-img1-2.jpg';
import a_img2_1 from '../Images/audio-img2-1.jpg';
import a_img3_1 from '../Images/audio-img3-1.jpg';
import a_img4_1 from '../Images/audio-img4-1.jpg';
import a_img5_1 from '../Images/audio-img5-1.jpg';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';

export default function Audio() {

    const arr = [
        {
            id: 1,
            img1: a_img1_1,
            img2: a_img1_2,
            desc: "Max SR Home Theater Surround Sound Bar HDMI, Optical Cables, Wireless Subwoofer & Two Speakers",
            before_price: "",
            current_price: "$629.00",
            sale: false,
        },
        {
            id: 2,
            img1: a_img2_1,
            img2: a_img1_2,
            desc: "V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible",
            before_price: "$799.00",
            current_price: "$749.00",
            sale: true,
        },
        {
            id: 3,
            img1: a_img3_1,
            img2: a_img1_2,
            desc: "OLED C1 Series 55” 4k Smart TV (3840 x 2160), 120Hz Refresh Rate, AI-Powered 4K, Dolby Cinema, WiSA Ready, Gaming Mode",
            before_price: "",
            current_price: "$1249.00",
            sale: false,
        },
        {
            id: 4,
            img1: a_img4_1,
            img2: a_img1_2,
            desc: "X80J 55 Inch TV: 4K Ultra HD LED Smart Google TV with Dolby Vision HDR",
            before_price: "$1449.00",
            current_price: "$1329.00",
            sale: true,
        },
        {
            id: 5,
            img1: a_img5_1,
            img2: a_img1_2,
            desc: "75-Inch Class Neo QLED QN90A Series 4K UHD Quantum HDR 32x Smart TV",
            before_price: "$1749.00",
            current_price: "$1629.00",
            sale: true,
        },

    ]

    const audio = arr.map(
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
                            <h1 className='text-[34px] lg:text-[70px] text-[#0671e3] font-bold mb-10 lg:mb-16'>Audio & video</h1>
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
                                {audio}
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
