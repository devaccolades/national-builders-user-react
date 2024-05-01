import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Text from '../../common/Text';
import { useNavigate } from 'react-router-dom';

// Icons
import chevronsrightIcon from '../../../assets/icons/chevrons-right.svg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import RectangleBlue from '../../../assets/images/projectdetails/Rectangleblue.svg';
import RectangleWhite from '../../../assets/images/projectdetails/Rectanglewhite.svg';


function NewsAndEventsListing({ animationConfig, data }) {
  const navigate = useNavigate()
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth > 720);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Section className='mx-auto container' {...animationConfig}>
      <Listing {...animationConfig}>
        {data && data?.length === 0 ? (
          <div className='-mt-20'>
            <Text align='center' text={"Blogs Not Found"} />
          </div>
        ) : (
          <>
            {data[0] &&
              <Card className="bg-gray-900 bg-opacity-60 lg:grid lg:grid-cols-2 w-full mb-6">
                <img
                  className='mt-4 mx-4 lg:hidden block lg:mt-5 lg:mx-5 rounded-[.8rem] '
                  src={data[0]?.image || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
                  alt="card-image"
                />
                <div className='hidden lg:block m-5 rounded-[1.1rem] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${data[0]?.image})` }}>
                </div>
                <div>
                  <CardBody>
                    <div className='flex'>
                      <p className='p-2 text-g border border-gray-800 rounded-[2rem]'>{data[0]?.date}</p>
                    </div>
                    <Typography variant="h5" color="blue-gray" className="mt-4 mb-3 text-white">
                      {data[0]?.title}
                    </Typography>
                    <Typography className='lg:text-lg text-justify'>
                      {truncateText(mobileView, data[0]?.description)}
                    </Typography>
                  </CardBody>
                  <CardFooter className=" pt-0 -my-2 lg:my-0 cursor-pointer">
                    <div className='flex flex-row gap-1' onClick={()=>navigate('/news-and-events/details')}>
                      <p className='text-red-500'>Read more</p>
                      <img src={chevronsrightIcon} alt="" />
                    </div>
                  </CardFooter>
                </div>
              </Card>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {data?.map((blogs, index) => {
                if (index !== 0) {
                  return (
                    <Card className="bg-gray-900 bg-opacity-60">
                      <img
                        className='mt-4 mx-4 lg:mt-5 lg:mx-5 rounded-[.8rem]'
                        src={blogs?.image || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
                        alt="card-image"
                      />
                      <CardBody>
                        <div className='flex mb-4'>
                          <p className='p-2 text-g border border-gray-800 rounded-[2rem]'>{data[0].date}</p>
                        </div>
                        <Typography variant="h5" color="blue-gray" className="mb-2 text-white">
                          {blogs?.title}
                        </Typography>
                        <Typography className='lg:text-lg'>
                          {truncateText(mobileView, blogs?.description)}
                        </Typography>
                      </CardBody>
                      <CardFooter className=" pt-0 -my-2 lg:my-0 cursor-pointer">
                        <div className='flex flex-row gap-1' onClick={()=>navigate('/news-and-events/details')}>
                          <p className='text-red-500'>Read more</p>
                          <img src={chevronsrightIcon} alt="" />
                        </div>
                      </CardFooter>
                    </Card>
                  );
                }
                return null;
              })}
            </div>
          </>
        )}
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
      </Listing>
    </Section>
  )
}

export default NewsAndEventsListing

const Section = styled(motion.section)`
margin-top: 1rem;

@media(max-width:1400px){
  width:90%;
}
`;

const Listing = styled.div``

function truncateText(mobileView, text) {
  const words = text.split(' ');
  if (words.length > 30) {
    if (mobileView) {
      return words.slice(0, 75).join(' ') + '...';
    } else {
      return words.slice(0, 30).join(' ') + '...';
    }
  } else {
    return text;
  }
}