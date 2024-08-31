import React from 'react'
import BtnLink from './BtnLink'

const MainCategoryCard = (props) => {
    return (
        <div className="w-full relative rounded-lg overflow-hidden">
            <div className="absolute left-0 z-10 top-0 w-full h-full p-[8%] bg-[#0303035e]">
                <p className="text-sm mb-2 uppercase font-medium text-white">{props.catSmTitle}</p>
                <p className="text-3xl mb-2 font-medium text-white">{props.catName}</p>
                <BtnLink addClass="mt-6 block " Href='/' btnName='Explore More' />
            </div>
            <img className='w-full h-[auto] lg:h-[430px] xl:h-[auto]' src={props.mainCatImg} alt="" />
        </div>
    )
}

export default MainCategoryCard
