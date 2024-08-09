import React from 'react';
import gadget_img1_1 from '../Images/gadget-img1-1.jpg';
import gadget_img1_2 from '../Images/gadget-img1-2.jpg';
import gadget_img2_1 from '../Images/gadget-img2-1.jpg';
import gadget_img3_1 from '../Images/gadget-img3-1.jpg';
import gadget_img3_2 from '../Images/gadget-img3-2.jpg';
import gadget_img4_1 from '../Images/gadget-img4-1.jpg';
import t_img4_2 from '../Images/today-img4-2.jpg';
import t_img5_1 from '../Images/today-img5-1.jpg';
import t_img6_1 from '../Images/today-img6-1.jpg';
import Card from './Card';
import Category from './Category'
import Footer from './Footer';

export default function Gadget() {

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
    ]

    const gadget = arr.map(
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
                            <h1 className='text-[34px] lg:text-[70px] text-[#0671e3] font-bold mb-10 lg:mb-16'>Gadgets</h1>
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
                                {gadget}
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
