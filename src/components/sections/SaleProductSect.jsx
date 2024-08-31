import React from 'react'
import { Link } from 'react-router-dom';
import MainCategoryCard from '../common/MainCategoryCard';
import SaleProductCard from '../common/SaleProductCard';
import TrendingPdCard from '../common/TrendingPdCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const SaleProductSect = () => {
    return (
        <section className='pt-6'>
            <div className="container">
                <div className="flex flex-wrap">
                    {/* left box */}
                    <div className="w-full lg:w-3/12 p-2">
                        <div className=' w-full '>
                            <Swiper
                                loop={true}
                                speed={1000}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                pagination={true}
                                clickable={"true"}
                                modules={[Pagination, Autoplay, Navigation]}
                                className="sale-cat-slider">

                                <SwiperSlide >
                                    <MainCategoryCard
                                        catSmTitle="Don't miss sale explore now"
                                        catName="Categories or service name here"
                                        mainCatImg="images/category/Image-01.jpg"
                                    />
                                </SwiperSlide>

                                <SwiperSlide >
                                    <MainCategoryCard
                                        catSmTitle="Don't miss the sale"
                                        catName="Categories or service name here"
                                        mainCatImg="images/category/left-cat-img.jpg"
                                    />
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <p className="text-2xl font-medium my-5">Trending Products.</p>
                        {/* single */}
                        <TrendingPdCard
                            salePdImg="images/products/pd2.png"
                            salePdName="Sale prouct name here"
                            salePrice="4,000"
                        />
                        {/* single */}
                        <TrendingPdCard
                            salePdImg="images/products/pd3.png"
                            salePdName="Sale prouct name here"
                            salePrice="4,000"
                        />
                        {/* single */}
                        <TrendingPdCard
                            salePdImg="images/products/pd4.png"
                            salePdName="Sale prouct name here"
                            salePrice="4,000"
                        />
                        {/* single */}
                        <TrendingPdCard
                            salePdImg="images/products/pd5.png"
                            salePdName="Sale prouct name here"
                            salePrice="4,000"
                        />
                    </div>
                    {/* right box products */}
                    <div className="w-full lg:w-9/12 p-2">
                        <div className="overflow-hidden px-2 pt-0 pb-5">
                            <Link to="" className="w-full">  <img className='w-full rounded-xl ' src="images/bg/cat-sm-ban.jpg" alt="category ban small" title='category ban small' /></Link>
                        </div>
                        <p className="text-2xl font-medium my-5 pl-2"><span className='text-[red] font-bold italic'>Sale</span> of the Season !</p>
                        <div className="flex flex-wrap w-full">
                            {/* sale card */}
                            <SaleProductCard
                                salePdImg="images/products/pd1.jpg"
                                salePdName="Sale prouct name here"
                                salePrice="4,000"
                            />
                            {/* sale card */}
                            <SaleProductCard
                                salePdImg="images/products/pd2.jpg"
                                salePdName="Sale prouct name here"
                                salePrice="1,000"
                            />
                            {/* sale card */}
                            <SaleProductCard
                                salePdImg="images/products/pd3.jpg"
                                salePdName="Sale prouct name here"
                                salePrice="4,000"
                            />
                            {/* sale card */}
                            <SaleProductCard
                                salePdImg="images/products/pd4.jpg"
                                salePdName="Sale prouct name here"
                                salePrice="6,000"
                            />
                            {/* sale card */}
                            <SaleProductCard
                                salePdImg="images/products/pd3.jpg"
                                salePdName="Sale prouct name here"
                                salePrice="8,000"
                            />
                            {/* sale card */}
                            <SaleProductCard
                                salePdImg="images/products/pd1.jpg"
                                salePdName="Sale prouct name here"
                                salePrice="50,000"
                            />
                            {/* sale card */}
                            <SaleProductCard
                                salePdImg="images/products/pd1.jpg"
                                salePdName="Sale prouct name here"
                                salePrice="4,000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SaleProductSect
