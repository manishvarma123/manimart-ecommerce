import React from 'react';
import Footer from './Footer';
import apply from '../Images/apply_banner.jpg';
import H_brand from './H_brand';
import t_img1 from '../Images/today-img1.jpg';
import s_img1_1 from '../Images/smart-img1-1.jpg';
import s_img1_2 from '../Images/smart-img1-2.jpg';
import t_img2_1 from '../Images/today-img2-1.jpg';
import t_img2_2 from '../Images/today-img2-2.jpg';
import gadget_img3_2 from '../Images/gadget-img3-2.jpg';
import gadget_img4_1 from '../Images/gadget-img4-1.jpg';
import t_img4_2 from '../Images/today-img4-2.jpg';
import t_img5_1 from '../Images/today-img5-1.jpg';
import t_img6_1 from '../Images/today-img6-1.jpg';
import laptop_img1_2 from '../Images/laptop-img1-2.jpg';
import laptop_img3_1 from '../Images/laptop-img3-1.jpg';
import laptop_img4_1 from '../Images/laptop-img4-1.jpg';
import h_img2_1 from '../Images/home-img2-1.jpg';
import h_img2_2 from '../Images/home-img2-2.jpg';
import h_img3_1 from '../Images/home-img3-1.jpg';
import h_img4_1 from '../Images/home-img4-1.jpg';
import h_img5_1 from '../Images/home-img5-1.jpg';
import refri_img1_1 from '../Images/refri-img1-1.jpg';
import refri_img1_2 from '../Images/refri-img1-2.jpg';
import refri_img2_1 from '../Images/refri-img2-1.jpg';
import refri_img3_1 from '../Images/refri-img3-1.jpg';
import refri_img3_2 from '../Images/refri-img3-2.jpg';
import refri_img4_1 from '../Images/refri-img4-1.jpg';
import a_img1_1 from '../Images/audio-img1-1.jpg';
import a_img1_2 from '../Images/audio-img1-2.jpg';
import a_img2_1 from '../Images/audio-img2-1.jpg';
import a_img3_1 from '../Images/audio-img3-1.jpg';
import Card from './Card';

export default function Today() {

    const arr = [
        {
            id: 1,
            img1: t_img1,
            img2: t_img1,
            desc: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
            before_price: "$49.00",
            current_price: "$44.00",
            sale: true,
        },
        {
            id: 2,
            img1: s_img1_1,
            img2: s_img1_2,
            desc: "Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking",
            before_price: "",
            current_price: "$129.00",
            sale: false,
        },
        {
            id: 3,
            img1: t_img2_1,
            img2: t_img2_2,
            desc: "Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",
            before_price: "$249.00",
            current_price: "$219.00",
            sale: true,
        },
        {
            id: 4,
            img1: gadget_img4_1,
            img2: gadget_img3_2,
            desc: "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
            before_price: "$699.00",
            current_price: "$659.00",
            sale: true,
        },
        {
            id: 5,
            img1: t_img5_1,
            img2: t_img4_2,
            desc: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
            before_price: "$1299.00",
            current_price: "$1199.00",
            sale: true,
        },
        {
            id: 6,
            img1: t_img6_1,
            img2: t_img4_2,
            desc: "5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey",
            before_price: "$1099.00",
            current_price: "$999.00",
            sale: true,
        },
        {
            id: 7,
            img1: laptop_img3_1,
            img2: laptop_img1_2,
            desc: "13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",
            before_price: "$1499.00",
            current_price: "$1399.00",
            sale: true,
        },
        {
            id: 8,
            img1: laptop_img4_1,
            img2: laptop_img1_2,
            desc: "15.6″ FHD Display Laptop – Intel i7 – Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey",
            before_price: "$1029.00",
            current_price: "$999.00",
            sale: true,
        },
        {
            id: 9,
            img1: h_img2_1,
            img2: h_img2_2,
            desc: "Compact Pulsator Washer for Clothes, .9 Cubic ft. Tub, White, BPAB10WH",
            before_price: "$319.00",
            current_price: "$259.00",
            sale: true,
        },
        {
            id: 10,
            img1: h_img3_1,
            img2: h_img2_2,
            desc: "Full-Automatic Compact Washer with Wheels, 1.6 cu. ft, 11 lbs capacity with 6 Wash Programs Washer",
            before_price: "$309.00",
            current_price: "$279.00",
            sale: true,
        },
        {
            id: 11,
            img1: h_img4_1,
            img2: h_img2_2,
            desc: "Small Space Heat Pump Dryer with Sensor Dry, 12 Preset Machine Cycles, 40 Minute Express Drying",
            before_price: "",
            current_price: "$349.00",
            sale: false,
        },
        {
            id: 12,
            img1: h_img5_1,
            img2: h_img2_2,
            desc: "18 lbs Combination Washer Dryer – Sanitize, Allergen, Winterize, Vented Dry- 2021 Model, White",
            before_price: "$329.00",
            current_price: "$309.00",
            sale: true,
        },
        {
            id: 13,
            img1: refri_img2_1,
            img2: refri_img1_2,
            desc: "36″ Side-by-Side Refrigerator and Freezer with 25 Cubic Ft. Total Capacity, Black",
            before_price: "$799.00",
            current_price: "$749.00",
            sale: true,
        },
        {
            id: 14,
            img1: refri_img1_1,
            img2: refri_img1_2,
            desc: "Double Door Mini Fridge with Freezer for Office or Dorm with Adjustable Remove Glass Shelves",
            before_price: "",
            current_price: "$479.00",
            sale: false,
        },
        {
            id: 15,
            img1: refri_img2_1,
            img2: refri_img1_2,
            desc: "36″ Side-by-Side Refrigerator and Freezer with 25 Cubic Ft. Total Capacity, Black",
            before_price: "$799.00",
            current_price: "$749.00",
            sale: true,
        },
        {
            id: 16,
            img1: refri_img3_1,
            img2: refri_img3_2,
            desc: "Mini Fridge with Freezer for Bedroom Office or Dorm with Adjustable Remove Glass Shelves Compact Refrigerator",
            before_price: "$499.00",
            current_price: "$449.00",
            sale: true,
        },
        {
            id: 17,
            img1: refri_img4_1,
            img2: refri_img1_2,
            desc: "2 Door Apartment Size Refrigerator with Freezer, 7.2 cu ft, Platinum Series, Stainless Steel",
            before_price: "$899.00",
            current_price: "$849.00",
            sale: true,
        },
        {
            id: 18,
            img1: a_img1_1,
            img2: a_img1_2,
            desc: "Max SR Home Theater Surround Sound Bar HDMI, Optical Cables, Wireless Subwoofer & Two Speakers",
            before_price: "",
            current_price: "$629.00",
            sale: false,
        },
        {
            id: 19,
            img1: a_img2_1,
            img2: a_img1_2,
            desc: "V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible",
            before_price: "$799.00",
            current_price: "$749.00",
            sale: true,
        },
        {
            id: 20,
            img1: a_img3_1,
            img2: a_img1_2,
            desc: "OLED C1 Series 55” 4k Smart TV (3840 x 2160), 120Hz Refresh Rate, AI-Powered 4K, Dolby Cinema, WiSA Ready, Gaming Mode",
            before_price: "",
            current_price: "$1249.00",
            sale: false,
        },
    ]

    const today = arr.map(
        (obj) => {
            return (
                <Card img1={obj.img1} img2={obj.img2} desc={obj.desc} b_price={obj.before_price} c_price={obj.current_price} />
            )
        }
    )

    return (
        <div>
            <div className="bg-white border-b-2 border-gray-300">
                <div className="max-w-[1240px] m-auto">
                <div className="md:grid grid-cols-2 items-center md:divide-x-2 py-4 md:py-5 px-4 ">
                        <h1 className='text-[34px] md:text-[40px] lg:text-[65px] font-bold'>Today's deal</h1>
                        <p className='md:px-[30px] lg:px-[60px] py-3 md:py-4 lg:text-[17px] text-gray-700'>Saepe doloribus deserunt in. At beatae neque pariatur harum vel. Possimus fugiat aut nemo.</p>
                    </div>
                </div>
            </div>
            <div className="w-screen bg-[#ececec] py-10 lg:py-16">
                <div className="max-w-[1240px] m-auto px-3">
                    <div className="overflow-hidden mb-10 lg:mb-16">
                        <a href="">
                            <img src={apply} alt="" />
                        </a>
                    </div>
                    <div className="mb-10 lg:mb-16 border-[1px] border-gray-300 p-4 bg-white shadow-md">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {today}
                        </div>
                    </div>
                    <H_brand />
                </div>
            </div>
            <Footer />
        </div>
    )
}
