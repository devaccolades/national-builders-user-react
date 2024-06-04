import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Text from '../../common/Text'
import { Rating } from '@material-tailwind/react';
import { motion } from 'framer-motion';
// Icons
import qotesIcon from '../../../assets/icons/qotes.svg'
import RectangleBlue from '../../../assets/images/projectdetails/Rectangleblue.svg';
import RectangleWhite from '../../../assets/images/projectdetails/Rectanglewhite.svg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GetTestmonialsApi } from '../../../services/services';
import NoDataFound from '../../common/NoDataFound';

function TestimonialsList({ animationConfig }) {
  const [testimonials, setTestimonials] = useState([])
  const [limit, setLimit] = useState({ startLimit: 0, endLimit: 3 })
  const [totalCount, setTotalCount] = useState(0)
  const topRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetTestmonialsApi(limit.startLimit, limit.endLimit)
        const { StatusCode, data, total_count } = res.data;
        if (StatusCode === 6000) {
          setTestimonials(data)
          setTotalCount(total_count)
        }
      } catch (error) {
        console.log(error);
        setTestimonials([])
      }
    }
    fetchData()
    if (limit.startLimit === 0) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    } else {
      window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });

    }
  }, [limit])


  return (
    <Section ref={topRef} className='mx-auto container flex flex-col gap-10 lg:-mt-20'>
      <div className='grid grid-cols-1 gap-10'>
        {testimonials && testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-0' key={index} >
              <div>
                <motion.img src={testimonial.image} className='lg:h-[23rem] lg:w-[30rem] w-full cursor-pointer rounded-[1.1rem] lg:rounded-e-none' alt={testimonial?.image_alt} {...animationConfig} whileHover={{ scale: 1.1 }} />
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
                    <img src={qotesIcon} className='w-10' alt="qotes-icons" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))
        ) : (
          <div className='flex justify-center items-center w-full'>
            <NoDataFound text={"Testimonials Not Found..."} />
          </div>
        )}
      </div>
      {testimonials.length > 0 && <motion.div className='flex justify-center items-center' {...animationConfig}>
        <div className='bg-black flex flex-row p-1 rounded-[1.1rem]'>
          <button className='bg-gray-900 p-3 rounded-full' onClick={() => {
            const newStartLimit = Math.max(0, limit.startLimit - 3);
            const newEndLimit = Math.min(limit.endLimit - 3, totalCount);
            setLimit({ startLimit: newStartLimit, endLimit: newEndLimit });
          }} disabled={limit.startLimit === 0}>
            <FaArrowLeft />
          </button>
          <div className='flex flex-row justify-center gap-1 md:px-2'>
            {Array.from({ length: Math.ceil(totalCount / 3) }, (_, index) => (
              <img key={index} src={(index * 3 === limit.startLimit) ? RectangleBlue : RectangleWhite} className='w-1/12 md:w-2/12' alt="" />
            ))}
          </div>
          <button className='bg-gray-900 p-3 rounded-full' onClick={() => {
            const newStartLimit = limit.startLimit + 3;
            const newEndLimit = limit.endLimit + 3;
            setLimit({ startLimit: newStartLimit, endLimit: newEndLimit });
          }} disabled={limit.endLimit >= totalCount}>
            <FaArrowRight />
          </button>
        </div>
      </motion.div>}


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
    font-family: 'satoshi_bold';
    font-weight: 800;
    @media(max-width:1024px){
        text-align: center;
        font-size: 1.6rem;
}`

