import ProductCard from '@/components/ProductCard';
import Wrapper from '@/components/Wrapper';
import { useRouter } from 'next/router'
import React from 'react'

const CategoryPage = () => {

    const router = useRouter();

    return (
        <div className='w-full md:my-20'>
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-10 md:mt-0">
                    <h3 className="text-[28px] md:text-[34px] font-semibold mb-5 md:mb-7 leading-tight">Sneakers Shoes</h3>
                </div>

                {/* Product List start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 px-5 md:px-0 my-11 md:my-14">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
                {/* Product List end */}
            </Wrapper>
        </div>
    )
}

export default CategoryPage