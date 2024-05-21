import React from 'react'
import styled from 'styled-components'
import Text from '../../common/Text'
import { motion } from 'framer-motion'

import roundIcon from '../../../assets/icons/pointicon.svg'

function LocationMap({ animationConfig, iframe, distance }) {
  return (
    <Section className='mx-auto'>
      <Container className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] p-5 lg:p-8' {...animationConfig}>
        <Heading {...animationConfig}>Location Map</Heading>
        <div className='flex flex-col lg:grid grid-cols-2 gap-10'>
          <motion.div className='h-full' {...animationConfig}>
            <Heading2> Distances</Heading2>
            {distance && distance.length > 0 ? (
              distance.map((dist, index) => (
                <div className='flex flex-row gap-4 my-5'>
                  <img src={roundIcon} alt="" />
                  <div className='flex flex-col lg:flex-row w-full lg:gap-4'>
                    <Text align='' text={dist.location_name} />
                    <div className="flex-grow flex items-center">
                      <hr className='border-t-2 border-gray-500 w-full' />
                    </div>
                    <Text align='' text={`${dist.distance} ${dist?.measurement_unit === 'km' ? 'K.m' : dist?.measurement_unit === 'meter' ? 'Meter' : dist?.measurement_unit}`} />
                  </div>
                </div>
              ))
              
            ) : (
              <Text mt='10' align='center' text={"Distance Not Found"} />
            )}
           

          </motion.div>
          <motion.div className='flex justify-center  items-start' {...animationConfig}>
            {iframe !== "" ? (
              <Iframe dangerouslySetInnerHTML={{ __html: iframe }} />
              // <iframe
              //   className='rounded-[1.1rem]'
              //   src={iframe}
              //   width="800"
              //   height="600"
              //   frameBorder="0"
              //   style={{ border: '0' }}
              //   allowFullScreen=""
              //   aria-hidden="false"
              //   tabIndex="0"
              // />
            ) : (
              <Text align='center' text={"Map Link Not Provide"} />
            )}

          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default LocationMap

const Section = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
width: 70%;
    @media(max-width:1400px){
      width:90%; 
 
}`

const Container = styled(motion.div)`

`

const Heading = styled(motion.p)`
    font-size: 1.6rem;
    padding-bottom: 0.6rem;
    @media(max-width:1024px){
        text-align: center;
        font-size: 1.6rem;
}`

const Heading2 = styled.p`
    font-size: 1.3rem;
    font-family: 'popins_bold';
    opacity: 50%;
    @media(max-width:1024px){
        font-size: 1.6rem;
}
@media(max-width:425px){
    font-size: 1.6rem;
}
@media (max-width: 375px) {
    font-size: 1.6rem;
}
`;

const Iframe = styled.div`
  width: 100%;

  iframe {
    width: 100% !important;
    height: 600px;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    iframe {
      height: 300px; 
    }
  }
`;
