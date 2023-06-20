import ProductCard from '@/components/ProductCard';
import Wrapper from '@/components/Wrapper';
import { fetchDataFromAPI } from '@/utils/api';
import { useRouter } from 'next/router'
import React from 'react'

const CategoryPage = ({ category, products, slug }) => {

    const router = useRouter();

    return (
        <div className='w-full md:my-20'>
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-10 md:mt-0">
                    <h3 className="text-[28px] md:text-[34px] font-semibold mb-5 md:mb-7 leading-tight capitalize">
                        {category?.data[0]?.attributes?.nameCategory}
                    </h3>
                </div>

                {/* Product List start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 px-5 md:px-0 my-11 md:my-14">
                    { 
                        products?.data?.map((product) => (
                            <ProductCard key={product?.id} data={product}/>
                        ))
                    }
                </div>
                {/* Product List end */}
            </Wrapper>
        </div>
    )
}

export default CategoryPage

export async function getStaticPaths() {
    const categories = await fetchDataFromAPI("/api/categories?populate=*");
    const paths = categories.data.map((item) => ({
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
export async function getStaticProps({ params: {slug} }) {
    const category = await fetchDataFromAPI(`/api/categories?filters[slug][$eq]=${slug}`);
    const products = await fetchDataFromAPI(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`);

    return {
        props: {
            category,
            products,
            slug
        }
    };
}