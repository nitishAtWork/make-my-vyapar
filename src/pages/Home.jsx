import React, { lazy, Suspense } from 'react'
const Nav = lazy(() => import('../components/header/Nav'));
const Banner = lazy(() => import('../components/sections/Banner'));
const SuperDeals = lazy(() => import('../components/sections/SuperDeals'));
const CitySlide = lazy(() => import('../components/sections/CitySlide'));
const TrendingCategories = lazy(() => import('../components/sections/TrendingCategories'));
const CategoriesSect = lazy(() => import('../components/sections/CategoriesSect'));
const CategoriesSect2 = lazy(() => import('../components/sections/CategoriesSect2'));
const SaleProductSect = lazy(() => import('../components/sections/SaleProductSect'));
const VendorTabSect = lazy(() => import('../components/sections/VendorTabSect'));
const ContactSect = lazy(() => import('../components/sections/ContactSect'));
const Footer = lazy(() => import('../components/sections/Footer'));
const TestimonialSect = lazy(() => import('../components/sections/TestimonialSect'));

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <SuperDeals />
      <TrendingCategories />
      <CitySlide />
      <CategoriesSect />
      <SaleProductSect />
      {/* <CategoriesSect2 /> */}
      <VendorTabSect />
      <TestimonialSect />
      {/* <ContactSect /> */}
      <Footer />
    </>
  )
}

export default Home
