import React, { useEffect, useRef, useState } from 'react'
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
import { GetNewsAndEventsApi } from '../../../services/services';
import NoDataFound from '../../common/NoDataFound';


function NewsAndEventsListing({ animationConfig }) {
  const [newsAndEvents, setNewsAndEvents] = useState([])
  const [limit, setLimit] = useState({ startLimit: 0, endLimit: 3 })
  const [totalCount, setTotalCount] = useState(0)
  const topRef = useRef(null);
  const [mobileView, setMobileView] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 720);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetNewsAndEventsApi(limit.startLimit, limit.endLimit)
        const { StatusCode, data, total_count } = res.data;
        if (StatusCode === 6000) {
          setNewsAndEvents(data)
          setTotalCount(total_count)
        }
      } catch (error) {
        setNewsAndEvents([])
      }
    };
    fetchData()
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  }, [limit])

  const truncateText = (htmlContent) => {
    const words = htmlContent.split(/\s+/);
    let trimWords = ''
    if (!mobileView) {
      trimWords = words.slice(0, 65).join(' ');
    } else {
      trimWords = words.slice(0, 30).join(' ');
    }
    trimWords += ' ...';
    return trimWords;
  };
  return (
    <Section  className='mx-auto' {...animationConfig}>
      <Listing ref={topRef} {...animationConfig}>
        {newsAndEvents && newsAndEvents?.length === 0 ? (
          <div className='flex justify-center items-center w-full'>
            <NoDataFound text={"News And Events Not Found..."} />
          </div>

        ) : (
          <>
            {newsAndEvents[0] &&
              <Card className="bg-gray-900 bg-opacity-60 lg:grid lg:grid-cols-2 w-full mb-6">
                <img
                  className='mt-4 mx-4 lg:hidden block lg:mt-5 lg:mx-5 rounded-[.8rem] '
                  src={newsAndEvents[0]?.image || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
                  alt={newsAndEvents[0]?.image_alt}
                />
                <div className='hidden lg:block m-5 rounded-[1.1rem] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${newsAndEvents[0]?.image})` }}>
                </div>
                <div>
                  <CardBody>
                    <div className='flex'>
                      <p className='p-2 text-g border border-gray-800 rounded-[2rem]'>{newsAndEvents[0]?.date_added}</p>
                    </div>
                    <Typography variant="h5" color="blue-gray" className="mt-4 mb-3 text-white">
                      {newsAndEvents[0]?.title}
                    </Typography>
                    <Typography className='lg:text-lg text-justify' dangerouslySetInnerHTML={{ __html: truncateText(newsAndEvents[0]?.body) }} />
                  </CardBody>
                  <CardFooter className=" pt-0 -my-2 lg:my-0 cursor-pointer">
                    <div className='flex flex-row gap-1' onClick={() => navigate(`/news-and-events/${newsAndEvents[0]?.slug}`)}>
                      <p className='text-red-500'>Read more</p>
                      <img src={chevronsrightIcon} alt="read me icons" />
                    </div>
                  </CardFooter>
                </div>
              </Card>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {newsAndEvents?.map((newsevents, index) => {
                if (index !== 0) {
                  return (
                    <Card className="bg-gray-900 bg-opacity-60">
                      <img
                        className='image mt-4 mx-4 lg:mt-5 lg:mx-5 rounded-[.8rem]'
                        src={newsevents?.image || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
                        alt={newsevents?.image_alt}
                      />
                      <CardBody>
                        <div className='flex mb-4'>
                          <p className='p-2 text-g border border-gray-800 rounded-[2rem]'>{newsevents?.date_added}</p>
                        </div>
                        <Typography variant="h5" color="blue-gray" className="mb-2 text-white">
                          {newsevents?.title}
                        </Typography>
                        <Typography className='lg:text-lg' dangerouslySetInnerHTML={{ __html: truncateText(newsevents?.body) }} />
                        {/* {truncateText(mobileView, blogs?.description)} */}
                      </CardBody>
                      <CardFooter className=" pt-0 -my-2 lg:my-0 cursor-pointer">
                        <div className='flex flex-row gap-1' onClick={() => navigate(`/news-and-events/${newsevents.slug}`)}>
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
              {Array.from({ length: totalCount / 3 }, (_, index) => (
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
width: 70%;
@media(max-width:1400px){
  width:90%;
}
`;

const Listing = styled.div`
  .image{
    /* height: 50% !important; */
  }
`