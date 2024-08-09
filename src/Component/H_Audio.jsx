import React from 'react';
import a_img1_1 from '../Images/audio-img1-1.jpg';
import a_img1_2 from '../Images/audio-img1-2.jpg';
import a_img2_1 from '../Images/audio-img2-1.jpg';
import a_img3_1 from '../Images/audio-img3-1.jpg';
import a_img4_1 from '../Images/audio-img4-1.jpg';
import Card from './Card';

export default function H_Audio() {

    const arr = [
        {
            id: 1,
            img1: a_img1_1,
            img2: a_img1_2,
            desc: "Max SR Home Theater Surround Sound Bar HDMI, Optical Cables, Wireless Subwoofer & Two Speakers",
            before_price: "",
            current_price: "$629.00",
            sale:false,
        },
        {
            id: 2,
            img1: a_img2_1,
            img2: a_img1_2,
            desc: "V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible",
            before_price: "$799.00",
            current_price: "$749.00",
            sale:true,
        },
        {
            id: 3,
            img1: a_img3_1,
            img2: a_img1_2,
            desc: "OLED C1 Series 55” 4k Smart TV (3840 x 2160), 120Hz Refresh Rate, AI-Powered 4K, Dolby Cinema, WiSA Ready, Gaming Mode",
            before_price: "",
            current_price: "$1249.00",
            sale:false,
        },
        {
            id: 4,
            img1: a_img4_1,
            img2: a_img1_2,
            desc: "X80J 55 Inch TV: 4K Ultra HD LED Smart Google TV with Dolby Vision HDR",
            before_price: "$1449.00",
            current_price: "$1329.00",
            sale:true,
        }
    ]

    const audio = arr.map(
        (obj) => {
            return (
                <Card img1={obj.img1} img2={obj.img2} desc={obj.desc} b_price={obj.before_price} c_price={obj.current_price} sale={obj.sale}/>
            )
        }
    )

    return (
        <div className="mb-10 md:mb-16 border-[1px] border-gray-300 p-4 bg-white shadow-md">
            <div className="flex items-baseline mb-10">
                <h1 className='font-bold text-[24px] mr-4'>Audio & Video</h1>
                <a href="" className='font-bold text-[#0274be]'>See more</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-4">
                {audio}
            </div>
        </div>
    )
}
