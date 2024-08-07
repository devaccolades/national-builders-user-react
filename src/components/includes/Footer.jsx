import React from 'react'

import { Card } from '@material-tailwind/react'

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Text from '../common/Text';

// Image
import FooterBgImg from '../../assets/images/footer/footer-bg-image.svg'
import logo from '../../assets/images/logo/national-builders-logo.svg'
import Accoladeslogo from '../../assets/images/footer/accolades-logo.svg'
import facebook from '../../assets/icons/facebook-icon.svg'
import instagram from '../../assets/icons/instagram-icon.svg'
import linkedin from '../../assets/icons/linkedin-icon.svg'
import youtube from '../../assets/icons/youtuve-icon.svg'

function Footer() {
  return (
    <>
      <section className='hidden lg:block mx-auto'>
        <div className=' bg-black grid grid-rows-[10rem,1px,1fr] overflow-hidden'>
          <div className='flex justify-center items-center'>
            <img src={logo} className='w-56 ' alt="" />
          </div>
          <hr className='mx-auto lg:w-[90%] xl:w-[70%] border border-gray-900' />
          <MainDiv className='bg-no-repeat  bg-cover flex flex-col items-center' style={{ backgroundImage: `url(${FooterBgImg})` }}>
            <AddressMedia className='w-[96%] xl:w-[70%] flex flex-row gap-5 xl:gap-7'>
              <Card className='bg-gray-900 py-5 bg-opacity-50 border  text-white opacity-90 border-gray-800 my-10  rounded-[2rem] w-full'>
                <div className='px-5 grid gap-4'>
                  <div className='w-full  pt-7 flex items-end'>
                    <div className='w-1/12'></div>
                    <p className='ps-2 xl:text-xl '>NAVI MUMBAI </p>
                  </div>
                  <div className='grid grid-cols-[3rem,1fr]'>
                    <IoLocationSharp className='text-red-500 h-7 w-7 mt-2' />
                    <p className='text-md xl:text-[1.2rem]'>National Builders Office, Sea Queen Heritage Buiding, 1st Floor, Plot No, Sector 18, Palm Beach Service Road, Sanpada, Navi Mumbai-400705</p>
                  </div>
                  <div className='grid grid-cols-[3rem,1fr] w-full'>
                    <MdEmail className='text-red-500 h-6 w-6' />
                    <p className='whitespace-normal text-md xl:text-[1.2rem] break-words'><a href="mailto:marketingmumbai@nationalbuilders.in" >marketingmumbai@nationalbuilders.in</a></p>
                  </div>
                  <div className='grid grid-cols-[3rem,1fr] w-full'>
                    <FaPhoneAlt className='text-red-500 h-6 w-6' />
                    <p className='whitespace-normal text-md xl:text-[1.2rem] break-words'>+ 9122 49639871 /72/ 73, 2249737814 +91 9223300950 / 9223300960, +91 9004091082</p>
                  </div>
                </div>
              </Card>
              <Card className='bg-gray-900 bg-opacity-50 border py-5 border-gray-800 flex flex-col items-center justify-center gap-6 my-10 rounded-[2rem] w-[180px]'>
               <a href="https://www.facebook.com/nationalbuilderskerala" target='_blank'> <img src={facebook} alt="face-book-icon" /></a>
               <a href="https://www.instagram.com/nationalbuilderskerala/" target='_blank'> <img src={instagram} alt="instagram-icon" /></a>
                <a href="https://www.linkedin.com/company/national-builders/" target='_blank'><img src={linkedin} alt="linked-in-icons" /></a>
               <a href="https://www.youtube.com/channel/UCdoln4D4SlmoqyDeNjS7obA" target='_blank'><img src={youtube} alt="youtube-icon" /></a>
              </Card>

              <Card className='bg-gray-900 grid py-5 gap-4 bg-opacity-50 border text-white opacity-90 border-gray-800 my-10  rounded-[2rem] w-full'>
                <div className='px-5 grid gap-4'>
                  <div className='w-full  pt-7 flex items-end -mt-6'>
                    <div className='w-1/12'></div>
                    <p className='text-xl '>Kochi </p>
                  </div>
                  <div className='grid grid-cols-[3rem,1fr]'>
                    <IoLocationSharp className='text-red-500 h-7 w-7 mt-2' />
                    <p className='text-md xl:text-[1.2rem]'>National Pearl Star, 5Th Floor, High School Jn.Edappally, Kochi, Kerala - 682024</p>
                  </div>
                  <div className='grid grid-cols-[3rem,1fr] w-full'>
                    <MdEmail className='text-red-500 h-6 w-6' />
                    <p className='whitespace-normal  text-md xl:text-[1.2rem] break-words'><a href="mailto:marketingkochi@nationalbuilders.in" >marketingkochi@nationalbuilders.in</a></p>
                  </div>
                  <div className='grid grid-cols-[3rem,1fr] w-full'>
                    <FaPhoneAlt className='text-red-500 h-6 w-6' />
                    <p className='whitespace-normal text-md xl:text-[1.2rem] break-words'>+91 4842340781,2333391,2534558, +91 98475 33355, +91 98475 44333, +91 98477 17771, +91 9847544222</p>
                  </div>
                </div>
              </Card>
            </AddressMedia>
            <AddressMedia className='rounded-[2rem] mx-auto flex flex-row justify-between w-[96%] xl:w-[70%] items-center  bg-opacity-50 text-white font-bold text-md xl:text-xl bg-gray-900 border border-gray-800 px-10 min-h-[100px]'>
              <Link to={'/'}>Home</Link>
              <Link to={'/projects'}>Projects</Link>
              <Link to={'/rentals'}>Rentals</Link>
              <Link to={'/about'}>About</Link>
              <Link to={'/contact'}>Contact</Link>
              <Link to={'/testimonial'}>Testimonials</Link>
              <Link to={'/news-and-events'}>News & Events</Link>
              <Link to={'/blog'}>Blogs</Link>
              <Link to={'/key-handover'}>Key handover</Link>
            </AddressMedia>
            <AddressMedia className='w-[96%] xl:w-[70%] flex flex-row justify-around items-center rounded-[2rem] lg:h-20 mt-10  text-white mb-10 lg:mb-0 xl:text-xl bg-gray-900 bg-opacity-50 border border-gray-800'>
              <p className='paragraph flex justify-center items-center '><MdCopyright className='w-6 h-6' /> National Builders All Rights Reseved
              </p>
             <a href="https://accoladesintegrated.com/" className='paragraph flex flex-row gap-[10px]' target='_blank'>Design And Developed By Accolades Integrated <img src={Accoladeslogo} className='cursor-pointer w-[20px]' alt="" /></a>
              <p className='paragraph flex justify-center items-center'>Privacy Policy | Terms of Service</p>
            </AddressMedia>
          </MainDiv>
        </div>
      </section>
      {/* Mobile window */}
      <Section className='lg:hidden block mt-16 mx-auto'>
        <div className='flex justify-center items-center'>
          <img src={logo} className='w-9/12 sm:w-auto' alt="" />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 text-center gap-3 sm:gap-5 my-8 w-[80%] mx-auto'>
          <Link className='links text-start' to={'/projects'}>Projects</Link>
          <Link className='links text-start' to={'/rentals'}>Rentals</Link>
          <Link className='links text-start' to={'/about'}>About</Link>
          <Link className='links text-start' to={'/contact'}>Contact</Link>
          <Link className='links text-start' to={'/testimonial'}>Testimonials</Link>
          <Link className='links text-start' to={'/news-and-events'}>News & Events</Link>
          <Link className='links text-start' to={'/blog'}>Blogs</Link>
          <Link className='links text-start' to={'/key-handover'}>Key handover</Link>
        </div>
        <hr className='border border-gray-900' />
        <div className='my-8 grid gap-2 sm:gap-4'>
          <div className='ms-12'>
            <p className='text-lg opacity-60'>Navi Mumbai</p>
          </div>
          <div className='grid grid-cols-[3rem,1fr]'>
            <IoLocationSharp className='text-red-500 h-7 w-7 mt-2' />
            <Text align='' text={"National Builders Office, Sea Queen Heritage Buiding, 1st Floor, Plot No, Sector 18, Palm Beach Service Road, Sanpada, Navi Mumbai-400705"} />
          </div>
          <div className='grid grid-cols-[3rem,1fr] w-full'>
            <MdEmail className='text-red-500 h-6 w-6' />
            <div className=' w-[70vw]'>
              <p className='whitespace-normal text-[1rem] opacity-65 break-words'>marketingmumbai@nationalbuilders.in</p>
            </div>
          </div>
          <div className='grid grid-cols-[3rem,1fr] w-full'>
            <FaPhoneAlt className='text-red-500 h-6 w-6' />
            <div className=' w-[70vw]'>
              <p className='text-[1rem] opacity-65 break-words'>+ 9122 49639871 /72/ 73, 2249737814 +91 9223300950 / 9223300960, +91 9004091082</p>
            </div>
          </div>
        </div>
        <hr className='border border-gray-900' />
        <div className='my-8 grid gap-2 sm:gap-4'>
          <div className='ms-12'>
            <p className='text-lg opacity-60'>Kochi</p>
          </div>
          <div className='grid grid-cols-[3rem,1fr]'>
            <IoLocationSharp className='text-red-500 h-7 w-7 mt-2' />
            <Text align='' text={"National Pearl Star, 5Th Floor, High School Jn.Edappally, Kochi, Kerala - 682024"} />
          </div>
          <div className='grid grid-cols-[3rem,1fr] w-full'>
            <MdEmail className='text-red-500 h-6 w-6' />
            <div className=' w-[70vw]'>
              <p className='text-[1rem] opacity-65 break-words'>marketingkochi@nationalbuilders.in</p>
            </div>
          </div>
          <div className='grid grid-cols-[3rem,1fr] w-full'>
            <FaPhoneAlt className='text-red-500 h-6 w-6' />
            <div className=' w-[70vw]'>
              <p className='text-[1rem] opacity-65 break-words'>+91 4842340781,2333391,2534558, +91 98475 33355, +91 98475 44333, +91 98477 17771, +91 9847544222</p>
            </div>
          </div>
        </div>
        <div className='bg-[#262626] bg-opacity-50 border border-gray-800 rounded-[1rem] flex flex-col p-5 mb-10 justify-center items-center'>
          <div className='flex justify-around gap-4'>
          <a href="https://www.facebook.com/nationalbuilderskerala" target='_blank'> <img src={facebook} alt="face-book-icon" /></a>
               <a href="https://www.instagram.com/nationalbuilderskerala/" target='_blank'> <img src={instagram} alt="instagram-icon" /></a>
                <a href="https://www.linkedin.com/company/national-builders/" target='_blank'><img src={linkedin} alt="linked-in-icons" /></a>
               <a href="https://www.youtube.com/channel/UCdoln4D4SlmoqyDeNjS7obA" target='_blank'><img src={youtube} alt="youtube-icon" /></a>
          </div>
          <div className='opacity-65 mt-4 sm:mt-5 flex flex-row'>
            <MdCopyright className='w-5 sm:w-6 h-5 sm:h-6 sm:me-4' />
            <p className='text-[0.9rem] sm:text-xl'>National Builders All Rights Reseved</p>
          </div>
          <div className='opacity-65 my-4 sm:my-5 text-[0.9rem] sm:text-xl'>
            <p>Privacy Policy | Terms of Service</p>
          </div>
          <div className='opacity-65'>
           <a href="https://accoladesintegrated.com/" className='flex flex-col md:flex-row gap-[10px]' target='_blank'>Design And Developed By 
           <span className='flex flex-row gap-[10px]'>
           Accolades Integrated <img src={Accoladeslogo} className='w-[20px] cursor-pointer' alt="" />
           </span>
           </a>
          </div>
         

        </div>
      </Section>
    </>
  )
}

export default Footer

const Section = styled.section`
    @media(max-width:960px){
      width:90%; 
}
.links{
  font-family: 'popins_bold';
  font-size: 1rem;
}
`
const MainDiv = styled.div`
  padding-bottom: 80px;
`
const AddressMedia = styled.section`
  .paragraph{
    font-size: 16px;
    }
    @media(max-width:1400px){
      width:96%;
  }
`