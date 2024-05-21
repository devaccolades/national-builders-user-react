import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'
// Images
import LapBanner from '../../../assets/images/home/homepage-banner-laptop.png'
import MobileBanner from '../../../assets/images/home/homepage-banner-mobile.png'
function HomeBanner({animationConfig}) {
  const text = "Expression Of Excellent Living"
    return (
        <Section className='flex justify-center items-start md:items-center' {...animationConfig}>
            <motion.h1 className='capitalize w-[70%] ld:w-full lg:text-center text-4xl md:text-5xl lg:text-[3vw] xl:text-[3vw] bg-gradient-to-r from-white to-gray-700 inline-block text-transparent bg-clip-text' {...animationConfig} >{text}</motion.h1>
        </Section>
    )
}

export default HomeBanner

const Section = styled(motion.div)`
  background-image: url(${LapBanner});
  background-size: cover;
  background-position: center;
  height: 90vh;
  @media (max-width: 425px) {
    background-image: url(${MobileBanner});
    height: 90vh;
    h1{
    margin-top: 8rem;
  }
  }
  
`;