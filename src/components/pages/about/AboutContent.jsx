import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Image
import building1 from '../../../assets/images/about/builing1.jpg'
import Text from '../../common/Text'

function AboutContent({animationConfig}) {
    return (
        <Section className='w-full mx-auto' {...animationConfig} >
            <Container className='rounded-[1rem] lg:rounded-[3rem] h-full p-3  lg:p-10 bg-gray-900' {...animationConfig}>
                <div className='bg-black w-full h-full rounded-[2rem] lg:rounded-none lg:rounded-s-[1rem] lg:rounded-b-[2rem] p-6 lg:p-14'>
                    <Headding className='text-center lg:text-start text-2xl lg:text-6xl leading-tight bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text '><span className='text-red-500'>Expression</span> of Excellent Living</Headding>
                    <Text align='' mt='4' text={"A visionary real estate development firm, National Builders specializes in pioneering architecturally distinct residential and mixed-use projects in India’s prime metropolitan markets of Navi Mumbai and Kerala."}/>
                    <Text align='' mt='3' text={"The firm has a proven track record of successful real estate development, consistently fulfilling its commitments and exceeding customer expectations. Its stamp of quality and delivery of best-in-class features is visible in each of the 135+ projects of National Builders – from the 6500-sq. ft. luxury homes in Vivant – the tallest tower in the satellite city of Navi Mumbai and the 3,000 sq. ft. Sky Villas in the 20-storeyed National Kingdom at Cochin, right to the 600 sq. ft. apartments in projects for home buyers with a select budget. From the premium addresses of Palm Beach Road in Navi Mumbai and Palarivattom in Cochin, to the emerging areas of New Panvel and NAINA region, the projects of National Builders dot prime locations in the two key markets. At National Builders, superiority in quality, culture of innovation and long-term sustainability are the key focus areas for operational excellence. The philosophy behind every National home is simple – live the values, and create genuine value for all stakeholders."}/>
                </div>
                <div className='lg:w-8/12 rounded-e-[1rem] h-5/6' >
                    <motion.img src={building1} className='w-full h-full rounded-[1rem] lg:rounded-none lg:rounded-e-[1rem]' alt="" {...animationConfig} />
                </div>
            </Container>
        </Section>

    )
}

export default AboutContent

const Section = styled(motion.section)`
width: 70%;
margin-bottom: 4rem;
@media(max-width:1400px){
  width:90%;
}
`;

const Container = styled.section`
display: flex;
flex-direction: row;
@media (max-width: 768px) {
    flex-direction: column-reverse;
}


`
const Headding = styled.h2`
 @media(max-width:1148px){
    font-size: 3.2rem;
}
    @media(max-width:958px){
    font-size: 2.5rem;
}
@media(max-width:500px){
    font-size: 1.4rem;
}
`

