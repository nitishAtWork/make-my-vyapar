import React from 'react'
import MainCategoryCard from '../common/MainCategoryCard';
import SubCategoryCard from '../common/SubCategoryCard';
import { Link } from 'react-router-dom'
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';

const CategoriesSect2 = () => {
    return (
        <section className='bg-gray-300 py-16 mt-5'>
            <div className="container">
                <div className="flex flex-wrap">
                    {/* left box */}
                    <div className="w-full lg:w-3/12 p-2">
                        <MainCategoryCard
                            catSmTitle="Don't miss explore now"
                            catName="Categories or service name here"
                            mainCatImg="images/category/left-cat-img.jpg"
                        />
                    </div>
                    {/* right box products */}
                    <div className="w-full lg:w-9/12 p-2">
                        <div className="flex flex-wrap w-full">

                            {/* Single box */}
                            <SubCategoryCard
                                subCatName='Write here subite here subite here sub category'
                            />
                            {/* Single box */}
                            <SubCategoryCard
                                subCatName='Write here subite here subite here sub category'
                            />
                            {/* Single box */}
                            <SubCategoryCard
                                subCatName='Write here subite here subite here sub category'
                            />
                            {/* Single box */}
                            <SubCategoryCard
                                subCatName='Write here subite here subite here sub category'
                            />
                            {/* Single box */}
                            <SubCategoryCard
                                subCatName='Write here subite here subite here sub category'
                            />
                            {/* Single box */}
                            <SubCategoryCard
                                subCatName='Write here subite here subite here sub category'
                            />
                            {/* Single box */}
                            <SubCategoryCard
                                subCatName='Write here subite here subite here sub category'
                            />
                            {/* Single box */}
                            <SubCategoryCard
                                subCatName='Write here subite here subite here sub category'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoriesSect2
