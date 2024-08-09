import React from 'react';
import gadget_img1_1 from '../Images/gadget-img1-1.jpg';
import gadget_img1_2 from '../Images/gadget-img1-2.jpg';
import gadget_img2_1 from '../Images/gadget-img2-1.jpg';
import gadget_img3_1 from '../Images/gadget-img3-1.jpg';
import gadget_img3_2 from '../Images/gadget-img3-2.jpg';
import gadget_img4_1 from '../Images/gadget-img4-1.jpg';
import Card from './Card';

export default function H_gadget() {

    const arr = [
        {
            id: 1,
            img1: gadget_img1_1,
            img2: gadget_img1_2,
            desc: "Mirrorless Vlogging Camera Polaroid Kit with EF-M 15-45mm Lens, Black",
            before_price: "",
            current_price: "$599.00",
            sale: false,
        },
        {
            id: 2,
            img1: gadget_img2_1,
            img2: gadget_img1_2,
            desc: "4K Digital Camera, 12-32mm and 45-150mm Lens Bundle, 16 Megapixel Kit, 5 Axis In-Body Dual Image Stabilization, Black",
            before_price: "",
            current_price: "$799.00",
            sale: false,
        },
        {
            id: 3,
            img1: gadget_img3_1,
            img2: gadget_img3_2,
            desc: "Android Tablet 10.5” LCD Screen 64GB Storage Long-Lasting Battery Kids Content Smart Switch Expandable Memory",
            before_price: "",
            current_price: "$599.00",
            sale: false,
        },
        {
            id: 4,
            img1: gadget_img4_1,
            img2: gadget_img3_2,
            desc: "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
            before_price: "$699.00",
            current_price: "$659.00",
            sale: true,
        }
    ]

    const gadget = arr.map(
        (obj) => {
            return (
                <Card img1={obj.img1} img2={obj.img2} desc={obj.desc} b_price={obj.before_price} c_price={obj.current_price} sale={obj.sale} />
            )
        }
    )

    return (
        <div className="mb-10 md:mb-16 border-[1px] border-gray-300 p-4 bg-white shadow-md">
            <div className="flex items-baseline mb-10">
                <h1 className='font-bold text-[24px] mr-4'>Gadget</h1>
                <a href="" className='font-bold text-[#0274be]'>See more</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-4">
                {gadget}
            </div>
        </div>
    )
}
