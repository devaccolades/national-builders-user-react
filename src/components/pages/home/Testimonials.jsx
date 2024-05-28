import React, { useEffect, useState } from 'react'
import { Carousel, Card, Rating } from "@material-tailwind/react";
import styled from 'styled-components';
import Text from '../../common/Text';
import { motion } from 'framer-motion';
// Icons
import qotesIcon from '../../../assets/icons/qotes.svg'
import roundIcon from '../../../assets/icons/round.svg'


function Testimonials({ testimonials, animationConfig }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function truncateDescription(description,maxWords=40) {
    // let maxWords = 40;
    if (windowWidth >= 960 && windowWidth <= 1024) {
      maxWords = 40;
    }
    const words = description.split(' ');
    const truncatedWords = words.slice(0, maxWords);
    return truncatedWords.join(' ') + '...';
  }

  const truncateWords = (str, numWords) => {
    if (!str) return "";
    const words = str.split(" ");
    return words.slice(0, numWords).join(" ") + (words.length > numWords ? " ..." : "");
  };
  return (
    <>
      {/* Mobile */}
      <Section className='mx-auto  xl:hidden block' {...animationConfig}>
        <div className='flex flex-row gap-10 justify-center items-center '>
          <img src={roundIcon} className='w-[6rem]' alt="" />
          <p className='opacity-90 -ms-8 text-2xl md:text-3xl lg:text-5xl text-white'>Testimonials</p>
        </div>
        <Carousel className="flex w-auto sm:w-[60%] mx-auto rounded-xl overflow-hidden text-white mt-10">
          {testimonials.map((list, index) => (
            <div key={index} className='flex flex-col h-full'>
              <Card className='h-full bg-[#252630] p-8 pb-0 text-white'>
                <p className='text-2xl md:text-3xl lg:text-4xl text-center '><span className='text-red-500'>What they say</span> <span className=' bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text'>about us?</span></p>
                <p className='text-[1.5rem] font-bold text-wrap sticky z-10 pt-5'>{list?.name}</p>
                <p className='text- opacity-70 '>{list?.project}</p>
                <img src={qotesIcon} className='absolute h-20 top-[7rem] right-8' alt="" />
                <div className='h-[18rem] bg-no-repeat bg-center mt-4 bg-cover rounded-t-[1.1rem]' style={{ backgroundImage: `url(${list?.image})` }}>
                </div>
              </Card>
              <div className='p-5 min-h-[240px] w-[82%] rounded-b-[1.1rem] mx-auto bg-gray-900'>
                <Text align='' text={`${truncateDescription(list?.description,30)}`} />
                <div className='flex justify-center items-center md:pt-4 pb-6 md:pb-10'>
                  <Rating value={5} readonly />
                  <img src={qotesIcon} className='absolute h-10 right-12 ' alt="" />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </Section>
      {/* Laptop */}
      <Section className='h-[90vh] mx-auto hidden xl:block' {...animationConfig}>
        <Carousel className="flex rounded-xl text-white" autoplay={true} autoplayInterval={3000} infinite={true}>
          {testimonials.map((list, index) => (
            <div key={index} className='flex flex-row h-[100%] w-[70%] mx-auto'>
              <Card className='first-card rounded-[2rem] lg:p-10 xl:p-14 flex justify-between lg:rounded-[3rem] bg-no-repeat bg-center h-[85%]' style={{ backgroundColor: 'rgba(32,33,45,255)', backgroundImage: `url(${qotesIcon})` }}>
                <div>
                  <p className='text-4xl lg:text-5xl xl:text-6xl flex flex-col text-center whitespace-nowrap'><span className='text-red-500'>What they say</span><span className='text-white'> about us?</span></p>
                </div>
                <p className='flex flex-col text-center gap-2'><span className='text-2xl lg:text-4xl font-bold text-wrap sticky z-10 text-white'>{list?.name}</span><span className='text-xl opacity-70 lg:text-x text-white'>{truncateWords(list?.project, 4)}</span></p>
              </Card>
              <div className='flex flex-col gap-32 h-[85%]'>
                <div className='flex flex-row items-center justify-center -me-20 gap-10'>
                  <img src={roundIcon} alt="" className='w-auto lg:w-20 xl:w-auto' />
                  <p className='opacity-90 lg:text-4xl xl:text-5xl font-extralight'>Testimonials</p>
                </div>
                <Card className='flex rounded-[3rem] flex-row bg-gray-900 h-[60%] -ms-20'>
                  <div className='bg-no-repeat bg-cover bg-center  w-full rounded-s-[3rem]' style={{ backgroundImage: `url(${list?.image})` }} />
                  <div className='p-10 text-white grid grid-row-[1fr,5rem] w-full'>
                    <div className='flex justify-center items-center h-[200px] overflow-hidden'>
                      <Text align='center' text={`${truncateDescription(list?.description)}`} />
                    </div>
                    <div className='flex justify-center items-center'>
                      <Rating value={5} readonly />
                      <img src={qotesIcon} className='absolute h-10 right-6 bottom-6' alt="" />
                    </div>
                  </div>
                </Card>
              </div>

            </div>
            // <div key={index} className='w-[90%] grid grid-cols-2 h-full mx-auto container'>
            //   <div className='flex justify-center items-center'>
            //     <Card className='w-[16rem] lg:w-[30rem] h-5/6 flex flex-col justify-around gap-72 rounded-[2rem] lg:rounded-[3rem] p-5 bg-no-repeat bg-center' style={{ backgroundColor: 'rgba(32,33,45,255)', backgroundImage: `url(${qotesIcon})` }}>
            //       <div className='text-4xl lg:text-6xl ms-4 text-center flex flex-col justify-center items-center'>
            //         <p className='text-red-500'>What they say</p>
            //         <p className='text-white'>about us?</p>
            //       </div>
            //       <div className='ms-20  text-white'>
            //         <p className='text-2xl lg:text-4xl font-bold text-wrap sticky z-10'>{list?.name}</p>
            //         <p className='text-xl opacity-70 lg:text-xl mt-3'>{list?.project}</p>
            //       </div>
            //     </Card>
            //   </div>
            //   <div className='flex flex-col items-center'>
            //     <div className='flex flex-row mt-20 items-center justify-start gap-10'>
            //       <img src={roundIcon} alt="" />
            //       <p className='opacity-90 lg:text-5xl font-extralight'>Testimonials</p>
            //     </div>
            //     <Card className='grid grid-cols-2 shadow-gray-900 shadow-2xl h-3/6 mt-[8rem] bg-gray-900 -ms-[10rem] rounded-[2rem] lg:rounded-[3rem]'>
            //       <div className='bg-no-repeat bg-cover bg-center rounded-s-[3rem]' style={{ backgroundImage: `url(${list?.image})` }}>
            //       </div>
            //       <div className='p-10 text-white grid grid-row-[1fr,5rem]'>
            //         <div className='flex justify-center items-center'>
            //           <Text align='center' text={`${truncateDescription(list?.description)}`} />
            //         </div>
            //         <div className='flex justify-center items-center'>
            //           <Rating value={5} readonly />
            //           <img src={qotesIcon} className='absolute h-10 right-6 bottom-6' alt="" />
            //         </div>
            //       </div>
            //     </Card>
            //   </div>
            // </div>
          ))}
        </Carousel>
      </Section>
    </>
  )
}

export default Testimonials

const Section = styled(motion.div)`
margin-top: 8rem;
margin-bottom: 4rem;

@media(max-width:1400px){
  width:90%;
}
@media(max-width:749px){
  width:100%;
}
.first-card{
  width: 60%;
}
`;

const P = styled.p`
opacity: 65;
    font-family: 'popins_regular';
  font-size: 1.2rem;
`;

