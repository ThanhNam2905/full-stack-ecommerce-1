import ProductCard from "@/components/ProductCard";
import SliderBanner from "@/components/SliderBanner";
import Wrapper from "@/components/Wrapper";

export default function Home() {
    return (
        <main>
            <SliderBanner/>

            <Wrapper>
                {/* Heading and paragraph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <h3 className="text-[28px] md:text-[34px] font-semibold mb-5 md:mb-7 leading-5">Cushioning for Your Miles</h3>
                    <p className="text-base md:text-xl !leading-8 text-gray-600">A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </p>
                </div>
                {/* Heading and paragraph end */}

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
        </main>
    )
}
