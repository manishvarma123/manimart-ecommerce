import React from 'react'

export default function Category() {
    return (
        <div>
            <h1 className='text-[24px] font-bold mt-3 mb-16'>Categories</h1>
            <div className="mb-16">
                <ul className='list-none pl-3'>
                    <li className='mb-2'><a className='text-[17px] text-gray-600' href=''>Air conditioner</a></li>
                    <li className='mb-2'><a className='text-[17px] text-gray-600' href="">Audio & video</a></li>
                    <li className='mb-2'><a className='text-[17px] text-gray-600' href="">Gadgets</a></li>
                    <li className='mb-2'><a className='text-[17px] text-gray-600' href="">Home appliances</a></li>
                    <li className='mb-2'><a className='text-[17px] text-gray-600' href="">Kitchen appliances</a></li>
                    <li className='mb-2'><a className='text-[17px] text-gray-600' href="">PCs & laptop</a></li>
                    <li className='mb-2'><a className='text-[17px] text-gray-600' href="">Refrigerator</a></li>
                    <li className='mb-2'><a className='text-[17px] text-gray-600' href="">Smart home</a></li>
                </ul >
            </div>
            <h1 className='text-[24px] font-bold mt-3 mb-20'>Filter by price</h1>
            <h1 className='text-[24px] font-bold mt-3 mb-20'>Average rating</h1>
        </div>
    )
}
