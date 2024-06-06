import React, { lazy } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const SuperDeals = () => {
    return (
        <section className='mb-4'>
            <div className="container bg-[#efefed] border-t-8 border-blue-800 p-6">
                <p className="text-4xl font-medium italic mb-2 pl-2">Super <span className='text-[red]'>Deals</span></p>
                <div className=' w-full '>
                    <Swiper
                        loop={true}
                        speed={800}
                        // autoplay={{
                        //     delay: 3500,
                        //     disableOnInteraction: false,
                        // }}
                        // navigation={true}
                        // navigation={{
                        //   prevEl: '.prev-slide',
                        //   nextEl: '.next-slide',
                        // }}
                        breakpoints={{
                            240: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            868: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1224: {
                                slidesPerView: 5,
                                spaceBetween: 15,
                            },
                            1424: {
                                slidesPerView: 6,
                                spaceBetween: 16,
                            },
                        }}
                        modules={[ Navigation]}
                        className="deals-slider">

                        <SwiperSlide >
                            <Link to="" className="w-full p-2 ">
                                <div className="bg-white  rounded-lg overflow-hidden p-2 relative">
                                    <img className='w-100 transition-all duration-300 hover:scale-[1.045]' src="images/category/1.png" alt="" />
                                    <span className="absolute text-[10px] right-0 bottom-0 py-1 px-2 bg-[#f1a33d] z-10 rounded-tl-xl">34% Off</span>
                                </div>
                                <p className='text-xl font-medium mt-2 overflow-ellipsis line-clamp-1  text-nowrap block' >Deals product complete name</p>
                                <p className='text-blue-800 font-medium mt-1 '>Get Qutation</p>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide >
                            <Link to="" className="w-full p-2 ">
                                <div className="bg-white  rounded-lg overflow-hidden p-2 relative">
                                    <img className='w-100 transition-all duration-300 hover:scale-[1.045]' src="images/category/1.png" alt="" />
                                    <span className="absolute text-[10px] right-0 bottom-0 py-1 px-2 bg-[#f1a33d] z-10 rounded-tl-xl">34% Off</span>
                                </div>
                                <p className='text-xl font-medium mt-2 overflow-ellipsis line-clamp-1  text-nowrap block' >Deals product complete name</p>
                                <p className='text-blue-800 font-medium mt-1 '>Get Qutation</p>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide >
                            <Link to="" className="w-full p-2 ">
                                <div className="bg-white  rounded-lg overflow-hidden p-2 relative">
                                    <img className='w-100 transition-all duration-300 hover:scale-[1.045]' src="images/category/1.png" alt="" />
                                    <span className="absolute text-[10px] right-0 bottom-0 py-1 px-2 bg-[#f1a33d] z-10 rounded-tl-xl">34% Off</span>
                                </div>
                                <p className='text-xl font-medium mt-2 overflow-ellipsis line-clamp-1  text-nowrap block' >Deals product complete name</p>
                                <p className='text-blue-800 font-medium mt-1 '>Get Qutation</p>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide >
                            <Link to="" className="w-full p-2 ">
                                <div className="bg-white  rounded-lg overflow-hidden p-2 relative">
                                    <img className='w-100 transition-all duration-300 hover:scale-[1.045]' src="images/category/1.png" alt="" />
                                    <span className="absolute text-[10px] right-0 bottom-0 py-1 px-2 bg-[#f1a33d] z-10 rounded-tl-xl">34% Off</span>
                                </div>
                                <p className='text-xl font-medium mt-2 overflow-ellipsis line-clamp-1  text-nowrap block' >Deals product complete name</p>
                                <p className='text-blue-800 font-medium mt-1 '>Get Qutation</p>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide >
                            <Link to="" className="w-full p-2 ">
                                <div className="bg-white  rounded-lg overflow-hidden p-2 relative">
                                    <img className='w-100 transition-all duration-300 hover:scale-[1.045]' src="images/category/1.png" alt="" />
                                    <span className="absolute text-[10px] right-0 bottom-0 py-1 px-2 bg-[#f1a33d] z-10 rounded-tl-xl">34% Off</span>
                                </div>
                                <p className='text-xl font-medium mt-2 overflow-ellipsis line-clamp-1  text-nowrap block' >Deals product complete name</p>
                                <p className='text-blue-800 font-medium mt-1 '>Get Qutation</p>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide >
                            <Link to="" className="w-full p-2 ">
                                <div className="bg-white  rounded-lg overflow-hidden p-2 relative">
                                    <img className='w-100 transition-all duration-300 hover:scale-[1.045]' src="images/category/1.png" alt="" />
                                    <span className="absolute text-[10px] right-0 bottom-0 py-1 px-2 bg-[#f1a33d] z-10 rounded-tl-xl">34% Off</span>
                                </div>
                                <p className='text-xl font-medium mt-2 overflow-ellipsis line-clamp-1  text-nowrap block' >Deals product complete name</p>
                                <p className='text-blue-800 font-medium mt-1 '>Get Qutation</p>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide >
                            <Link to="" className="w-full p-2 ">
                                <div className="bg-white  rounded-lg overflow-hidden p-2 relative">
                                    <img className='w-100 transition-all duration-300 hover:scale-[1.045]' src="images/category/1.png" alt="" />
                                    <span className="absolute text-[10px] right-0 bottom-0 py-1 px-2 bg-[#f1a33d] z-10 rounded-tl-xl">34% Off</span>
                                </div>
                                <p className='text-xl font-medium mt-2 overflow-ellipsis line-clamp-1  text-nowrap block' >Deals product complete name</p>
                                <p className='text-blue-800 font-medium mt-1 '>Get Qutation</p>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide >
                            <Link to="" className="w-full p-2 ">
                                <div className="bg-white  rounded-lg overflow-hidden p-2 relative">
                                    <img className='w-100 transition-all duration-300 hover:scale-[1.045]' src="images/category/1.png" alt="" />
                                    <span className="absolute text-[10px] right-0 bottom-0 py-1 px-2 bg-[#f1a33d] z-10 rounded-tl-xl">34% Off</span>
                                </div>
                                <p className='text-xl font-medium mt-2 overflow-ellipsis line-clamp-1  text-nowrap block' >Deals product complete name</p>
                                <p className='text-blue-800 font-medium mt-1 '>Get Qutation</p>
                            </Link>
                        </SwiperSlide>

                    </Swiper>
                </div>
              
            </div>
        </section>
    )
}

export default SuperDeals
