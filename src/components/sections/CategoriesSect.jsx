import React from 'react'
import BtnLink from '../common/BtnLink'
import { Link } from 'react-router-dom'
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';

const CategoriesSect = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-wrap">
                    {/* left box */}
                    <div className="w-full lg:w-3/12 p-2">
                        <div className="w-full relative rounded-lg overflow-hidden">
                            <div className="absolute left-0 z-10 top-0 w-full h-full p-[8%] bg-[#0303035e]">
                                <p className="text-sm mb-2 uppercase font-medium text-white">Don't miss explore now</p>
                                <p className="text-3xl mb-2 font-medium text-white">Categories or service name here</p>
                                <BtnLink addClass="mt-6 block " Href='/' btnName='Explore More' />
                            </div>
                            <img className='w-full ' src="images/category/Image-01.jpg" alt="" />
                        </div>
                    </div>
                    {/* right box products */}
                    <div className="w-full lg:w-9/12 p-2">
                        <div className="flex flex-wrap">
                            {/* Single box */}
                            <div className="cat-ul-box w-full md:w-6/12 lg:w-4/12 px-2 mb-4">
                                <div className=" bg-[#efefed] rounded-lg w-full h-[208px] p-4">
                                    <Link className='text-lg w-full flex items-center justify-between text-black font-medium' to=''><span className='overflow-ellipsis line-clamp-1  text-nowrap block max-w-[88%]'>Write here subite here subite here sub category</span> <ReadMoreOutlinedIcon /></Link>
                                    <div className="flex items-end">
                                        <div className="w-[65%]">
                                            <ul className='w-full home-cat-ul'>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or servicect or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                            </ul>
                                            <ul className='w-full'>
                                                <li><Link className='text-blue-800 font-medium' to={'/'}> View All</Link></li>
                                            </ul>
                                        </div>
                                        <div className="w-[35%] pl-2 h-full flex items-end">
                                            <img className='w-full' src="images/category/1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single box */}
                            <div className="cat-ul-box w-full md:w-6/12 lg:w-4/12 px-2 mb-4">
                                <div className=" bg-[#efefed] rounded-lg w-full h-[208px] p-4">
                                    <Link className='text-lg w-full flex items-center justify-between text-black font-medium' to=''><span className='overflow-ellipsis line-clamp-1  text-nowrap block max-w-[88%]'>Write here subite here subite here sub category</span> <ReadMoreOutlinedIcon /></Link>
                                    <div className="flex items-end">
                                        <div className="w-[65%]">
                                            <ul className='w-full home-cat-ul'>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or servicect or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                            </ul>
                                            <ul className='w-full'>
                                                <li><Link className='text-blue-800 font-medium' to={'/'}> View All</Link></li>
                                            </ul>
                                        </div>
                                        <div className="w-[35%] pl-2 h-full flex items-end">
                                            <img className='w-full' src="images/category/1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single box */}
                            <div className="cat-ul-box w-full md:w-6/12 lg:w-4/12 px-2 mb-4">
                                <div className=" bg-[#efefed] rounded-lg w-full h-[208px] p-4">
                                    <Link className='text-lg w-full flex items-center justify-between text-black font-medium' to=''><span className='overflow-ellipsis line-clamp-1  text-nowrap block max-w-[88%]'>Write here subite here subite here sub category</span> <ReadMoreOutlinedIcon /></Link>
                                    <div className="flex items-end">
                                        <div className="w-[65%]">
                                            <ul className='w-full home-cat-ul'>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or servicect or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                            </ul>
                                            <ul className='w-full'>
                                                <li><Link className='text-blue-800 font-medium' to={'/'}> View All</Link></li>
                                            </ul>
                                        </div>
                                        <div className="w-[35%] pl-2 h-full flex items-end">
                                            <img className='w-full' src="images/category/1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single box */}
                            <div className="cat-ul-box w-full md:w-6/12 lg:w-4/12 px-2 mb-4">
                                <div className=" bg-[#efefed] rounded-lg w-full h-[208px] p-4">
                                    <Link className='text-lg w-full flex items-center justify-between text-black font-medium' to=''><span className='overflow-ellipsis line-clamp-1  text-nowrap block max-w-[88%]'>Write here subite here subite here sub category</span> <ReadMoreOutlinedIcon /></Link>
                                    <div className="flex items-end">
                                        <div className="w-[65%]">
                                            <ul className='w-full home-cat-ul'>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or servicect or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                            </ul>
                                            <ul className='w-full'>
                                                <li><Link className='text-blue-800 font-medium' to={'/'}> View All</Link></li>
                                            </ul>
                                        </div>
                                        <div className="w-[35%] pl-2 h-full flex items-end">
                                            <img className='w-full' src="images/category/1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single box */}
                            <div className="cat-ul-box w-full md:w-6/12 lg:w-4/12 px-2 mb-4">
                                <div className=" bg-[#efefed] rounded-lg w-full h-[208px] p-4">
                                    <Link className='text-lg w-full flex items-center justify-between text-black font-medium' to=''><span className='overflow-ellipsis line-clamp-1  text-nowrap block max-w-[88%]'>Write here subite here subite here sub category</span> <ReadMoreOutlinedIcon /></Link>
                                    <div className="flex items-end">
                                        <div className="w-[65%]">
                                            <ul className='w-full home-cat-ul'>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or servicect or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                            </ul>
                                            <ul className='w-full'>
                                                <li><Link className='text-blue-800 font-medium' to={'/'}> View All</Link></li>
                                            </ul>
                                        </div>
                                        <div className="w-[35%] pl-2 h-full flex items-end">
                                            <img className='w-full' src="images/category/1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single box */}
                            <div className="cat-ul-box w-full md:w-6/12 lg:w-4/12 px-2 mb-4">
                                <div className=" bg-[#efefed] rounded-lg w-full h-[208px] p-4">
                                    <Link className='text-lg w-full flex items-center justify-between text-black font-medium' to=''><span className='overflow-ellipsis line-clamp-1  text-nowrap block max-w-[88%]'>Write here subite here subite here sub category</span> <ReadMoreOutlinedIcon /></Link>
                                    <div className="flex items-end">
                                        <div className="w-[65%]">
                                            <ul className='w-full home-cat-ul'>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or servicect or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                            </ul>
                                            <ul className='w-full'>
                                                <li><Link className='text-blue-800 font-medium' to={'/'}> View All</Link></li>
                                            </ul>
                                        </div>
                                        <div className="w-[35%] pl-2 h-full flex items-end">
                                            <img className='w-full' src="images/category/1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single box */}
                            <div className="cat-ul-box w-full md:w-6/12 lg:w-4/12 px-2 mb-4">
                                <div className=" bg-[#efefed] rounded-lg w-full h-[208px] p-4">
                                    <Link className='text-lg w-full flex items-center justify-between text-black font-medium' to=''><span className='overflow-ellipsis line-clamp-1  text-nowrap block max-w-[88%]'>Write here subite here subite here sub category</span> <ReadMoreOutlinedIcon /></Link>
                                    <div className="flex items-end">
                                        <div className="w-[65%]">
                                            <ul className='w-full home-cat-ul'>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or servicect or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                            </ul>
                                            <ul className='w-full'>
                                                <li><Link className='text-blue-800 font-medium' to={'/'}> View All</Link></li>
                                            </ul>
                                        </div>
                                        <div className="w-[35%] pl-2 h-full flex items-end">
                                            <img className='w-full' src="images/category/1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single box */}
                            <div className="cat-ul-box w-full md:w-6/12 lg:w-4/12 px-2 mb-4">
                                <div className=" bg-[#efefed] rounded-lg w-full h-[208px] p-4">
                                    <Link className='text-lg w-full flex items-center justify-between text-black font-medium' to=''><span className='overflow-ellipsis line-clamp-1  text-nowrap block max-w-[88%]'>Write here subite here subite here sub category</span> <ReadMoreOutlinedIcon /></Link>
                                    <div className="flex items-end">
                                        <div className="w-[65%]">
                                            <ul className='w-full home-cat-ul'>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or servicect or service name</Link></li>
                                                <li className='overflow-ellipsis line-clamp-1  text-nowrap block'><Link to={'/'}>Product or service name</Link></li>
                                            </ul>
                                            <ul className='w-full'>
                                                <li><Link className='text-blue-800 font-medium' to={'/'}> View All</Link></li>
                                            </ul>
                                        </div>
                                        <div className="w-[35%] pl-2 h-full flex items-end">
                                            <img className='w-full' src="images/category/1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoriesSect
