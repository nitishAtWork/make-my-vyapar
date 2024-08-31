import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const TestimonialSect = () => {
    return (
        <section className=' bg-slate-100'>
            <div className="container  py-8">
                <div className="flex items-center flex-wrap">
                    <div className="lg:w-5/12 w-full p-2">
                        <img src="images/gif/online-world.svg" alt="online-world" />
                    </div>
                    <div className="lg:w-7/12 w-full p-2 lg:pl-10 ">
                        <p className='text-3xl font-medium ml-3 mb-5'>What Our Clients Say</p>
                        <div className="bg-white md:rounded-[24px] rounded-[14px] md:rounded-bl-none rounded-bl-none md:p-8 p-4 shadow-[13px_13px_51px_0px_#e0e0e0]">

                        <Swiper
                            loop={true}
                            speed={800}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            // navigation={true}
                            // navigation={{
                            //   prevEl: '.prev-slide',
                            //   nextEl: '.next-slide',
                            // }}
                            breakpoints={{
                                240: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                868: {
                                    slidesPerView: 1,
                                    spaceBetween: 15,
                                },
                                1224: {
                                    slidesPerView: 1,
                                    spaceBetween: 18,
                                },
                                1424: {
                                    slidesPerView: 1,
                                    spaceBetween: 18,
                                },
                            }}
                            modules={[Autoplay, Navigation]}
                            className="testi-slider">

                            <SwiperSlide >
                           
                                    <div className="flex md:gap-6 gap-3">
                                        <div className="md:min-w-[50px] md:w-[50px] w-[30px] min-w-[30px]">
                                            <img className="pl-1 w-full rotate-180" src="images/icons/quotes.png" alt="quotes" />
                                        </div>
                                        <div className="">
                                            <p className='md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa, libero ut, eos maxime a est placeat modi maiores culpa error asperiores alias necessitatibus eveniet soluta. Reiciendis aspernatur est quod? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi atque nobis ipsum voluptas error maxime tempora eveniet obcaecati!</p>
                                            <div className="flex gap-4 mt-4 items-center">
                                                <img className='w-[60px] rounded-full' src="images/testi/1.jpg" alt="Testi" title='Testi' />
                                                <div>
                                                    <p className="text-lg font-medium leading-none pb-1 text-blue-950">Client Name</p>
                                                    <span className='text-gray-400'>Customer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                  
                            </SwiperSlide>
                            <SwiperSlide >
                           
                                    <div className="flex md:gap-6 gap-3">
                                        <div className="md:min-w-[50px] md:w-[50px] w-[30px] min-w-[30px]">
                                            <img className="pl-1 w-full rotate-180" src="images/icons/quotes.png" alt="quotes" />
                                        </div>
                                        <div className="">
                                            <p className='md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa, libero ut, eos maxime a est placeat modi maiores culpa error asperiores alias necessitatibus eveniet soluta. Reiciendis aspernatur est quod? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi atque nobis ipsum voluptas error maxime tempora eveniet obcaecati!</p>
                                            <div className="flex gap-4 mt-4 items-center">
                                                <img className='w-[60px] rounded-full' src="images/testi/1.jpg" alt="Testi" title='Testi' />
                                                <div>
                                                    <p className="text-lg font-medium leading-none pb-1 text-blue-950">Client Name</p>
                                                    <span className='text-gray-400'>Customer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                  
                            </SwiperSlide>

                        </Swiper>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSect
