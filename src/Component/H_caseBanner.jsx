import React from 'react';
import promo1 from '../Images/promo-banner1.jpg';
import promo2 from '../Images/promo-banner2.jpg';

export default function H_caseBanner() {
    return (
        <div className="mb-10 lg:grid lg:grid-cols-2 gap-8">
            <div className="overflow-hidden mb-6">
                <a href="">
                    <img className='w-full' src={promo1} alt="" />
                </a>
            </div>
            <div className="overflow-hidden mb-6">
                <a href="">
                    <img className='w-full' src={promo2} alt="" />
                </a>
            </div>
        </div>
    )
}
