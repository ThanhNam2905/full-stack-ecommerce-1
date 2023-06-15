import ProductDetailCarousel from '@/components/ProductDetailCarousel'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { BsHeart, BsCart2  } from "react-icons/bs"

const ProductDetail = () => {
    return (
        <div className='w-full md:my-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[80px]'>
                    {/* Left column start */}
                    <div className='flex-[1.5] w-full md:w-auto max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                        <ProductDetailCarousel/>
                    </div>
                    {/* Left column end */}

                    {/* Right column start */}
                    <div className='flex-[1] py-3'>
                        {/* Product Name */}
                        <div className='text-[32px] font-semibold mb-3'>
                            Jordan Retro 6 G
                        </div>
                        {/* Product Subtitle */}
                        <div className='text-lg font-semibold mb-4'>
                            Men's Shoes
                        </div>
                        {/* Product Price */}
                        <div className='text-lg font-medium mb-1'>
                            USD: $99.00 
                        </div>

                        <div className='text-[15px] font-medium text-black/[0.4] italic'>
                            incl. of taxes
                        </div>
                        <div className='text-[15px] font-medium text-black/[0.4] italic mb-14'>
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* Product Sizes */}
                        <div className='mb-10'>
                            <div className='flex justify-between mb-3'>
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>
                                <div className='text-md font-medium text-black/[0.4]'>
                                    Select Guide
                                </div>
                            </div>
                            <div className='grid grid-cols-3 gap-3'>
                                <div className='py-3.5 border font-semibold cursor-pointer text-black text-center rounded-md transition-all
                                    ease-linear duration-300 hover:border-black hover:bg-black/[0.04]'>
                                    UK 6
                                </div>
                                <div className='py-3.5 border font-semibold cursor-pointer text-black text-center rounded-md transition-all
                                    ease-linear duration-300 hover:border-black hover:bg-black/[0.04]'>
                                    UK 6
                                </div>
                                <div className='py-3.5 border font-semibold cursor-pointer text-black text-center rounded-md transition-all
                                    ease-linear duration-300 hover:border-black hover:bg-black/[0.04]'>
                                    UK 6
                                </div>
                                <div className='py-3.5 border font-semibold cursor-pointer text-black text-center rounded-md transition-all
                                    ease-linear duration-300 hover:border-black hover:bg-black/[0.04]'>
                                    UK 6
                                </div>
                                <div className='py-3.5 border font-semibold cursor-pointer text-black text-center rounded-md transition-all
                                    ease-linear duration-300 hover:border-black hover:bg-black/[0.04]'>
                                    UK 6
                                </div>
                                <div className='py-3.5 border font-semibold cursor-pointer text-black text-center rounded-md transition-all
                                    ease-linear duration-300 hover:border-black hover:bg-black/[0.04]'>
                                    UK 6
                                </div>
                                <div className='py-3.5 border font-semibold cursor-pointer text-black text-center rounded-md transition-all
                                    ease-linear duration-300 hover:border-black hover:bg-black/[0.04]'>
                                    UK 6
                                </div>
                                <div className='py-3.5 border font-semibold cursor-not-allowed text-black/[0.5] text-center rounded-md transition-all
                                    ease-linear duration-300 bg-black/[0.25] opacity-50'>
                                    UK 6
                                </div>
                                <div className='py-3.5 border font-semibold cursor-pointer text-black text-center rounded-md transition-all
                                    ease-linear duration-300 hover:border-black hover:bg-black/[0.04]'>
                                    UK 6
                                </div>
                                <div className='py-3.5 border font-semibold cursor-not-allowed text-black/[0.5] text-center rounded-md transition-all
                                    ease-linear duration-300 bg-black/[0.25] opacity-50'>
                                    UK 6
                                </div>
                                <div className='py-3.5 border font-semibold cursor-not-allowed text-black/[0.5] text-center rounded-md transition-all
                                    ease-linear duration-300 bg-black/[0.25] opacity-50'>
                                    UK 6
                                </div>
                            </div>
                            <div className='text-md font-medium mt-2 text-red-500'>
                                Size selection is required
                            </div>
                        </div>
                        {/* Add to cart Button & Whishlist Button */}
                        <div className='mb-10'>
                            <button className='group w-full py-4 mb-4 text-lg font-oswald font-medium bg-black text-white rounded-full ease-linear 
                            duration-300 transition-all active:scale-95 hover:opacity-70 flex items-center justify-center gap-2'>
                                Add to Cart
                                <BsCart2 size={20} className='transition-all ease-in duration-300 group-hover:scale-[0.8]'/>
                            </button>
                            <button className='group w-full py-4 mb-4 text-lg font-oswald font-medium bg-white text-black border-2 border-black rounded-full ease-linear 
                            duration-300 transition-all active:scale-95 hover:opacity-70 flex items-center justify-center gap-2'>
                                Whishlist
                                <BsHeart size={20} className='transition-all ease-in duration-300 group-hover:scale-[0.8]'/>
                            </button>
                        </div>
                        {/* Product Description */}
                        <div className='mb-5'>
                            <h4 className='font-bold text-lg mb-5'>Product Details</h4>
                            <p className='text-md mb-3'>
                            "You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about
                             take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts.
                            </p>
                            <p className='text-md'>
                            "You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about
                             take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts.
                            </p>
                        </div>
                    </div>
                    {/* Right column end */}
                </div>
            </Wrapper>
        </div>
    )
}

export default ProductDetail