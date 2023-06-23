import { getDiscountPricePercentage } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ data: { attributes: product } }) => {
    return (
        <Link href={`/product/${product.slug}`} className='group'>
            <div className='overflow-hidden'>
                <Image
                    src={product.thumbnailProduct.data.attributes.url}
                    width={500}
                    height={500}
                    alt={product.thumbnailProduct.data.attributes.name}
                    className='w-full transform transition-all ease-linear duration-300 group-hover:scale-105' 
                />
            </div>
            <div className='p-5 text-gray-950 border border-t-0 rounded-bl-lg rounded-br-lg'>
                <h2 className='text-lg font-medium'>{product.nameProduct}</h2>
                <p className='text-base font-medium text-black/[0.5] mt-1 mb-1.5'>{product.subTitle}</p>
                <div className='flex items-center mt-1'>
                    <p className='mr-3 text-base font-semibold'>${product.priceProduct}</p>
                    { product.original_priceProduct && (
                        <>
                            <p className='text-[15px] line-through text-gray-500 font-medium'>
                                ${product.original_priceProduct}
                            </p>
                            <p className='ml-auto text-base font-semibold text-green-500'>
                                {getDiscountPricePercentage(
                                    product.original_priceProduct,
                                    product.priceProduct
                                )} % off
                            </p>
                        </>)
                    }
                </div>
            </div>
        </Link>
    )
}

export default ProductCard