import React from 'react'
import SocialsComp from '../common/SocialsComp'
import TouchAppIcon from '@mui/icons-material/TouchApp';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Footer = () => {
    return (
        <footer className='Footer-sect'>
            <div className="p-4 bg-slate-300">
                <div className="container">
                    <div className="flex flex-wrap items-center">
                        <div className="lg:w-5/12 p-2">
                            <SocialsComp />
                        </div>
                        <div className="lg:w-7/12 p-2">
                            <div className="md:flex items-center">
                                <p className='text-2xl md:mb-0 mb-2 mr-3 mb-0 leading-none'>Get the latest deals and more.</p>
                                <div className="flex">
                                    <input className='md:w-auto w-[190px] px-5 text-black py-2 border-none outline-none bg-white  rounded-tl-[35px] rounded-bl-[35px]' type="text" placeholder='Email*' />
                                    <button className='py-[11.5px] px-4  bg-blue-900 leading-none text-white flex gap-1 transition-all duration-300 hover:bg-[black] hover:text-white w-fit  rounded-tr-[35px] rounded-br-[35px]'>Subscribe<TouchAppIcon className=' !h-[19px] w-[5px] -mt-[2px] leading-none ' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex mt-6 flex-wrap ">
                    <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 w-full mb-4 p-2">
                        <p className="text-2xl font-semibold mb-3">Information</p>
                        <ul className='ul-Link'>
                            <li className='mb-1'><Link to=''>About</Link></li>
                            <li className='mb-1'><Link to=''>Delivery Information</Link></li>
                            <li className='mb-1'><Link to=''>Privacy Policy</Link></li>
                            <li className='mb-1'><Link to=''>Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 w-full mb-4 p-2">
                        <p className="text-2xl font-semibold mb-3">Best Deals</p>
                        <ul className='ul-Link'>
                            <li className='mb-1'><Link to=''>Super Deals</Link></li>
                            <li className='mb-1'><Link to=''>Today TOP Deal</Link></li>
                            <li className='mb-1'><Link to=''>Bestsellers</Link></li>
                            <li className='mb-1'><Link to=''>Specials</Link></li>
                        </ul>
                    </div>

                    <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 w-full mb-4 p-2">
                        <p className="text-2xl font-semibold mb-3">Customer Service</p>
                        <ul className='ul-Link'>
                            <li className='mb-1'><Link to=''>Contact Us</Link></li>
                            <li className='mb-1'><Link to=''>Returns policy</Link></li>
                            <li className='mb-1'><Link to=''>Site Map</Link></li>
                            <li className='mb-1'><Link to=''>Affiliate program</Link></li>
                        </ul>
                    </div>

                    <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 w-full mb-4 p-2">
                        <p className="text-2xl font-semibold mb-3">Information</p>
                        <ul className='ul-Link'>
                            <li className='mb-1'><Link to=''>My Account</Link></li>
                            <li className='mb-1'><Link to=''>Order History</Link></li>
                            <li className='mb-1'><Link to=''>Wish List</Link></li>
                            <li className='mb-1'><Link to=''>Newsletter</Link></li>
                        </ul>
                    </div>

                    <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 w-full mb-4 p-2">
                        <p className="text-2xl font-semibold mb-3">For Seller</p>
                        <ul className='ul-Link'>
                            <li className='mb-1'><Link to=''>Sell With Us</Link></li>
                            <li className='mb-1'><Link to=''>Latest BuyLead</Link></li>
                            <li className='mb-1'><Link to=''>Learning Centre</Link></li>
                            <li className='mb-1'><Link to=''>Ship With IndiaMART</Link></li>
                        </ul>
                    </div>

                    <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 w-full mb-4 p-2">
                        <p className="text-2xl font-semibold mb-3">For Buyer</p>
                        <ul className='ul-Link'>
                            <li className='mb-1'><Link to=''>Post Your Requirement</Link></li>
                            <li className='mb-1'><Link to=''>Products You Buy</Link></li>
                            <li className='mb-1'><Link to=''>Search Products </Link></li>
                            <li className='mb-1'><Link to=''>Search Suppliers</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="my-5 py-4 border-b border-t">
                <div className="container ">
                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="lg:w-2/12 md:w-4/12 sm:w-5/12 w-full ">
                            <Link to={''}><img className='max-h-[55px] max-w-full' src="./mmv-logo.png" alt="Phone" /></Link>
                        </div>
                        <div className="lg:w-4/12 ml-2 md:w-8/12 sm:w-7/12 w-full">
                            <div className="flex gap-3 items-center">
                                <img className='min-w-[40px]' src="images/icons/headphone.jpg" alt="Headphone" />
                                <div>
                                    <div className="flex">
                                        <span className='text-xl font-medium'>Need help? Call us:</span>
                                        <Link className='text-xl font-medium' to="">+91 00000 00000</Link>
                                    </div>
                                    <span className="text-gray-400 text-sm">Monday - Friday: 8:00 - 21:00 Saturday - Sunday 9:00 - 18:00</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-auto w-full">
                            <Link to={''} className='py-[11.5px] px-4 rounded-[40px] bg-blue-900 leading-none text-white flex gap-1 transition-all duration-300 hover:bg-[black] hover:text-white w-fit '><MessageOutlinedIcon className=' !h-[19px] w-[5px] leading-none ' />Message Us</Link>
                        </div>
                        <div className="md:w-auto w-full flex items-center">
                            <span className='text-xl font-semibold'>Pay Using : </span>
                            <img className='max-h-[32px] ml-1' src="images/icons/Payment.png" alt="Payment" title='Payment' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-6 container">
                <div className="Brands-slide">
                    {/* <div className="min-w-[140px]">
                        <span className='text-xl font-semibold'>Brands: </span>
                    </div> */}
                    <Swiper
                        loop={true}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        // navigation={true}
                        // navigation={{
                        //   prevEl: '.prev-slide',
                        //   nextEl: '.next-slide',
                        // }}
                        breakpoints={{
                            240: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 18,
                            },
                            868: {
                                slidesPerView: 5,
                                spaceBetween: 25,
                            },
                            1224: {
                                slidesPerView: 6,
                                spaceBetween: 32,
                            },
                            1424: {
                                slidesPerView: 8,
                                spaceBetween: 42,
                            },
                        }}
                        modules={[Autoplay, Navigation]}
                        className="brand-slider">

                        <SwiperSlide >
                            <img className='w-full' src="images/brands/1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='w-full' src="images/brands/4.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='w-full' src="images/brands/2.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='w-full' src="images/brands/5.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='w-full' src="images/brands/6.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='w-full' src="images/brands/4.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='w-full' src="images/brands/2.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='w-full' src="images/brands/5.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='w-full' src="images/brands/6.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='w-full' src="images/brands/4.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='w-full' src="images/brands/2.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='w-full' src="images/brands/5.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className='w-full' src="images/brands/6.jpg" alt="" />
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>
            <div className="text-center py-4 text-black bg-[#fcbd04]"><span>Copyright © 2020- 2024 Make My Vyapar. All Rights Reserved. Managed by Instant Web Technology PVT LTD.</span></div>
        </footer>
    )
}

export default Footer
