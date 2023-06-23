import ProductDetailCarousel from '@/components/ProductDetailCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import { fetchDataFromAPI } from '@/utils/api'
import { getDiscountPricePercentage } from '@/utils/helper'
import React from 'react'
import { useState } from 'react'
import { BsHeart, BsCart2  } from "react-icons/bs"
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const ProductDetail = ({ product, products }) => {

    const productDetail = product?.data[0]?.attributes;
    const [showError, setShowError] = useState(false);
    const [selectedSize, setSelectedSize] = useState();

    // Handler User Add Products to Cart
    const handlerAddToCart = () => {
        if(!selectedSize) {
            setShowError(true);
            document.getElementById("sizesGrid").scrollIntoView({
                block: "center",
                behavior: "smooth"
            })
        }
    }

    return (
        <div className='w-full md:my-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[80px]'>
                    {/* Left column start */}
                    <div className='flex-[1.5] w-full md:w-auto max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                        <ProductDetailCarousel images={productDetail?.images?.data}/>
                    </div>
                    {/* Left column end */}

                    {/* Right column start */}
                    <div className='flex-[1] py-3'>
                        {/* Product Name */}
                        <div className='text-[32px] font-semibold mb-3'>
                            {productDetail.nameProduct}
                        </div>
                        {/* Product Subtitle */}
                        <div className='text-lg font-semibold mb-2'>
                            {productDetail.subTitle}
                        </div>
                        {/* Product Price */}
                        <div className='flex items-center mt-1.5 gap-4'>
                            <p className='text-lg font-medium'>
                                <span className='text-base text-black mr-2'>USD:</span>
                                <span className='font-bold'>${productDetail.priceProduct}</span>
                            </p>
                            { productDetail.original_priceProduct && (
                                <>
                                    <p className='text-[15px] line-through text-gray-500 font-medium'>
                                        ${productDetail.original_priceProduct}
                                    </p>
                                    <p className='ml-auto text-base font-semibold text-green-500'>
                                        {getDiscountPricePercentage(
                                            productDetail.original_priceProduct,
                                            productDetail.priceProduct
                                        )} % off
                                    </p>
                                </>)
                            }
                        </div>
                        <div className='text-[15px] font-medium text-black/[0.4] italic'>
                            incl. of taxes
                        </div>
                        <div className='text-[15px] font-medium text-black/[0.4] italic mb-14'>
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* Product Sizes */}
                        <div id='sizesGrid' className='mb-10'>
                            <div className='flex justify-between mb-3'>
                                <div className='text-md font-semibold'>
                                    Select Size
                                </div>
                                <div className='text-md font-medium text-black/[0.4]'>
                                    Select Guide
                                </div>
                            </div>
                            <div className='grid grid-cols-3 gap-3'>
                                { productDetail.sizes.data.map((item, index) => (
                                        <div 
                                            key={index + 1}
                                            className={`
                                                py-3.5 border border-gray-300 font-semibold  text-black text-center rounded-md transition-all
                                                ease-linear duration-300 
                                                ${item.enabled ? " cursor-pointer hover:border-black hover:bg-black/[0.04]" : " cursor-not-allowed !opacity-50 !bg-black/[0.1]"}
                                                ${selectedSize === item.size ? " ring-2 ring-black !border-none" : ""}
                                            `}
                                            onClick={() => {
                                                setSelectedSize(item.size)
                                                setShowError(false)
                                            }}
                                        >
                                            {item.size}
                                        </div>
                                    ))
                                }
                                
                            </div>
                            { showError && (
                                    <div className='text-[15px] bg-red-100 inline-block py-1.5 px-3 rounded-md font-medium !mt-5 text-red-500'>
                                        Size selection is required
                                    </div>
                                )
                            }
                        </div>
                        {/* Add to cart Button & Whishlist Button */}
                        <div className='mb-10'>
                            <button 
                                className='group w-full py-4 mb-4 text-lg font-oswald font-medium bg-black text-white rounded-full ease-linear 
                                duration-300 transition-all active:scale-95 hover:opacity-70 flex items-center justify-center gap-2'
                                onClick={() => handlerAddToCart()}
                            >
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
                            <p className='markdown text-md mb-3 leading-7'>
                                <ReactMarkdown>
                                    {productDetail.descriptionProduct}
                                </ReactMarkdown>
                            </p>
                        </div>
                    </div>
                    {/* Right column end */}
                </div>

                {/* Related Products Carousel */}
                <RelatedProducts products={products}/>
            </Wrapper>
        </div>
    )
}

export default ProductDetail

export async function getStaticPaths() {
    const products = await fetchDataFromAPI("/api/products?populate=*");
    const paths = products.data.map((item) => ({
        params: {
            slug: item.attributes.slug
        }
    }));

    return {
        paths,
        fallback: false
    };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromAPI(`/api/products?populate=*&filters[slug][$eq]=${slug}`);
    const products = await fetchDataFromAPI(`/api/products?populate=*&[filters][slug][$ne]=${slug}`);

    return {
        props: {
            product,
            products
        }
    };
}