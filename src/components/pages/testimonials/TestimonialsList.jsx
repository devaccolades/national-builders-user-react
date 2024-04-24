import React from 'react'
import styled from 'styled-components';
import Text from '../../common/Text'
import { Rating } from '@material-tailwind/react';
import { motion } from 'framer-motion';
// Icons
import qotesIcon from '../../../assets/icons/qotes.svg'
import RectangleBlue from '../../../assets/images/projectdetails/Rectangleblue.svg';
import RectangleWhite from '../../../assets/images/projectdetails/Rectanglewhite.svg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function TestimonialsList({ animationConfig, data }) {
  return (
    <Section className='mx-auto container flex flex-col gap-10 lg:-mt-20'>
      <div className='grid grid-cols-1 gap-10'>
        {data?.testimonials && data?.testimonials.length > 0 ? (
          data?.testimonials.map((testimonial, index) => (
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-0' key={index} >
              <div>
                <motion.img src={testimonial.image} className='lg:h-[23rem] lg:w-[30rem] w-full cursor-pointer rounded-[1.1rem] lg:rounded-e-none' alt="testimontionl image" {...animationConfig} whileHover={{ scale: 1.1 }} />
              </div>
              <motion.div className='bg-[#222222] flex flex-col items-center w-full p-5 lg:p-12 rounded-[1.1rem] lg:rounded-s-none lg:rounded-b-[1.1rem]' {...animationConfig}>
                <Heading className='lg:w-[40%] text-center'>{testimonial.name}</Heading>
                <Text text={testimonial.project} />
                <Text mt='5' text={testimonial.description} />
                <div className='h-20 flex flex-row w-full'>
                  <div className='w-full flex justify-end '>
                    <Rating value={5} className='-me-16' readonly />
                  </div>
                  <div className='w-full flex justify-end items-end'>
                    <img src={qotesIcon} className='w-10' alt="" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))
        ) : (
          <Text align='center' text={"No Data Found..."} />
        )}
      </div>
      <div className='flex justify-center items-center'>
        <div className='bg-black flex flex-row p-1 rounded-[1.1rem]'>
          <button className='bg-gray-900  p-3 rounded-full' >
            <FaArrowLeft />
          </button>
          <div className='flex flex-row justify-center gap-1 md:px-2'>
            {Array.from({ length: 6 }, (_, index) => (
              <>
                <img key={index} src={(2 === index) ? RectangleBlue : RectangleWhite} className='w-1/12 md:w-2/12' alt="" />
              </>
            ))}
          </div>
          <button className='bg-gray-900  p-3 rounded-full' >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </Section>
  )
}

export default TestimonialsList

const Section = styled.section`
/* margin-top: 5rem; */
margin-bottom: 5rem;
@media(max-width:1400px){
  width:90%;
}
`;

const Heading = styled.p`
    font-size: 1.6rem;
    padding-bottom: 0.4rem;
    font-family: 'popins_bold';
    @media(max-width:1024px){
        text-align: center;
        font-size: 1.6rem;
}`

