import React from 'react'
import { Link } from 'react-router-dom'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const TrendingCatCard = (props) => {
    return (
        <>
            {/* single cat */}
            <div className="w-full xl:w-3/12 lg:w-4/12 md:w-6/12 p-2 mb-2">
                <div className="w-full bg-[#cddc39] transition-all duration-300 hover:bg-white p-2 rounded-lg overflow-hidden shadow-[0px_0px_4px_gray] py-8">
                    <Link to="/" className="flex">
                        <div className="w-6/12">
                            <img className='w-full'  src={props.catImg} alt="" />
                        </div>
                        <div className="w-6/12 px-1 py-2">
                            <p className="mb-3 font-medium text-black uppercase">
                                {props.catName}
                            </p>
                            <p className='px-3  border bg-white border-slate-400 w-fit flex items-center gap-2 py-2 rounded-md   text-sm transition-all duration-300 hover:bg-[#1b1b78] hover:text-white'>Explore Now <ArrowRightOutlinedIcon className='bg-[#bbbbbd] text-sm rounded-full !h-[16px] !w-[16px] text-white' /></p>
                        </div>
                    </Link>
                </div>
            </div>
            {/* single cat */}
        </>
    )
}

export default TrendingCatCard
