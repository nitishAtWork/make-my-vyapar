import React, { lazy, Suspense } from 'react'
const Nav = lazy(() => import('../components/header/Nav'));
const Banner = lazy(() => import('../components/sections/Banner'));
const SuperDeals = lazy(() => import('../components/sections/SuperDeals'));
const CitySlide = lazy(() => import('../components/sections/CitySlide'));
const TrendingCategories = lazy(() => import('../components/sections/TrendingCategories'));
const CategoriesSect = lazy(() => import('../components/sections/CategoriesSect'));

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <SuperDeals />
      <TrendingCategories />
      <CitySlide />
      <CategoriesSect />
      <CategoriesSect />
      {/* <div className="container relative">
        <div className="w-full h-full absolute left-0 top-0 z-10 bg-[#0000005e] flex items-center justify-center">
          <span className="text-4xl text-white">Monst demanding products</span>
        </div>
        <img className='w-full' src="images/img/solar.gif" alt="" />
      </div> */}
    </>
  )
}

export default Home
