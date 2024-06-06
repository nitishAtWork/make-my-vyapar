import React from 'react'
import { Link } from 'react-router-dom'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import TrendingCatCard from '../common/TrendingCatCard';

const TrendingCategories = () => {
    return (
        <section className='py-[21px]'>
            <div className="container">
                <p className="relative text-xl text-center font-medium uppercase my-3 before:content-[' '] before:absolute before:left-0 before:right-0 before:m-auto before:top-[14px] before:h-[2px] before:w-[99%] before:bg-[#c9c9c9] "><span className='bg-white relative z-10'>Trending Categories</span></p>
                <div className="flex flex-wrap">
                    {/* single cat */}
                    <TrendingCatCard catImg='images/category/1.png' catName='CATCH BIG DEALS ON THE CAMERAS' />
                    {/* single cat */}
                    <TrendingCatCard catImg='images/category/1.png' catName='CATCH BIG DEALS ON THE CAMERAS' />
                    {/* single cat */}
                    <TrendingCatCard catImg='images/category/1.png' catName='CATCH BIG DEALS ON THE CAMERAS' />
                    {/* single cat */}
                    <TrendingCatCard catImg='images/category/1.png' catName='CATCH BIG DEALS ON THE CAMERAS' />
                    {/* single cat */}
                    <TrendingCatCard catImg='images/category/1.png' catName='CATCH BIG DEALS ON THE CAMERAS' />
                    {/* single cat */}
                    <TrendingCatCard catImg='images/category/1.png' catName='CATCH BIG DEALS ON THE CAMERAS' />
                    {/* single cat */}
                    <TrendingCatCard catImg='images/category/1.png' catName='CATCH BIG DEALS ON THE CAMERAS' />
                    {/* single cat */}
                    <TrendingCatCard catImg='images/category/1.png' catName='CATCH BIG DEALS ON THE CAMERAS' />
                  

                </div>
            </div>
        </section>
    )
}

export default TrendingCategories
