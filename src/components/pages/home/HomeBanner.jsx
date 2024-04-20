import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'
// Images
import LapBanner from '../../../assets/images/home/homepage-banner-laptop.png'
import MobileBanner from '../../../assets/images/home/homepage-banner-mobile.png'
function HomeBanner() {
  const animationConfig = {
    initial: {
      opacity: 0,
      y: 50,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };
    return (
        <Section className='flex justify-center items-start md:items-center' {...animationConfig}>
            <motion.p className='capitalize w-[70%] ld:w-full lg:text-center text-4xl md:text-5xl lg:text-6xl mt-28 md:-mt-28 bg-gradient-to-r from-white to-gray-600 inline-block text-transparent bg-clip-text' {...animationConfig} >Expression Of Excellent Living</motion.p>
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

  }
`;