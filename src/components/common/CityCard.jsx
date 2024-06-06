import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = (props) => {
    return (
        <>
            <Link to="/" className="group/country w-full rounded-lg shadow-[0px_0px_5px_gray] overflow-hidden p-3 m-1 block">
                <img className='transition-all duration-300 group-hover/country:scale-[1.056] rounded-lg w-full mb-2' src={props.cityImg} alt="Banner" title='Banner' />
                <p className='text-center text-md font-medium'>{props.cityName}</p>
            </Link>
        </>
    )
}

export default CityCard
