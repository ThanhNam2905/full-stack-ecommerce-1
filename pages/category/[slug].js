import ProductCard from '@/components/ProductCard';
import Wrapper from '@/components/Wrapper';
import { fetchDataFromAPI } from '@/utils/api';
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from 'next/router';
import Image from 'next/image';

const maxResult = 6;

const CategoryPage = ({ category, products, slug }) => {

    const [pageIndex, setPageIndex] = useState(1);
    const router = useRouter();
    const { query } = router;

    useEffect(() => {
        setPageIndex(1);
    }, [query]);

    const { data, error, isLoading } = useSWR(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&[pagination][page]=${pageIndex}&[pagination][pageSize]=${maxResult}`, fetchDataFromAPI, {
        fallbackData: products,
    })

    return (
        <div className='w-full md:my-20 relative'>
            <Wrapper>
                {/* Loading Data status */}
                {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                        <Image
                            src={"https://res.cloudinary.com/nam290596/image/upload/v1686991285/logo_b7f0cd7fe4.svg"}
                            width={90}
                            height={90}
                            alt='Logo Img'
                        />
                        <span className="text-2xl font-medium">Loading...</span>
                    </div>
                )}
                <div className="text-center max-w-[800px] mx-auto mt-10 md:mt-0">
                    <h3 className="text-[28px] md:text-[34px] font-semibold mb-5 md:mb-7 leading-tight capitalize">
                        {category?.data[0]?.attributes?.nameCategory}
                    </h3>
                </div>

                {/* Product List start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 px-5 md:px-0 my-11 md:my-14">
                    {   data?.data?.map((product) => (
                            <ProductCard key={product?.id} data={product} />
                        ))
                    }
                </div>
                {/* Product List end */}
                {/* Pagination Component start */}
                {
                    data?.meta?.pagination?.total > maxResult && (
                        <div className="flex gap-4 items-center justify-center my-16 md:my-0">
                            <button
                                className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                                disabled={pageIndex === 1}
                                onClick={() => setPageIndex(pageIndex - 1)}
                            >
                                Previous
                            </button>
                            <span className='font-bold italic'>{`${pageIndex} of ${data?.meta?.pagination?.pageCount}`}</span>
                            <button
                                className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                                disabled={pageIndex === (data && data?.meta?.pagination?.pageCount)}
                                onClick={() => setPageIndex(pageIndex + 1)}
                            >
                                Next
                            </button>
                        </div>
                    )
                }
                {/* Pagination Component end */}
            </Wrapper>
        </div>
    )
}

export default CategoryPage

export async function getStaticPaths() {
    const category = await fetchDataFromAPI("/api/categories?populate=*");
    const paths = category?.data?.map((c) => ({
        params: {
            slug: c.attributes.slug,
        },
    }));

    console.log("paths ===>", paths);

    return {
        paths,
        fallback: false,
    };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
    const category = await fetchDataFromAPI(`/api/categories?filters[slug][$eq]=${slug}`);
    const products = await fetchDataFromAPI(
        `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&[pagination][page]=1&[pagination][pageSize]=${maxResult}`
    );

    return {
        props: {
            category,
            products,
            slug
        }
    };
}