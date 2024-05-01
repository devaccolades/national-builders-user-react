import React from 'react'
import styled from 'styled-components';
import { Typography } from '@material-tailwind/react';
import Text from '../../common/Text';

// Icons
import facebookIcon from '../../../assets/icons/facebook.svg'
import twitterIcon from '../../../assets/icons/twitter.svg'
import linkedInIcon from '../../../assets/icons/linkedin.svg'
import linkIcon from '../../../assets/icons/links.svg'
import { motion } from 'framer-motion';

// aftr backend should be remove
import image1 from '../../../assets/images/newsandeventsdetails/image1.png'
import image2 from '../../../assets/images/about/director1.png'
import image3 from '../../../assets/images/about/director3.png'
import image4 from '../../../assets/images/about/director4.jpeg'

function NewsandeventsdetailsComponents({animationConfig}) {
  return (
    <Section className='container mx-auto flex flex-col gap-5 lg:gap-8' {...animationConfig}>
    <Backgroundimage className='bg-gray-900 bg-opacity-50 lg:bg-transparent p-6 lg:p-0 rounded-[1.1rem] rounded-b-none lg:rounded-none -mb-5 lg:mb-0'>
   
      <div className='image rounded-[1.1rem]'>
        {/* Backgroud image */}
      </div>
      {/* <img src={image1} className='image h-full w-full rounded-[1.1rem]' alt="" /> */}
    </Backgroundimage>
    <Details className='flex flex-col lg:flex-row items-start gap-6'>
      <div className='w-full flex flex-col-reverse lg:flex-row gap-6'>
        <Icons className='w-full lg:w-1/12 flex justify-center lg:justify-start flex-row lg:flex-col gap-5'>
          <div className='bg-gray-900 bg-opacity-50 flex justify-center items-center rounded-[1.1rem]'>
            <img src={facebookIcon} className='m-5' alt="" />
          </div>
          <div className='bg-gray-900 bg-opacity-50 flex justify-center items-center rounded-[1.1rem]'>
            <img src={twitterIcon} className='m-5' alt="" />
          </div>
          <div className='bg-gray-900 bg-opacity-50 flex justify-center items-center rounded-[1.1rem]'>
            <img src={linkedInIcon} className='m-5' alt="" />
          </div>
          <div className='bg-gray-900 bg-opacity-50 flex justify-center items-center rounded-[1.1rem]'>
            <img src={linkIcon} className='m-5' alt="" />
          </div>
        </Icons>
        <TextContent className='bg-gray-900 bg-opacity-50 w-full rounded-[1.1rem] rounded-t-none lg:rounded-t-[1.1rem] p-6'>
          <div className='flex flex-row -mt-5 lg:mt-0'>
            <p className='text-gray-500 p-2 border border-gray-600 rounded-[2rem]'>June 7,2021</p>
          </div>
          <Typography variant="h5" color="white" className="mt-5 mb-3 text-opacity-90">
          M.C Sunny won Business Excellence in Construction Award 2016- Unique Times FMB Award 2016
          </Typography>
          <Text align='' text={"Business Excellence in Construction Award 2016 was awarded to Mr. M C Sunny, CMD, National Builders, in the Unique Times FMB Award presented by Manappuram Gold Loan Powered by Confident, held at Crowne Plaza, Kochi. The Award was presented by Mr. V P Nandakumar, MD and CEO of Manappuram Group, and the Chairman of CII’s Kerala State Council."} />
          <Text mt='3' align='' text={"An event by Pegasus and directed by Ajit Ravi PegasusBusiness Excellence in Construction Award 2016 was awarded to Mr. M C Sunny, CMD, National Builders, in the Unique Times FMB Award presented by Manappuram Gold Loan Powered by Confident, held at Crowne Plaza, Kochi. The Award was presented by Mr. V P Nandakumar, MD and CEO of Manappuram Group, and the Chairman of CII’s Kerala State Council."} />
          <Text mt='3' align='' text={"An eminent business leader and a real-estate pioneer, Founder-CMD M C Sunny’s leadership with nearly four decades of hands-on professional experience and a strong value system has built National Builders into one of the most reputed real-estate companies in Navi Mumbai and Kerala. This solid legacy of 35 years built on the twin-pillars of excellence and integrity has won the trust of customers"} />
          
        </TextContent>
      </div>
      <Suggested className='w-full lg:w-5/12 h-auto bg-gray-900 bg-opacity-50 rounded-[1.1rem] px-6'>
        <Typography variant="h5" className="mt-5 mb-3 text-gray-400 text-opacity-90">
          Suggested Reads
        </Typography>
        <div className='flex flex-col gap-5 lg:gap-0 my-2 lg:my-5'>
          <div className='flex flex-row gap-2 lg:gap-5 items-center cursor-pointer'>
            <img src={image2} alt="" className='w-2/12' />
            <Typography variant="p" className="text-white text-[.9rem] text-opacity-90">
            Marunadum Malanadum M C Sunny
            </Typography>
          </div>
          <hr className='border border-gray-800 lg:my-4' />
          <div className='flex flex-row gap-2 lg:gap-5 items-center cursor-pointer'>
            <img src={image3} alt="" className='w-2/12' />
            <Typography variant="p" className="text-white text-[.9rem] text-opacity-90">
            M C Sunny | Chairman and MD, National Builders | THE INTERVIEW
            </Typography>
          </div>
          <hr className='border border-gray-800 lg:my-4' />
          <div className='flex flex-row gap-2 lg:gap-5 items-center cursor-pointer'>
            <img src={image4} alt="" className='w-2/12' />
            <Typography variant="p" className="text-white text-[.9rem] text-opacity-90">
            M.C Sunny won Business Excellence in Construction Award 2016- Unique Times FMB Award 2016
            </Typography>
          </div>
        </div>
      </Suggested>
    </Details>
  </Section>
  )
}

export default NewsandeventsdetailsComponents

const Section = styled(motion.section)`
margin-top: 2rem;
margin-bottom: 4rem;
@media(max-width:1400px){
  width:90%;
}
`;
const Backgroundimage = styled.div`
height: 45rem;
  .image{
    background: no-repeat;
background-position: center;
background-size: cover;
background-image: url(${image1});
height: 100%;
  }
  @media(max-width:1024px){
    height: 38rem;
}
  @media(max-width:768px){
    height: 30rem;
}
@media(max-width:425px){
    height: 25rem;
}
@media(max-width:320px){
    height: 20rem;
}

`

const Details = styled.div``

const Icons = styled.div``

const Suggested = styled.div`
padding-bottom: 0.8rem !important;
`

const TextContent = styled.div``