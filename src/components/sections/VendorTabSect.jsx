import * as React from 'react';
import { Link } from 'react-router-dom';
import BtnLink from '../common/BtnLink';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SaleProductCard from '../common/SaleProductCard';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

function VendorTabSect(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

VendorTabSect.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className='vendor-tab py-8 bg-gray-300'>
            <Box sx={{ width: '100%' }}>
                <div className="container">
                    <div className="text-center py-6"><span className='text-3xl font-medium'>Find Best Seller Vendor</span></div>
                    <div className="flex justify-center">
                        <Box >
                            <Tabs value={value} onChange={handleChange} >
                                <Tab label="Grocery" {...a11yProps(0)} />
                                <Tab label="Fashion" {...a11yProps(1)} />
                                <Tab label="Electronics" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                    </div>
                    <VendorTabSect value={value} index={0}>
                        <div className="flex flex-wrap w-full bg-white md:p-4 p-2 rounded-lg">
                            <div className="md:w-4/12">
                                <div className="bg-white p-6">
                                    <div className="flex items-center  gap-2 ">
                                        <span className='text-white bg-gray-500 p-3 rounded-full'><CardMembershipIcon /></span>
                                        <div className="">
                                            <Link to={"/"} className='text-xl font-medium transition-all duration-300 hover:text-blue-800'>Vendor Technology.Ltd</Link>
                                            <p className='flex w-full items-center gap-1'> Verified <img className='h-[15px]' src="images/icons/verified_icon.png" alt="" /> <span className='border-l pl-1 ml-1 border-gray-400 h-fit leading-none'> 12k Customers</span></p>
                                        </div>
                                    </div>
                                    <p className='mt-4 overflow-ellipsis line-clamp-4  '>Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.</p>
                                    <BtnLink addClass="mt-6 block " Href='/' btnName='Explore More' />
                                </div>
                            </div>
                            <div className="md:w-8/12">

                                <div className="flex flex-wrap w-full">
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd1.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="4,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd2.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="1,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd3.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="4,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd4.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="6,000"
                                    />


                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap w-full bg-white md:p-4 p-2 rounded-lg mt-6">
                            <div className="md:w-4/12">
                                <div className="bg-white p-6">
                                    <div className="flex items-center  gap-2 ">
                                        <span className='text-white bg-gray-500 p-3 rounded-full'><CardMembershipIcon /></span>
                                        <div className="">
                                            <Link to={"/"} className='text-xl font-medium transition-all duration-300 hover:text-blue-800'>Vendor Technology.Ltd</Link>
                                            <p className='flex w-full items-center gap-1'> Verified <img className='h-[15px]' src="images/icons/verified_icon.png" alt="" /> <span className='border-l pl-1 ml-1 border-gray-400 h-fit leading-none'> 12k Customers</span></p>
                                        </div>
                                    </div>
                                    <p className='mt-4 overflow-ellipsis line-clamp-4  '>Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.</p>
                                    <BtnLink addClass="mt-6 block " Href='/' btnName='Explore More' />
                                </div>
                            </div>
                            <div className="md:w-8/12">

                                <div className="flex flex-wrap w-full">
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd1.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="4,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd2.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="1,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd3.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="4,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd4.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="6,000"
                                    />


                                </div>
                            </div>
                        </div>

                    </VendorTabSect>
                    <VendorTabSect value={value} index={1}>
                        <div className="flex flex-wrap w-full bg-white md:p-4 p-2 rounded-lg">
                            <div className="md:w-4/12">
                                <div className="bg-white p-6">
                                    <div className="flex items-center  gap-2 ">
                                        <span className='text-white bg-gray-500 p-3 rounded-full'><CardMembershipIcon /></span>
                                        <div className="">
                                            <Link to={"/"} className='text-xl font-medium transition-all duration-300 hover:text-blue-800'>Nave Technology.Ltd</Link>
                                            <p className='flex w-full items-center gap-1'> Verified <img className='h-[15px]' src="images/icons/verified_icon.png" alt="" /> <span className='border-l pl-1 ml-1 border-gray-400 h-fit leading-none'> 12k Customers</span></p>
                                        </div>
                                    </div>
                                    <p className='mt-4 overflow-ellipsis line-clamp-4  '>Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.</p>
                                    <BtnLink addClass="mt-6 block " Href='/' btnName='Explore More' />
                                </div>
                            </div>
                            <div className="md:w-8/12">

                                <div className="flex flex-wrap w-full">
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd2.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="4,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd4.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="1,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd3.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="4,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd1.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="6,000"
                                    />


                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap w-full bg-white md:p-4 p-2 rounded-lg mt-6">
                            <div className="md:w-4/12">
                                <div className="bg-white p-6">
                                    <div className="flex items-center  gap-2 ">
                                        <span className='text-white bg-gray-500 p-3 rounded-full'><CardMembershipIcon /></span>
                                        <div className="">
                                            <Link to={"/"} className='text-xl font-medium transition-all duration-300 hover:text-blue-800'>Vendor Technology.Ltd</Link>
                                            <p className='flex w-full items-center gap-1'> Verified <img className='h-[15px]' src="images/icons/verified_icon.png" alt="" /> <span className='border-l pl-1 ml-1 border-gray-400 h-fit leading-none'> 12k Customers</span></p>
                                        </div>
                                    </div>
                                    <p className='mt-4 overflow-ellipsis line-clamp-4  '>Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.</p>
                                    <BtnLink addClass="mt-6 block " Href='/' btnName='Explore More' />
                                </div>
                            </div>
                            <div className="md:w-8/12">

                                <div className="flex flex-wrap w-full">
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd1.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="4,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd2.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="1,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd3.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="4,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd4.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="6,000"
                                    />


                                </div>
                            </div>
                        </div>
                    </VendorTabSect>
                    <VendorTabSect value={value} index={2}>
                        <div className="flex flex-wrap w-full bg-white md:p-4 p-2 rounded-lg">
                            <div className="md:w-4/12">
                                <div className="bg-white p-6">
                                    <div className="flex items-center  gap-2 ">
                                        <span className='text-white bg-gray-500 p-3 rounded-full'><CardMembershipIcon /></span>
                                        <div className="">
                                            <Link to={"/"} className='text-xl font-medium transition-all duration-300 hover:text-blue-800'>Company Technology.Ltd</Link>
                                            <p className='flex w-full items-center gap-1'> Verified <img className='h-[15px]' src="images/icons/verified_icon.png" alt="" /> <span className='border-l pl-1 ml-1 border-gray-400 h-fit leading-none'> 12k Customers</span></p>
                                        </div>
                                    </div>
                                    <p className='mt-4 overflow-ellipsis line-clamp-4  '>Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.</p>
                                    <BtnLink addClass="mt-6 block " Href='/' btnName='Explore More' />
                                </div>
                            </div>
                            <div className="md:w-8/12">

                                <div className="flex flex-wrap w-full">
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd4.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="4,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd2.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="1,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd1.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="4,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd4.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="6,000"
                                    />


                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap w-full bg-white md:p-4 p-2 rounded-lg mt-6">
                            <div className="md:w-4/12">
                                <div className="bg-white p-6">
                                    <div className="flex items-center  gap-2 ">
                                        <span className='text-white bg-gray-500 p-3 rounded-full'><CardMembershipIcon /></span>
                                        <div className="">
                                            <Link to={"/"} className='text-xl font-medium transition-all duration-300 hover:text-blue-800'>Vendor Technology.Ltd</Link>
                                            <p className='flex w-full items-center gap-1'> Verified <img className='h-[15px]' src="images/icons/verified_icon.png" alt="" /> <span className='border-l pl-1 ml-1 border-gray-400 h-fit leading-none'> 12k Customers</span></p>
                                        </div>
                                    </div>
                                    <p className='mt-4 overflow-ellipsis line-clamp-4  '>Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.Giving information on origins random Lipsum
                                        origins generator.</p>
                                    <BtnLink addClass="mt-6 block " Href='/' btnName='Explore More' />
                                </div>
                            </div>
                            <div className="md:w-8/12">

                                <div className="flex flex-wrap w-full">
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd1.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="4,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd2.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="1,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd3.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="4,000"
                                    />
                                    {/* sale card */}
                                    <SaleProductCard
                                        salePdImg="images/products/pd4.jpg"
                                        salePdName="Sale prouct name here"
                                        salePrice="6,000"
                                    />


                                </div>
                            </div>
                        </div>
                    </VendorTabSect>
                </div>
            </Box>
        </section>
    );
}
