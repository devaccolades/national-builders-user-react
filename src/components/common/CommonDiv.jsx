import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import BottomImage from '../../assets/images/common/bottom-image.png'
import AnimationButton from './Button'

function CommonDiv() {
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
        <Section  {...animationConfig}>
          <Container className='mx-auto'>
          <div className='w-full'>
                <Headding className='text-center xl:text-start lg:font-bold bg-gradient-to-r from-white to-gray-800 text-transparent bg-clip-text'>
                    Find your dream home today
                </Headding>
                <Paragraph className='text-justify '>
                    A dedicated homecare department is at service 24/7 to cater to all the needs of the customer. From choosing the perfect house, doing all the paperwork and handing over your keys, our Homecare will assist you. We have a dedicated after-sales and asset management team to attend to all repair and maintenance work.
                </Paragraph>
            </div>
            <div className='flex justify-center items-center w-full lg:w-6/12 xl:w-3/12'>
                <AnimationButton width='auto' text={"Explore Property"} />
            </div>
          </Container>
        </Section>
    )
}

export default CommonDiv

const Section = styled(motion.section)`
    background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BottomImage});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin: 1rem auto;
    width: 70%;
    @media(max-width:1400px){
      width:90%; 
}
@media(max-width:956px){
    flex-direction: column;
    gap: 1rem;
}

`

const Headding = styled.p`
    font-size: 3rem;
    @media(max-width:1024px){
    font-size: 2.5rem;
}
    @media(max-width:768px){
    font-size: 2.4rem;
}
@media(max-width:425px){
    font-size: 2.4rem;
}
@media (max-width: 375px) {
    font-size: 1.9rem;
  }
`
const Paragraph = styled.p`
    opacity: 55%;
    font-size: 1.2rem;
    font-family: 'popins_regular';
    margin: 1rem auto 1rem auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`