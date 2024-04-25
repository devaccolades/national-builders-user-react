import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function PageName({text}) {
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
        <Section>
            <Headding className='font-bold bg-gradient-to-r from-white to-gray-600 text-transparent bg-clip-text' {...animationConfig}>{text}</Headding>
        </Section>
    )
}

export default PageName

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    @media(max-width:768px){
      height: 10rem;
}
`

const Headding = styled(motion.h1)`
    font-size: 4rem;
    @media(max-width:768px){
        font-size: 3rem;
}

@media(max-width:425px){
        font-size: 2rem;
}
`