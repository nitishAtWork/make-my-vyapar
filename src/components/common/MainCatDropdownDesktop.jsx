import React from 'react'
import { Link } from 'react-router-dom';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const MainCatDropdownDesktop = () => {
    return (
        <>
            <li className=' cat-list flex gap-1 items-center pl-2 pr-[18px] transition-all hover:shadow-[0px_0px_8px_rgba(0,0,0,0.3)] group/item2 relative'>
                <Link className="border-b py-2 relative border-slate-300 flex gap-1 items-center w-full transition-all duration-300 group/arrow group-hover/item2:translate-x-2 " to="/"><img width={25} height={25} src="images/icons/homesupplies.svg" alt="" /><span className='overflow-ellipsis line-clamp-1  text-nowrap block max-w-[70%]'>Home supplies for test big content</span><KeyboardArrowRightOutlinedIcon className='absolute bg-[#efefed] transition-all duration-500 right-1 top-2 z-10 group-hover/arrow:rotate-90' /></Link>
                {/* Categories box */}
                <ul className='sub-cat absolute z-10 xl:-right-[798px]  xl:w-[788px] lg:-right-[68vw]  lg:w-[68vw] md:-right-[56vw]  md:w-[56vw] sm:flex hidden max-h-[440px] overflow-y-auto bg-[#fffffffa]  p-3 flex-wrap transition-all duration-300 ease-in-out scale-x-0 origin-left  md:group-hover/item2:scale-x-100'>
                    {/* Categories */}
                    <li className='w-12/12 lg:w-4/12 md:w-6/12 p-2'>
                        <Link to={'/'} className="text-lg font-medium text-blue-500 h-[30px] overflow-ellipsis line-clamp-1 "><ListOutlinedIcon /> Sub Categories name here it could not take more space</Link>
                        <ul className='w-100'>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                        </ul>
                    </li>
                    {/* Categories */}
                    <li className='w-12/12 lg:w-4/12 md:w-6/12 p-2'>
                        <Link to={'/'} className="text-lg font-medium text-blue-500 h-[30px] overflow-ellipsis line-clamp-1 "><ListOutlinedIcon /> Sub Categories name here it could not take more space</Link>
                        <ul className='w-100'>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                        </ul>
                    </li>
                    {/* Categories */}
                    <li className='w-12/12 lg:w-4/12 md:w-6/12 p-2'>
                        <Link to={'/'} className="text-lg font-medium text-blue-500 h-[30px] overflow-ellipsis line-clamp-1 "><ListOutlinedIcon /> Sub Categories name here it could not take more space</Link>
                        <ul className='w-100'>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                        </ul>
                    </li>
                    {/* Categories */}
                    <li className='w-12/12 lg:w-4/12 md:w-6/12 p-2'>
                        <Link to={'/'} className="text-lg font-medium text-blue-500 h-[30px] overflow-ellipsis line-clamp-1 "><ListOutlinedIcon /> Sub Categories name here it could not take more space</Link>
                        <ul className='w-100'>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                        </ul>
                    </li>

                    {/* Categories */}
                    <li className='w-12/12 lg:w-4/12 md:w-6/12 p-2'>
                        <Link to={'/'} className="text-lg font-medium text-blue-500 h-[30px] overflow-ellipsis line-clamp-1 "><ListOutlinedIcon /> Sub Categories name here it could not take more space</Link>
                        <ul className='w-100'>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                        </ul>
                    </li>

                    {/* Categories */}
                    <li className='w-12/12 lg:w-4/12 md:w-6/12 p-2'>
                        <Link to={'/'} className="text-lg font-medium text-blue-500 h-[30px] overflow-ellipsis line-clamp-1 "><ListOutlinedIcon /> Sub Categories name here it could not take more space</Link>
                        <ul className='w-100'>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                        </ul>
                    </li>

                    {/* Categories */}
                    <li className='w-12/12 lg:w-4/12 md:w-6/12 p-2'>
                        <Link to={'/'} className="text-lg font-medium text-blue-500 h-[30px] overflow-ellipsis line-clamp-1 "><ListOutlinedIcon /> Sub Categories name here it could not take more space</Link>
                        <ul className='w-100'>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                        </ul>
                    </li>

                    {/* Categories */}
                    <li className='w-12/12 lg:w-4/12 md:w-6/12 p-2'>
                        <Link to={'/'} className="text-lg font-medium text-blue-500 h-[30px] overflow-ellipsis line-clamp-1 "><ListOutlinedIcon /> Sub Categories name here it could not take more space</Link>
                        <ul className='w-100'>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                            <li><Link to={'/'}>Product or service name</Link></li>
                        </ul>
                    </li>

                </ul>
            </li>
        </>
    )
}

export default MainCatDropdownDesktop
