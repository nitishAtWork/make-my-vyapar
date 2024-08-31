import React from 'react'
import { Link } from 'react-router-dom'
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';

const SubCategoryCard = (props) => {
    return (
        <>
            {/* Single box */}
            <div className="cat-ul-box w-full md:w-6/12 lg:w-4/12 px-2 mb-4">
            {/* bg-[#efefed] */}
                <div className=" bg-white rounded-lg w-full h-[208px] p-4">
                    <Link className='text-lg w-full flex items-center justify-between text-black font-medium' to=''><span className='overflow-ellipsis line-clamp-1  text-nowrap block max-w-[88%]'>{props.subCatName}</span> <ReadMoreOutlinedIcon /></Link>
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
        </>
    )
}

export default SubCategoryCard
