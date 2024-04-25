import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
function Heading({animationConfig}) {
    return (
        <>
            <Section {...animationConfig}>
                <Pragraph className='text-center text-2xl lg:text-3xl bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text'>About</Pragraph>
                <Headding className='text-center font-bold bg-gradient-to-r from-white to-gray-600 text-transparent bg-clip-text'>National Builders</Headding>
            </Section>
        </>
    )
}

export default Heading

const Section = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    @media(max-width:768px){
      height: 10rem;
}
`

const Headding = styled.h1`
    font-size: 4rem;
    @media(max-width:768px){
        font-size: 3rem;
}

@media(max-width:425px){
        font-size: 2rem;
}`

const Pragraph = styled.p`
    font-family: popins_regular;
`