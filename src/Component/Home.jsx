import React from 'react';
import H_category from './H_category';
import H_caseBanner from './H_caseBanner';
import H_deal from './H_deal';
import H_Audio from './H_Audio';
import H_Home from './H_Home';
import H_air from './H_air';
import H_kitchen from './H_kitchen';
import H_refrigerator from './H_refrigerator';
import H_laptop from './H_laptop';
import H_gadget from './H_gadget';
import H_brand from './H_brand';
import Footer from './Footer';
import Banner from './Banner';
import create from '../Images/create_banner.jpg';
import apply from '../Images/apply_banner.jpg';



export default function Home() {
    return (
        <div>
            <Banner />
            <div className="w-screen bg-[#ececec] py-10 md:py-16">
                <div className="max-w-[1240px] m-auto px-3">
                    <H_category />
                    <H_caseBanner />
                    <H_deal />
                    <H_Audio />
                    <H_Home />
                    <H_air />
                    <div className="overflow-hidden mb-10 md:mb-16">
                        <a href="">
                            <img className='w-full' src={create} alt="" />
                        </a>
                    </div>
                    <H_kitchen />
                    <H_refrigerator />
                    <div className="overflow-hidden mb-10 md:mb-16">
                        <a href="">
                            <img src={apply} alt="" />
                        </a>
                    </div>
                    <H_laptop />
                    <H_gadget />
                    <H_brand />
                </div>
            </div>
            <Footer />
        </div>
    )
}
