import React from 'react'
import { Link } from 'react-router-dom'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const TrendingPdCard = (props) => {
    return (
        <>
            <div className=" px-2 mb-4">
                <div className=" w-full flex gap-3 py-2">
                    <Link className='w-3/12' to={'/'}><img className='w-full transition-all duration-300 hover:scale-[1.046]' src={props.salePdImg} alt={props.salePdName} title={props.salePdName} /></Link>

                    <div className="w-9/12">
                        <Link className='text-lg mt-0 w-full items-center justify-between text-black font-medium overflow-ellipsis line-clamp-1  text-nowrap block transition-all duration-300 hover:text-blue-800' to=''><span className=' max-w-[88%]'>{props.salePdName}</span></Link>

                        <p className="md:text-lg text-[15px] mt-1 text-gray-500 font-medium flex  gap-2 items-center">&#x20B9;{props.salePrice} <span className='py-[5px] leading-none px-2 !text-[10px] font-medium bg-[red] rounded-[3px] text-white '>-26%</span></p>

                        <p className="mt-1 md:text-lg text-[11px]">1.5k+ Orders ~ <StarOutlinedIcon className='text-[#ffdd00]   md:!text-[22px] md:-mt-0 !text-[15px] -mt-1' /> 4.6 </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingPdCard
