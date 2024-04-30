import React from 'react'
import { Carousel, Typography, Button, Card, Rating } from "@material-tailwind/react";
import styled from 'styled-components';
import Text from '../../common/Text';

// Icons
import qotesIcon from '../../../assets/icons/qotes.svg'
import roundIcon from '../../../assets/icons/round.svg'


function Testimonials({testimonials,animationConfig}) {
  return (
    <>
    
    <Section className='h-[90vh] hidden lg:block'>
      <Carousel className="flex rounded-xl text-white" autoplay={true} autoplayInterval={3000} infinite={true}>
        {testimonials.map((list,index)=>(
          <div key={index} className='w-[90%] grid grid-cols-2 h-full mx-auto container'>
          <div className='flex justify-center items-center'>
            <Card className='w-[16rem] lg:w-[30rem] h-5/6 flex flex-col justify-around gap-72 rounded-[2rem] lg:rounded-[3rem] p-5 bg-no-repeat bg-center' style={{ backgroundColor: 'rgba(32,33,45,255)', backgroundImage: `url(${qotesIcon})` }}>
              <div className='text-4xl lg:text-6xl ms-4 text-center flex flex-col justify-center items-center'>
                <p className='text-red-500'>What they say</p>
                <p className='text-white'>about us?</p>
              </div>
              <div className='ms-20  text-white'>
                <p className='text-2xl lg:text-4xl font-bold text-wrap sticky z-10'>{list?.name}</p>
                <p className='text-xl opacity-70 lg:text-xl mt-3'>{list?.project}</p>
              </div>
            </Card>
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex flex-row  items-center justify-start gap-10'>
              <img src={roundIcon} alt="" />
              <p className='opacity-90 lg:text-5xl font-extralight'>Testimonials</p>
            </div>
            <Card className='grid grid-cols-2 shadow-gray-900 shadow-2xl h-3/6 mt-[12rem] bg-gray-900 -ms-[10rem] rounded-[2rem] lg:rounded-[3rem]'>
              <div className='bg-no-repeat bg-cover bg-center rounded-s-[3rem]' style={{backgroundImage:`url(${list?.image})` }}>
              </div>
              <div className='p-10 text-white grid grid-row-[1fr,5rem]'>
                <div className='flex justify-center items-center'>
                <Text align='center' text={`${truncateDescription(list?.description)}`}/>
                </div>
                <div className='flex justify-center items-center'>
                  <Rating value={5} readonly/>
                  <img src={qotesIcon} className='absolute h-10 right-6 bottom-6' alt="" />
                </div>
              </div>
            </Card>
          </div>
        </div>
        ))}
      </Carousel>
    </Section>
    </>
  )
}

export default Testimonials

const Section = styled.div`
margin-top: 4rem;
margin-bottom: 4rem;
@media(max-width:1400px){
  width:90%;
}
@media(max-width:749px){
  width:100%;
}
`;

const P = styled.p`
opacity: 65;
    font-family: 'popins_regular';
  font-size: 1.2rem;
`;


function truncateDescription(description) {
  const words = description.split(' ');
  const truncatedWords = words.slice(0, 40);
  return truncatedWords.join(' ') +'...';
}
