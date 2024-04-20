import React from 'react'

import { Carousel, Typography, Button, Card, Rating } from "@material-tailwind/react";
import qotes from '../../../assets/images/common/qotes.svg'
import round from '../../../assets/images/common/round.svg'

import User1 from '../../../assets/images/home/testimonials-shyam-prasad.png'
import styled from 'styled-components';

function Testimonials() {
  return (
    <Section className='h-screen mb-36'>
      <div className='block lg:hidden -mt-48'>
        <div className='flex justify-center  items-center '>
          <img src={round} className='w-3/12' alt="" />
          <p className='ps-10 opacity-90 -ms-8 text-2xl font-extralight'>Testimonials</p>
        </div>
      </div>
      <Carousel className="block lg:hidden rounded-xl text-white ">
        <div className=''>
          <div className='bg-252630 h-[36rem] text-center mt-20 p-10 rounded-[2rem]'>
            <p className='text-3xl '><span className='text-red-500'>What they say</span> <span className=' bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text'>about us?</span></p>
            <img src={qotes} className='absolute  transform -translate-y-1/2 top-56 right-8 left-auto w-20' alt="" />
            <p className='text-2xl pt-14'>SHYAMPRASAD T C</p>
            <p className='text-xl opacity-65 mt-3'>NATIONAL SIGNATURE</p>
            <div className='w-full'>
              <img src={User1} className='mt-5 w-full rounded-[2rem]' alt="" />
              <div className='bg-gray-700 pt-10 pb-4 -mt-5 rounded-b-[2rem] px-5'>
                <p className='text-lg opacity-50'>When i thought buy a home at kochi i started immense research and finally i arrived at a conclusion that natinal bilders is the best builders in kochi.

                  When i went through the history of projects of national Builders...</p>

              </div>
            </div>
          </div>

        </div>
      </Carousel>

      <Carousel className="hidden lg:block rounded-xl text-white ">
        <div className=' grid grid-cols-2 h-full mx-auto container '>
          <div className='flex justify-center items-center'>
            <Card className='lg:h-4/5 md:h-[26rem] h-[20rem] grid grid-rows-3 w-[10rem] md:w-[16rem] lg:w-[31rem] rounded-[2rem] lg:rounded-[3rem]' style={{ backgroundColor: 'rgba(32,33,45,255)' }}>
              <div className='text-4xl lg:text-6xl ms-4 text-center flex lg:justify-center items-center'>
                <div className='mt-4 lg:mt-'>
                  <p className='text-red-500'>What they say</p>
                  <p className='text-white'>about us?</p>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <img src={qotes} className='' alt="" />
              </div>
              <div className='flex justify-center items-center -mt-4 lg:-mt-0'>
                <div className='ms-6 lg:ms-12 text-white'>
                  <p className='text-2xl lg:text-4xl font-bold text-wrap sticky z-10'>SHYAMPRASAD T C</p>
                  <p className='text-xl opacity-70 lg:text-xl mt-3'>NATIONAL SIGNATURE</p>
                </div>

              </div>
            </Card>
          </div>
          <div className='grid grid-rows-[18rem,1fr]'>
            <div className='flex ms-20 items-center '>
              <img src={round} alt="" />
              <p className='ps-10 opacity-90 -ms-8 lg:-ms-0 lg:text-5xl font-extralight'>Testimonials</p>
            </div>
            <div className='flex items-center w-full '>
              <Card className='h-[10rem]  md:h-[14rem]  lg:h-4/6 -mt-[11rem] lg:-mt-10 grid grid-cols-2 -ms-40 z-1 bg-gray-900 rounded-[2rem] lg:rounded-[3rem]'>
                <div className='w-full h-[10rem] md:h-full lg:h-full bg-cover relative rounded-s-[2rem] lg:rounded-s-[3rem]' style={{ backgroundImage: `url(${User1})` }}>
                </div>
                <div className='grid h-full grid-rows-[1fr,7rem] my-auto '>
                  <div className='flex justify-center items-center'>
                    <div className='mx-10 mt-5'>
                      <P>When i thought buy a home at kochi i started immense research and finally i arrived at a conclusion that natinal bilders is the best builders in kochi.</P>
                      <P className='pt-4'>When i went through the history of projects of national Builders...</P>
                    </div>

                  </div>
                  <div className='grid grid-cols-[1fr,10rem] bg-re'>
                    <div className='flex justify-end items-start w-full'>
                      <Rating value={5} readonly />
                    </div>
                    <div className='flex justify-center items-center'>
                      <img src={qotes} className='w-10' alt="" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Carousel>
    </Section>
  )
}

export default Testimonials

const Section = styled.div``

const P = styled.p`
opacity: 65;
    font-family: 'popins_regular';
  font-size: 1.2rem;
`;
