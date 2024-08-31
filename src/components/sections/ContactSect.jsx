import React from 'react'
import TouchAppIcon from '@mui/icons-material/TouchApp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const ContactSect = () => {
  return (
    <section className='py-8'>
      <div className="container bg-slate-100 py-8">
        <div className="flex flex-wrap">
          <div className="lg:w-8/12 p-2">
            <p className='text-3xl font-medium ml-3'>Contact Us</p>
            <form action="">
              <div className="flex flex-wrap">
                <div className="lg:w-6/12 p-3">
                  <input className='w-full px-5 text-black py-3 border-none outline-none bg-white' type="text" placeholder='Name*' />
                </div>
                <div className="lg:w-6/12 p-3">
                  <input className='w-full px-5 text-black py-3 border-none outline-none bg-white' type="text" placeholder='Phone*' />
                </div>
                <div className="lg:w-6/12 p-3">
                  <input className='w-full px-5 text-black py-3 border-none outline-none bg-white' type="text" placeholder='Email*' />
                </div>
                <div className="lg:w-6/12 p-3">
                  <input className='w-full px-5 text-black py-3 border-none outline-none bg-white' type="text" placeholder='Subject*' />
                </div>
                <div className="w-full p-3">
                  <input className='w-full px-5 text-black py-3 border-none outline-none bg-white' type="text" placeholder='Address' />
                </div>

                <div className="w-full p-3">
                  <textarea rows={5} className='w-full px-5 text-black py-3 border-none outline-none bg-white' type="text" placeholder='Message' />
                </div>

                <div className="w-full p-3">
                  <button className='py-3 px-4 rounded-[8px] bg-[red] leading-none text-white flex gap-1 transition-all duration-300 hover:bg-[black] hover:text-white w-fit '>Submit Message<TouchAppIcon className=' !h-[19px] w-[5px] -mt-[2px] leading-none ' /></button>
                </div>


              </div>
            </form>
          </div>
          <div className="lg:w-4/12 p-2">
            <img className='w-full' src="images/img/contact_img01.jpg" alt="Contact Mockup" />
            <div className="bg-[#ee2121e3] w-full p-6">

              <div className="flex items-center border-b border-dashed border-white pb-3 mb-3 gap-4">
                <div className="w-[70px] h-[70px] min-w-[70px] border border-orange-400 border-4 rounded-full bg-white flex items-center justify-center align-middle">
                  <PhoneInTalkIcon className='text-orange-600' />
                </div>
                <div className="text-white">
                  <p className='text-xl'>Phone</p>
                  <Link to="">+91 00000 00000</Link>
                </div>
              </div>

              <div className="flex items-center border-b border-dashed border-white pb-3 mb-3 gap-4">
                <div className="w-[70px] h-[70px] min-w-[70px] border border-orange-400 border-4 rounded-full bg-white flex items-center justify-center align-middle">
                  <EmailIcon className='text-orange-600' />
                </div>
                <div className="text-white">
                  <p className='text-xl'>Email</p>
                  <Link to="">info@company.com</Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-[70px] h-[70px] min-w-[70px] border border-orange-400 border-4 rounded-full bg-white flex items-center justify-center align-middle">
                  <LocationOnIcon className='text-orange-600' />
                </div>
                <div className="text-white ">
                  <p className='text-xl'>Address</p>
                  <span>24/7A, First Floor, Mall Rd, above COBB Showroom, Tilak Nagar, New Delhi, Delhi 110018, India</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSect
