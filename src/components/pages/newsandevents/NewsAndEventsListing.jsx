import React from 'react'
import styled from 'styled-components';
import Text from '../../common/Text'
import { Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';

// Icons
import chevronsrightIcon from '../../../assets/icons/chevrons-right.svg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import RectangleBlue from '../../../assets/images/projectdetails/Rectangleblue.svg';
import RectangleWhite from '../../../assets/images/projectdetails/Rectanglewhite.svg';

function NewsAndEventsListing({ animationConfig,data }) {
  return (
    <Section className='mx-auto container'>
      <Listing className='grid col-2 gap-5'>
        {data && data.length === 0 ? (
          <Text align='center' text={"No Data Found"} />
        ) : (
          <>
            {data[0] &&
              <motion.div className={`lg:grid grid-cols-2 gap-10 bg-gray-900 bg-opacity-60 p-6 rounded-[1.1rem] mb-2`} {...animationConfig}>
                <img src={data[0].image} className='rounded-[1.1rem]' alt="new image" />
                <div className='flex flex-col items-start'>
                    <p className='p-3 mt-5 lg:mt-0 capitalize text-xs border opacity-80 border-gray-800 rounded-[2rem]'>{data[0].date}</p>
                  <Typography variant="h5" color="white" className="mt-5 mb-3 text-opacity-90">
                    {data[0]?.title}
                  </Typography>
                  <Text align='' text={truncateText(data[0].description)} />
                  <div className='flex pt-5 justify-end cursor-pointer items-end w-full'>
                    <p className='text-red-500'>Read more</p>
                    <img src={chevronsrightIcon} alt="" />
                  </div>
                </div>
              </motion.div>
            }
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              {data?.map((news, index) => {
                if (index !== 0) {
                  return (
                    <motion.div key={index} className='flex flex-col gap-6 justify-between  bg-gray-900 bg-opacity-60 p-6 rounded-[1.1rem]' {...animationConfig}>
                      <img src={news.image} className='rounded-[1.1rem] w-full h-[16rem] lg:h-[16rem]' alt="new image" />
                      <div className='flex flex-col items-start'>
                        <p className='p-3 capitalize text-xs border opacity-80 border-gray-800 rounded-[2rem]'>{news.date}</p>
                        <Typography variant="h5" color="white" className="mt-5 mb-3 text-opacity-90">
                          {truncateHeadding(news?.title)}
                        </Typography>
                        <Text align='' text={truncateText(news.description)} />
                        <div className='flex justify-end lg:justify-start items-end w-full mt-4'>
                          <p className='text-red-500'>Read more</p>
                          <img src={chevronsrightIcon} alt="" />
                        </div>
                      </div>
                    </motion.div>
                  );
                }
                return null;
              })}
            </div>

          </>
        )}

      </Listing>
      <motion.div className='flex justify-center items-center my-10' {...animationConfig}>
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
      </motion.div>
    </Section>
  )
}

export default NewsAndEventsListing

const Section = styled.section`
@media(max-width:1400px){
  width:90%;
}
`;

const Listing = styled.div``

function truncateHeadding(text) {
  const words = text.split(' ');
  if (words.length > 11) {
    return words.slice(0, 11).join(' ') + ' ...';
  } else {
    return text;
  }
}

function truncateText(text) {
  const words = text.split(' ');
  if (words.length > 48) {
    return words.slice(0, 56).join(' ') + '...';
  } else {
    return text;
  }
}