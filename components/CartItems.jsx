import Link from 'next/link'
import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

const CartItems = () => {
    return (
        <div className='w-full flex py-5 gap-3 md:gap-5 border-b'>
            <div className='aspect-square shrink-0 w-[70px] md:w-[120px]'>
                <img src="/assets/product-1.webp" alt="product-1.webp" />
            </div>
            <div className='w-full flex flex-col'>
                <div className='flex flex-col md:flex-row justify-between'>
                    {/* Product Name */}
                    <Link href={"/"}>
                        <span className='text-lg md:text-[22px] font-semibold hover:underline text-black/[0.9]'>Jordan Restro 6</span>
                    </Link>
                    {/* Product Price */}
                    <div className='text-sm md:text-base text-black/[0.5] font-semibold hidden md:block'>
                        $ 159.99
                    </div>
                </div>
                <div className='text-sm md:text-base font-medium mt-0 md:mt-1.5 text-black/[0.5]'>
                    Men's Shoes
                </div>
                {/* Product Price */}
                <div className='text-sm md:text-base text-black/[0.5] font-semibold block md:hidden'>
                    $ 159.99
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-2 text-black/[0.5] text-sm md:text-base'>
                            <div className='font-semibold'>Size:</div>
                            <select id="select-sizes" className='transition-all ease-linear duration-300 hover:text-black'>
                                <option value="UK-6">UK 6</option>
                                <option value="UK-6.5">UK 6.5</option>
                                <option value="UK-7">UK 7</option>
                                <option value="UK-7.5">UK 7.5</option>
                                <option value="UK-8">UK 8</option>
                                <option value="UK-8.5">UK 8.5</option>
                                <option value="UK-9">UK 9</option>
                                <option value="UK-9.5">UK 9.5</option>
                                <option value="UK-10">UK 10</option>
                                <option value="UK-10.5">UK 10.5</option>
                                <option value="UK-11">UK 11</option>
                                <option value="UK-11.5">UK 11.5</option>
                            </select>
                        </div>
                        <div className='flex items-center gap-2 text-black/[0.5] text-sm md:text-base'>
                        <div className='font-semibold'>Quantity:</div>
                        <select id="select-sizes" className='transition-all ease-linear duration-300 hover:text-black'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </select>
                    </div>
                    </div>
                    <RiDeleteBinLine title='Remove Item' className='text-[16px] md:text-[20px] cursor-pointer text-black/[0.6] transition-all ease-in duration-200 hover:text-red-500'/>
                </div>
            </div>
        </div>
    )
}

export default CartItems