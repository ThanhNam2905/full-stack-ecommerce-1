import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from "react-icons/bi"

const SliderBanner = () => {
    return (
        <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto'>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className='absolute bottom-0 right-[31px] md:right-[51px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] z-20
                        flex items-center justify-center cursor-pointer text-white border-2 border-transparent bg-black 
                        transition-all ease-in duration-300 hover:bg-transparent hover:border-black hover:text-black'
                    >
                        <BiArrowBack className='text-[16px] md:text-[20px]'/>
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className='absolute bottom-0 right-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] z-20
                        flex items-center justify-center cursor-pointer text-white border-2 border-transparent bg-black 
                        transition-all ease-in duration-300 hover:bg-transparent hover:border-black hover:text-black'
                    >
                        <BiArrowBack className='rotate-180 text-[16px] md:text-[20px]'/>
                    </div>
                )}
            >
                <div>
                    <img 
                        src="./assets/slide-1.png" 
                        alt='slide-1' 
                        className='aspect-[16/10] md:aspect-auto object-cover'
                    />
                    <div className='absolute bottom-[25px] md:bottom-[75px] left-0 px-[15px] md:px-[40px] py-[10px] md:py-[25px]
                        font-oswald bg-white text-gray-950 text-[15px] md:text-[30px] uppercase font-medium cursor-pointer rounded-tr-lg
                        rounded-br-lg transition-all ease-linear duration-300 hover:bg-black hover:text-white'>
                        Shop now
                    </div>
                </div>
                <div>
                    <img 
                        src="./assets/slide-2.png" 
                        alt='slide-2' 
                        className='aspect-[16/10] md:aspect-auto object-cover'
                    />
                    <div className='absolute bottom-[25px] md:bottom-[75px] left-0 px-[15px] md:px-[40px] py-[10px] md:py-[25px]
                        font-oswald bg-white text-gray-950 text-[15px] md:text-[30px] uppercase font-medium cursor-pointer rounded-tr-lg
                        rounded-br-lg transition-all ease-linear duration-300 hover:bg-black hover:text-white'>
                        Shop now
                    </div>
                </div>
                <div>
                    <img 
                        src="./assets/slide-3.png" 
                        alt='slide-3' 
                        className='aspect-[16/10] md:aspect-auto object-cover'
                    />
                    <div className='absolute bottom-[25px] md:bottom-[75px] left-0 px-[15px] md:px-[40px] py-[10px] md:py-[25px]
                        font-oswald bg-white text-gray-950 text-[15px] md:text-[30px] uppercase font-medium cursor-pointer rounded-tr-lg
                        rounded-br-lg transition-all ease-linear duration-300 hover:bg-black hover:text-white'>
                        Shop now
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default SliderBanner