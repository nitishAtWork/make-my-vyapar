import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const SocialsComp = () => {
  return (
    <div className='flex items-center gap-4'>
      <Link to={''}><FacebookIcon className='transition-all duration-300 hover:text-white' /></Link>
      <Link to={''}><WhatsAppIcon className='transition-all duration-300 hover:text-white' /></Link>
      <Link to={''}><XIcon className='transition-all duration-300 hover:text-white' /></Link>
      <Link to={''}><LinkedInIcon className='transition-all duration-300 hover:text-white' /></Link>
      <Link to={''}><TelegramIcon className='transition-all duration-300 hover:text-white' /></Link>
      <Link to={''}><InstagramIcon className='transition-all duration-300 hover:text-white' /></Link>
      <Link to={''}><PinterestIcon className='transition-all duration-300 hover:text-white' /></Link>
    </div>
  )
}

export default SocialsComp
