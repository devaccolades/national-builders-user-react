import React from 'react'

import { Card } from '@material-tailwind/react'

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
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
      <section className='hidden lg:block'>
        <div className=' bg-black grid grid-rows-[10rem,1px,1fr] overflow-hidden'>
          <div className='flex justify-center items-center'>
            <img src={logo} className='w-56 ' alt="" />
          </div>
          <hr className='xl:mx-auto mx-20 xl:w-[70%] border border-gray-900' />
          <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${FooterBgImg})` }}>
            <Container className='mx-auto ps-2 w-[70%] grid grid-rows-[1fr,6rem,12rem] '>
              <div className='grid grid-cols-[1fr,5rem,1fr] gap-8'>
                <Card className='bg-gray-900 grid gap-4 bg-opacity-50 border p-5 text-white opacity-90 border-gray-800 my-10  rounded-[2rem]'>
                  <div className='w-full  pt-7 flex items-end'>
                    <div className='w-1/12'></div>
                    <p className='ps-2 text-xl '>NAVI MUMBAI </p>
                  </div>
                  <div className='grid grid-cols-[3rem,1fr]'>
                    <IoLocationSharp className='text-red-500 h-7 w-7 mt-2' />
                    <p className='text-[1.2rem]'>National Builders Office, Sea Queen Heritage Buiding, 1st Floor, Plot No, Sector 18, Palm Beach Service Road, Sanpada, Navi Mumbai-400705</p>
                  </div>
                  <div className='grid grid-cols-[3rem,1fr] w-full'>
                    <MdEmail className='text-red-500 h-6 w-6' />
                    <p className='whitespace-normal text-[1.2rem] w-[80%] break-words'><a href="mailto:marketingmumbai@nationalbuilders.in" >marketingmumbai@nationalbuilders.in</a></p>
                  </div>
                  <div className='grid grid-cols-[3rem,1fr] w-full'>
                    <FaPhoneAlt className='text-red-500 h-6 w-6' />
                    <p className='whitespace-normal text-[1.2rem] break-words'>+ 9122 49639871 /72/ 73, 2249737814 +91 9223300950 / 9223300960, +91 9004091082</p>
                  </div>
                </Card>

                <div className='bg-gray-900 bg-opacity-50 border border-gray-800 flex flex-col items-center justify-center gap-6 my-10 rounded-[2rem]'>
                  <img src={facebook} alt="" />
                  <img src={instagram} alt="" /> 
                  <img src={linkedin} alt="" />
                  <img src={youtube} alt="" />
                </div>

                <Card className='bg-gray-900 grid gap-4 bg-opacity-50 border p-5 text-white opacity-90 border-gray-800 my-10  rounded-[2rem]'>
                  <div className='w-full  pt-7 flex items-end -mt-6'>
                    <div className='w-1/12'></div>
                    <p className='text-xl '>Kochi </p>
                  </div>
                  <div className='grid grid-cols-[3rem,1fr]'>
                    <IoLocationSharp className='text-red-500 h-7 w-7 mt-2' />
                    <p className='text-[1.2rem]'>National Pearl Star, 5Th Floor, High School Jn.Edappally, Kochi, Kerala - 682024</p>
                  </div>
                  <div className='grid grid-cols-[3rem,1fr] w-full'>
                    <MdEmail className='text-red-500 h-6 w-6' />
                    <p className='whitespace-normal w-[80%] text-[1.2rem] break-words'><a href="mailto:marketingkochi@nationalbuilders.in" >marketingkochi@nationalbuilders.in</a></p>
                  </div>
                  <div className='grid grid-cols-[3rem,1fr] w-full'>
                    <FaPhoneAlt className='text-red-500 h-6 w-6' />
                    <p className='whitespace-normal text-[1.2rem] break-words'>+91 484 2340781, 2333391, +91 484 2534558</p>
                  </div>
                </Card>
              </div>
              <Card className='rounded-[2rem] flex-row justify-between items-center px-10 py-4 lg:py-0 bg-opacity-50 text-white font-bold text-md xl:text-xl bg-gray-900 border border-gray-800'>
                <Link to={'/'}>Home</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/rentals'}>Rentals</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/testimonials'}>Testimonials</Link>
                <Link to={'/news-and-events'}>News & Events</Link>
                <Link to={'/blogs'}>Blogs</Link>
                <Link to={'/key-handover'}>Key handover</Link>
              </Card>
              <Card className='flex-row justify-between items-center px-20 rounded-[2rem] lg:h-20 mt-10  text-white mb-10 lg:mb-0 xl:text-xl bg-gray-900 bg-opacity-50 border border-gray-800'>
                <p className='flex justify-center items-center '><MdCopyright className='w-6 h-6' /> National Builders All Rights Reseved
                </p>
                <img src={Accoladeslogo} alt="" />
                <p className='flex justify-center items-center'>Privacy Policy | Terms of Service</p>
              </Card>
            </Container>
          </div>
        </div>
      </section>
      <Section className='lg:hidden block mt-16 mx-auto'>
        <div className='flex justify-center items-center'>
          <img src={logo} className='w-9/12 sm:w-auto' alt="" />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 text-center gap-3 sm:gap-5 my-8 w-full'>
          <P>Project</P>
          <P>Testmonials</P>
          <P>Rentals</P>
          <P>New & Events</P>
          <P>About</P>
          <P>Blogs</P>
          <P>Contact</P>
          <P>key handover</P>
        </div>
        <hr className='border border-gray-900' />
        <div className='my-8 grid gap-2 sm:gap-4'>
          <div className='ms-12'>
            <p className='text-lg opacity-90'>Navi Mumbai</p>
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
            <p className='text-lg opacity-90'>Kochi</p>
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
              <p className='text-[1rem] opacity-65 break-words'>+91 484 2340781, 2333391, +91 484 2534558</p>
            </div>
          </div>
        </div>
        <div className='bg-[#262626] bg-opacity-50 border border-gray-800 rounded-[1rem] flex flex-col p-5 mb-10 justify-center items-center'>
          <div className='flex justify-around gap-4'>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
          </div>
          <div className='opacity-65 my-4 sm:my-5 flex flex-row'>
            <MdCopyright className='w-5 sm:w-6 h-5 sm:h-6 sm:me-4' />
            <p className='text-[0.9rem] sm:text-xl'>National Builders All Rights Reseved</p>
          </div>
          <div className='opacity-65'>
            <img src={Accoladeslogo} className='w-auto ' alt="" />
          </div>
          <div className='opacity-65 my-4 sm:my-5 text-[0.9rem] sm:text-xl'>
            <p>Privacy Policy | Terms of Service</p>
          </div>

        </div>
      </Section>
    </>
  )
}

export default Footer

const Section = styled.section`
    @media(max-width:1400px){
      width:90%; 
}
`

const Container = styled.section`
    @media(max-width:1400px){
      width:90%; 
}
`

const P = styled.p`
    font-family: 'popins_semibold';
  font-size: 1rem;

`