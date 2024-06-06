import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import MainCatDropdownDesktop from '../common/MainCatDropdownDesktop';
import { WarehouseOutlined, WarehouseRounded } from '@mui/icons-material';

const Nav = () => {
    const [stickyCount, setStickyCount] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    // const [menuOpen, setMenuOpen] = useState(true);

    // (function (w, d) {
    //     w.addEventListener('scroll', function () {
    //         if (w.scrollY >= 250 && stickyCount == 0) {
    //             setIsSticky(!isSticky);
    //             setStickyCount(1);
    //         }
    //         else if( w.scrollY <= 250){
    //             setIsSticky(isSticky);
    //             setStickyCount(0);
    //         }
    //     });
    // })(window, document);

    var mobScreen = window.matchMedia("(max-width: 600px)");
    const [menuOpen, setMenuOpen] = useState( mobScreen.matches ? false : true);
    // console.log(mobScreen.matches)

    useEffect(() => {
        // sticky header
        if(mobScreen.matches){
            setMenuOpen(menuOpen);
        }

        (function (w, d) {
            w.addEventListener('scroll', function () {
                if (w.scrollY >= 400 && stickyCount == 0) {
                    setIsSticky(!isSticky);
                    if(mobScreen.matches){
                        setMenuOpen(menuOpen);
                    }
                    else{
                        setMenuOpen(!menuOpen);
                    }
                    setStickyCount(1);
                }
                else if (w.scrollY <= 400) {
                    setIsSticky(isSticky);
                    if(mobScreen.matches){
                        setMenuOpen(menuOpen);
                    }
                    else{
                        setMenuOpen(menuOpen);
                    }
                    setStickyCount(0);
                }
            });
        })(window, document);

    }, []);

    const toggleMegaMenu = () => {
            setMenuOpen(!menuOpen);
    }

    return (
        <>


            {/* topbar start */}
            <div className="p-2 shadow bg-white ">
                <div className=" container">
                    <div className="flex justify-between items-center">
                        {/* logo box */}
                        <div className="">
                            <Link to='/'><img className=' h-[40px] md:h-[65px]' src="./mmv-logo.png" height={52} alt="Logo" title='logo' /></Link>
                        </div>
                        {/* search box */}
                        <div className="h-fit ml-2">
                            <div className="flex border-2 rounded-md md:border-[#fcbd04] md:rounded-[8px] overflow-hidden bg-white">
                                <div className="flex md:w-[360px] lg:w-[450px] xl:w-[560px] 2xl:w-[600px]">
                                    <select className='outline-none border-none pl-5 w-[120px] hidden md:block' name="" id="">
                                        <option value="">Location</option>
                                        <option value="">All</option>
                                        <option value="">State</option>
                                        <option value="">Select Location Name</option>
                                    </select>
                                    <input type="search" placeholder='Type to search' className=' outline-none h-full ml-2 pl-2 py-3 md:block hidden border-l border-slate-300 w-full' />
                                    <button className='px-8 h-full bg-[#fcbd04] text-white md:flex hidden items-center transition-all duration-300 hover:bg-[black] hover:text-white' >
                                        SEARCH
                                    </button>
                                    <button className='p-2 h-full flex md:hidden bg-slate-400 text-white items-center'>
                                        <ManageSearchOutlinedIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* login signup */}
                        <div className="">
                            <Link to="/" className="flex gap-2">
                                <LoginIcon />
                                <p>Login /</p>
                            </Link>
                            <Link to="/" className="flex gap-2">
                                <GroupAddRoundedIcon />
                                <p>Register</p>
                            </Link>
                        </div>
                        {/* button */}
                        <div className="">
                            <Link to={'/'} className="py-4 px-6  rounded-[8px] bg-[red] leading-none text-white lg:flex hidden transition-all duration-300 hover:bg-[black] hover:text-white"><StorefrontOutlinedIcon className=' !h-[19px] w-[5px] -mt-[2px] leading-none ' /> EXPLORE NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* topbar end */}

            {/* nav start */}
            <div className={isSticky ? 'shadow pos-sticky bg-blue-900' : " shadow bg-blue-900"}>
                <div className="container">
                    <div className="flex flex-wrap align-middle justify-between w-full">
                        {/* Main Categories box*/}
                        <div className="2xl:w-3/12 xl:w-3/12 lg:w-3/12 md:w-4/12 w-full relative">
                            <span onClick={toggleMegaMenu} className='text-md cursor-pointer p-2 font-medium flex gap-1 items-center text-white w-fit'><MenuOpenOutlinedIcon />BROWSE CATEGORIES <KeyboardArrowRightOutlinedIcon /></span>

                            <div className={menuOpen ? " absolute top-20 sm:top-14 left-0 z-40 rounded-sm p-[10px] w-full bg-[#efefed] origin-top transition-all duration-500 scale-y-100 " : " absolute top-10 left-0 z-40 rounded-sm p-[10px] w-full bg-[#efefed] origin-top transition-all duration-500 scale-y-0"}>
                                <p className='text-lg font-medium flex gap-1 items-center mb-1'><StorefrontOutlinedIcon />EXPLORE ALL CATEGORIES</p>
                                {/* transition-all duration-300 absolute left-1 top-[55px] scale-y-0 origin-top  hover:scale-y-100 sm:relative sm:left-0 sm:top-[55px] sm:scale-y-1 sm:origin-top  sm:hover:scale-y-100 */}
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
                                </ul>

                                {/* View All Categories */}
                                <ul>
                                    <li className=' cat-list flex gap-1 items-center pl-2 pr-[18px] transition-all hover:shadow-[0px_0px_8px_rgba(0,0,0,0.3)] group/item2 relative'>
                                        <Link className="border-b py-2 relative border-slate-300 flex gap-1 items-center w-full transition-all duration-300 group/arrow group-hover/item2:translate-x-2" to="/"><img width={25} height={25} src="images/icons/icon_all_categories.svg" alt="" /> View All Categories<PlaylistAddOutlinedIcon className='absolute bg-[#efefed] transition-all duration-500 right-1 top-2 z-10 group-hover/arrow:text-green-500' /></Link>
                                        {/* Categories box */}
                                        <ul className=' absolute z-10 -top-[480px] min-h-[480px] xl:-right-[798px]  xl:w-[788px] lg:-right-[68vw]  lg:w-[68vw] md:-right-[56vw]  md:w-[56vw] sm:flex hidden max-h-[440px] overflow-y-auto bg-[#fffffffa]  p-3 flex-wrap transition-all duration-300 ease-in-out scale-x-0 origin-left  md:group-hover/item2:scale-x-100'>
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
                        </div>
                        {/* contact box */}
                        <div className=" w-full lg:w-5/12 md:w-6/12 md:flex hidden py-3">
                            <div className="flex items-center justify-center md:justify-start">
                                <span className='text-sm text-white font-medium leading-none'><AddIcCallOutlinedIcon className=' -mt-[2px] !h-[15px] w-[5px]' /></span>

                                <a className='flex font-medium gap text-sm align-middle leading-none text-white transition-all hover:text-[#e9092b]' href=''> Sales: +91 00000 00000</a>

                                <a className='flex ml-2 pl-2 border-l-2 border-slate-300 font-medium gap text-sm align-middle leading-none text-white transition-all hover:text-[#e9092b]' href=''> Support: +91 00000 00000</a>
                            </div>
                        </div>
                        {/* pages box*/}
                        <div className=" w-full lg:w-4/12 md:w-full  bg-slate-50">
                            <div className="flex align-middle justify-between">

                                <span className='flex justify-center items-center w-4/12 border py-2 font-medium gap text-sm align-middle leading-none text-[#606161] transition-all hover:text-[#e9092b] cursor-pointer relative group/item' >
                                    <ContactPhoneOutlinedIcon className=' !h-[19px] w-[5px] -mt-[2px] leading-none ' />
                                    For Buyer <KeyboardArrowRightOutlinedIcon className=' !h-[19px] mt-1 w-[5px]  leading-none ' />

                                    <div className="w-[150px] md:w-[200px] absolute top-[2.44rem] -right-4 sm:right-0 z-[150]  border bg-slate-50 rounded-b-lg border-slate-400 transition-all duration-150 invisible group-hover/item:visible">
                                        {/* befere active sign */}
                                        <span className='absolute -top-[8px] right-5 w-[15px] h-[15px] z-10 rotate-45 bg-slate-50 border-l border-t border-slate-400' ></span>

                                        <Link className='text-slate-500  border-slate-300 block ' to={'/'}>
                                            <span className=' transition-transform  duration-200 hover:translate-x-1 hover:text-[black] py-3 px-5  block'>
                                                Post Buy Requirement
                                            </span>
                                        </Link>

                                        <Link className='text-slate-500 border-t border-slate-300 block ' to={'/'}>
                                            <span className=' transition-transform  duration-200 hover:translate-x-1 hover:text-[black] py-3 px-5  block'>
                                                Browse Suppliers
                                            </span>
                                        </Link>

                                        <Link className='text-slate-500 border-t border-slate-300 block ' to={'/'}>
                                            <span className=' transition-transform  duration-200 hover:translate-x-1 hover:text-[black] py-3 px-5  block'>
                                                Manufacturers Directory
                                            </span>
                                        </Link>

                                        <Link className='text-slate-500 border-t border-slate-300 block ' to={'/'}>
                                            <span className=' transition-transform  duration-200 hover:translate-x-1 hover:text-[black] py-3 px-5  block'>
                                                Country Suppliers
                                            </span>
                                        </Link>

                                        <Link className='text-slate-500 border-t border-slate-300 block rounded-b-lg' to={'/'}>
                                            <span className=' transition-transform  duration-200 hover:translate-x-1 hover:text-[black] py-3 px-5  block'>
                                                Buyer FAQ
                                            </span>
                                        </Link>

                                    </div>
                                </span>

                                <span className='flex items-center justify-center w-4/12 border py-2 font-medium gap text-sm align-middle leading-none text-[#606161] transition-all hover:text-[#e9092b] cursor-pointer relative group/item' >
                                    <StorefrontOutlinedIcon className=' !h-[19px] w-[5px] -mt-[2px] leading-none ' />
                                    For Seller <KeyboardArrowRightOutlinedIcon className=' !h-[19px] mt-1 w-[5px]  leading-none ' />
                                    <div className="w-[200px] absolute top-[2.44rem] right-0 z-[150]  border bg-slate-50 rounded-b-lg border-slate-400 transition-all duration-150 invisible group-hover/item:visible">
                                        {/* befere active sign */}
                                        <span className='absolute -top-[8px] right-5 w-[15px] h-[15px] z-10 rotate-45 bg-slate-50 border-l border-t border-slate-400' ></span>

                                        <Link className='text-slate-500  border-slate-300 block ' to={'/'}>
                                            <span className='transition-transform  duration-200 hover:translate-x-1 hover:text-[black] py-3 px-5  block'>
                                                Sell Your Product
                                            </span>
                                        </Link>

                                        <Link className='text-slate-500 border-t border-slate-300 block ' to={'/'}>
                                            <span className='transition-transform  duration-200 hover:translate-x-1 hover:text-[black] py-3 px-5  block'>
                                                Latest Buyleads
                                            </span>
                                        </Link>

                                        <Link className='text-slate-500 border-t border-slate-300 block rounded-b-lg' to={'/'}>
                                            <span className='transition-transform  duration-200 hover:translate-x-1 hover:text-[black] py-3 px-5  block'>
                                                Seller FAQ
                                            </span>
                                        </Link>

                                    </div>
                                </span>

                                <span className='flex items-center justify-center w-4/12 border py-2 font-medium gap text-sm align-middle leading-none text-[#606161] transition-all hover:text-[#e9092b] cursor-pointer relative group/item' >
                                    <SupportAgentOutlinedIcon className=' !h-[19px] w-[5px] -mt-[2px] leading-none ' />
                                    Help <KeyboardArrowRightOutlinedIcon className=' !h-[19px] mt-1 w-[5px]  leading-none ' />
                                    <div className="w-[200px] absolute top-[2.44rem] right-0 z-[150]  border bg-slate-50 rounded-b-lg border-slate-400 transition-all duration-150 invisible group-hover/item:visible">
                                        {/* befere active sign */}
                                        <span className='absolute -top-[8px] right-5 w-[15px] h-[15px] z-10 rotate-45 bg-slate-50 border-l border-t border-slate-400' ></span>

                                        <Link className='text-slate-500  border-slate-300 block ' to={'/'}>
                                            <span className='transition-transform  duration-200 hover:translate-x-1 hover:text-[black] py-3 px-5  block'>
                                                Send Feedback
                                            </span>
                                        </Link>

                                        <Link className='text-slate-500 border-t border-slate-300 block ' to={'/'}>
                                            <span className='transition-transform  duration-200 hover:translate-x-1 hover:text-[black] py-3 px-5  block'>
                                                Send Complaint
                                            </span>
                                        </Link>

                                        <Link className='text-slate-500 border-t border-slate-300 block ' to={'/'}>
                                            <span className='transition-transform  duration-200 hover:translate-x-1 hover:text-[black] py-3 px-5  block'>
                                                Advertise With Us
                                            </span>
                                        </Link>

                                        <Link className='text-slate-500 border-t border-slate-300 block rounded-b-lg' to={'/'}>
                                            <span className='transition-transform  duration-200 hover:translate-x-1 hover:text-[black] py-3 px-5  block'>
                                                Contact Us
                                            </span>
                                        </Link>

                                    </div>
                                </span>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* nav end */}
        </>
    )
}

export default Nav
