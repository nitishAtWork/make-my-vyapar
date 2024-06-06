import React from 'react'
import { Link } from 'react-router-dom'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

const BtnLink = (props) => {
    return (
        <>
            <Link to={props.Href} className={"py-3 px-4 rounded-[8px] bg-[red] leading-none text-white flex gap-1 transition-all duration-300 hover:bg-[black] hover:text-white w-fit " + " " + props.addClass}><StorefrontOutlinedIcon className=' !h-[19px] w-[5px] -mt-[2px] leading-none ' /> {props.btnName}</Link>
        </>
    )
}

export default BtnLink
