import React from 'react'
import styled from 'styled-components'
import Text from '../../common/Text'
import { motion } from 'framer-motion'

function Specifications({ animationConfig,data }) {
    return (
        <Section className='mx-auto'>
            <Container className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] p-5 lg:p-8' {...animationConfig}>
                <Heading>Specifications</Heading>
                {data.length > 0 ? (
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-10'>
                        {data.map((specific, index) => (
                            <div key={index}>
                                <Heading2 className='opacity-50 font-semibold'>{specific.title}</Heading2>
                                <Text align={window.innerWidth <= 1024 ? 'justify' : ''} text={specific.description} mt="2" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <Text align='center' text={"Specifications Not Available "} />
                )}
            </Container>
        </Section>
    )
}

export default Specifications

const Section = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
width: 70%;
    @media(max-width:1400px){
      width:90%; 
 
}`

const Container = styled(motion.div)``

const Heading = styled.p`
    font-size: 1.6rem;
    padding-bottom: 0.6rem;
    @media(max-width:1024px){
        text-align: center;
        font-size: 1.6rem;
}
@media(max-width:425px){
    font-size: 1.6rem;
}
@media (max-width: 375px) {
    font-size: 1.6rem;
    font-weight: bold;
}
`;

const Heading2 = styled.p`
    font-size: 1.3rem;
    opacity: 60%;
    text-transform: capitalize;
    @media(max-width:1024px){
        font-size: 1.6rem;
}
@media(max-width:425px){
    font-size: 1.2rem;
}
@media (max-width: 375px) {
    font-size: 1.2rem;
}
`;