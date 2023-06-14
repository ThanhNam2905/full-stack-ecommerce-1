import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
    return (
        <Link href={"/product/1"} className='group'>
            <div className='overflow-hidden'>
                <img src="/assets/product-1.webp" alt="product-1.webp" className='w-full transform transition-all ease-linear duration-300 group-hover:scale-105' />
            </div>
            <div className='p-5 text-gray-950 border border-t-0 rounded-bl-lg rounded-br-lg'>
                <h2 className='text-lg font-medium'>Product Name</h2>
                <div className='flex items-center mt-1'>
                    <p className='mr-3 text-lg font-bold'>$20.00</p>
                    <p className='text-base line-through text-gray-600 font-medium'>$35.00</p>
                    <p className='ml-auto text-base font-semibold text-green-500'>20% off</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard