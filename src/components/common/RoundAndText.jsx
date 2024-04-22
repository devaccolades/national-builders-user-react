import React from 'react'
import styled from 'styled-components'
import round from '../../assets/icons/round.svg'
import { motion } from 'framer-motion';

function RoundAndText({ headingred, headingwhite, text }) {
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
        <Section className='container mx-auto'>
            <Main {...animationConfig}>
                <img src={round} className='w-3/12 md:w-2/12 lg:w-auto' alt="" />
                <Headding>
                    <span className='text-red-500'>{headingred} </span>
                    <span className='bg-gradient-to-r from-white to-gray-600 text-transparent bg-clip-text'>{headingwhite}</span>
                </Headding>
            </Main>
            <motion.div {...animationConfig}>
            <Paragraph className='break-words leading-7 lg:leading-9' >
                {text}
            </Paragraph>
            </motion.div>
        </Section>
    )
}

export default RoundAndText

const Section = styled.div`
    height: 30vh;
    @media(max-width:1400px){
      width:90%; 
}
@media(max-width:768px){
    height:auto; 
    margin-bottom: 2rem;
}
`

const Main = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 2rem;
    @media(max-width:768px){
    justify-content: center;
}
    @media(max-width:425px){
        gap: 1rem;
}
`

const Headding = styled.p`
    font-size: 3rem;
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