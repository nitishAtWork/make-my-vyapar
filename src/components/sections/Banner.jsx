import React, { lazy, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
const CitySlide = lazy(() => import('./CitySlide'));
const MainCatDropdownDesktop = lazy(() => import('../common/MainCatDropdownDesktop'));

const Banner = () => {

  // useEffect(() => {
  //     console.log(scrollTop);
  // }, []);

  return (
    <>
      <section className="bg-white border border-[#eee]">
        <div className="flex flex-wrap container p-3 ">
          {/* Main Categories box*/}
          <div className="relative 2xl:w-3/12 xl:w-3/12 lg:w-3/12 md:w-4/12 w-full rounded-sm p-[10px] ">
            {/* <p className='text-lg font-medium flex gap-1 items-center mb-1'><MenuOpenOutlinedIcon />BROWSE CATEGORIES</p>
            <ul className=' '>
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
              <MainCatDropdownDesktop />
            </ul> */}

            {/* View All Categories */}
            <ul className='hidden'>
              <li className=' cat-list flex gap-1 items-center pl-2 pr-[18px] transition-all hover:shadow-[0px_0px_8px_rgba(0,0,0,0.3)] group/item2 relative'>
                <Link className="border-b py-2 relative border-slate-300 flex gap-1 items-center w-full transition-all duration-300 group/arrow group-hover/item2:translate-x-2" to="/"><img width={25} height={25} src="images/icons/icon_all_categories.svg" alt="" /> View All Categories<PlaylistAddOutlinedIcon className='absolute transition-all duration-500 right-1 top-2 z-10 group-hover/arrow:text-green-500' /></Link>
                {/* Categories box */}
                <ul className=' absolute -right-[818px] -top-[400px] z-10 w-[818px] h-[440px] max-h-[450px] overflow-y-auto bg-[#fffffffa] flex p-3 flex-wrap transition-all duration-300 ease-in-out scale-x-0 origin-left  group-hover/item2:scale-x-100'>
                  {/* Categories */}
                  <li className=' p-2'>
                    <Link to={'/'} className="text-lg font-medium text-blue-500 h-[30px] overflow-ellipsis line-clamp-1 "><ListOutlinedIcon />  View All Categories </Link>
                    <ul className='w-100 flex flex-wrap gap-2'>
                      <li className='flex gap-2'><Link to={'/'}>Categories name</Link> <span>/</span></li>
                      <li className='flex gap-2'><Link to={'/'}>Categories name</Link> <span>/</span></li>
                      <li className='flex gap-2'><Link to={'/'}>Categories name</Link> <span>/</span></li>
                      <li className='flex gap-2'><Link to={'/'}>Categories name</Link> <span>/</span></li>
                      <li className='flex gap-2'><Link to={'/'}>Categories name</Link> <span>/</span></li>
                      <li className='flex gap-2'><Link to={'/'}>Categories name</Link> <span>/</span></li>
                    </ul>
                  </li>

                </ul>
              </li>
            </ul>

          </div>
          {/* Banne Section */}
          <div className=" 2xl:w-9/12 xl:w-9/12 lg:w-9/12 md:w-8/12 w-full">
            <div className="flex">
              {/* Banner Big  <div className=" 2xl:w-8/12 xl:w-8/12  w-full p-[5px] pl-0"> */}
              <div className=" relative w-full ">
                <img className='absolute right-0 top-0 w-[86%] h-auto' src="images/bg/banner-shape.png" alt="banner-shape" title='banner-shape' />
                <div className='banner-home-page w-full pb-[80px]'>
                  <Swiper
                    autoplay={{
                      delay: 8500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1200}
                    navigation={{
                      prevEl: '.prev-slide',
                      nextEl: '.next-slide',
                    }}
                    modules={[FreeMode, Autoplay, Navigation]}
                    className="home-slider hero-slide-h w-full">

                    <SwiperSlide >
                      <div className="w-full flex flex-wrap ">
                        <div className="md:w-6/12 flex items-center">
                          <div className="flex py-10 flex-wrap items-center pl-5">
                            <p className="text-md lg:text-lg font-bold">Deal with: <span className='text-[red]'> Make My Vyapar</span></p>
                            <p className=" ban-tx1 block w-full text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[black]">
                              Become a product dealer supplier to sell and buy products 
                            </p>
                            <p className="mt-2 ban-tx2 block w-full text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[red]">GROW WITH US</p>
                            <div className="mt-6 ban-btn">
                              <Link to={'/'} className="py-4 px-4 gap-2  rounded-[8px] bg-[black] leading-none text-white flex transition-all duration-300 hover:bg-[red] hover:text-white"><StorefrontOutlinedIcon className=' !h-[19px] w-[5px] -mt-[2px] leading-none ' /> Sell Products</Link>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-6/12 ">
                          <img className='rounded-lg w-[74%] m-auto block mb-4 sm:w-full ban-img' src="images/banner/1.png" alt="Banner" title='Banner' />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide >
                      <div className="w-full flex flex-wrap ">
                        <div className="md:w-6/12 flex items-center">
                          <div className="flex py-10 flex-wrap items-center pl-5">
                            <p className="text-md lg:text-lg font-bold">Deal with: <span className='text-[red]'> Make My Vyapar</span></p>
                            <p className=" ban-tx1 block w-full text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[black]">
                              Become a product dealer supplier to sell and buy products 
                            </p>
                            <p className="mt-2 ban-tx2 block w-full text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[red]">GROW WITH US</p>
                            <div className="mt-6 ban-btn">
                              <Link to={'/'} className="py-4 px-4 gap-2  rounded-[8px] bg-[black] leading-none text-white flex transition-all duration-300 hover:bg-[red] hover:text-white"><StorefrontOutlinedIcon className=' !h-[19px] w-[5px] -mt-[2px] leading-none ' /> Sell Products</Link>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-6/12 ">
                          <img className='rounded-lg w-[74%] m-auto block mb-4 sm:w-full ban-img' src="images/banner/1.png" alt="Banner" title='Banner' />
                        </div>
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </div>
              </div>
              {/* Banner Small */}
              {/* <div className=" 2xl:w-4/12 xl:w-4/12  lg:block  hidden w-full p-[5px] pl-3">
                <div className="rounded-lg mb-3 overflow-hidden relative">
                  <div to={'/'} className="absolute top-0 left-0 w-full h-full p-5">
                    <Link className='max-w-[65%] block text-xl italic' to={'/'}>Looking for products</Link>
                    <Link className='mt-4 block border border-2 w-fit shadow-[0px_2px] border-blue-900 px-4 py-2 rounded-full text-md transition-all duration-300 font-semibold hover:bg-white hover:text-black ' to={'/'}>Post Requirements</Link>
                  </div>
                  <img className='w-full' src="images/img/ban-sm.png" alt="Banner" title='Banner' />
                </div>
                <div className="rounded-lg overflow-hidden relative">
                  <div to={'/'} className="absolute top-0 left-0 w-full h-full p-5">
                    <Link className='max-w-[65%] block text-xl italic' to={'/'}>Do you want to sell products?</Link>
                    <Link className='mt-4 block border border-2 w-fit shadow-[0px_2px] border-blue-900 px-4 py-2 rounded-full text-md transition-all duration-300 font-semibold hover:bg-white hover:text-black ' to={'/'}>Add Products To Sell</Link>
                  </div>
                  <img className='w-full' src="images/img/ban-sm.png" alt="Banner" title='Banner' />
                </div>
              </div> */}
            </div>
          </div>

        </div>
        {/* <CitySlide /> */}
      </section>
    </>
  )
}

export default Banner
