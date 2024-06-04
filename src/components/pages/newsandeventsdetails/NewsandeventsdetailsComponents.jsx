import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Typography } from '@material-tailwind/react';
import Text from '../../common/Text';

// Icons
import facebookIcon from '../../../assets/icons/facebook.svg'
import twitterIcon from '../../../assets/icons/twitter.svg'
import linkedInIcon from '../../../assets/icons/linkedin.svg'
import linkIcon from '../../../assets/icons/links.svg'
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

function NewsandeventsdetailsComponents({ animationConfig, data, suggestions }) {
  const navigate = useNavigate()

  return (
    <Section className='mx-auto flex flex-col gap-5 lg:gap-8' {...animationConfig}>
      <Backgroundimage className='bg-gray-900 bg-opacity-50 lg:bg-transparent p-6 lg:p-0 rounded-[1.1rem] rounded-b-none lg:rounded-none -mb-5 lg:mb-0'>
        <div className='image rounded-[1.1rem]' 
        dangerouslySetInnerHTML={{ __html: data?.youtube_link }}
        style={{ backgroundImage: `url(${data?.image})` }}
        >
        </div>
        {/* <img src={image1} className='image h-full w-full rounded-[1.1rem]' alt="" /> */}
      </Backgroundimage>
      <Details className='flex flex-col lg:flex-row items-start gap-6'>
        <div className='w-full flex flex-col-reverse lg:flex-row gap-6'>
          <Icons className='w-full lg:w-1/12 flex justify-center lg:justify-start flex-row lg:flex-col gap-5'>
          <a href='https://www.facebook.com/nationalbuilderskerala' target='_blank' className='bg-gray-900 bg-opacity-50 flex justify-center items-center rounded-[1.1rem]'>
              <img src={facebookIcon} className='m-5' alt="" />
            </a>
            <div className='bg-gray-900 bg-opacity-50 flex justify-center items-center rounded-[1.1rem]'>
              <img src={twitterIcon} className='m-5' alt="" />
            </div>
            <a href='https://www.linkedin.com/company/national-builders/' target='_blank' className='bg-gray-900 bg-opacity-50 flex justify-center items-center rounded-[1.1rem]'>
              <img src={linkedInIcon} className='m-5' alt="" />
            </a>
            <a href='https://www.youtube.com/channel/UC-LD4K17OCGqmZcGedYTdXA' target='_blank' className='bg-gray-900 bg-opacity-50 flex justify-center items-center rounded-[1.1rem]'>
              <img src={linkIcon} className='m-5' alt="" />
            </a>
          </Icons>
          <TextContent className='bg-gray-900 bg-opacity-50 w-full rounded-[1.1rem] rounded-t-none lg:rounded-t-[1.1rem] p-6'>
            <div className='flex flex-row -mt-5 lg:mt-0'>
              <p className='text-gray-500 p-2 border border-gray-600 rounded-[2rem]'>{data?.date_added}</p>
            </div>
            <Typography variant="h5" color="white" className="mt-5 mb-3 text-opacity-90">
              {data?.title}
            </Typography>
            {data?.body ? (<div className='text-content break-words leading-7 lg:leading-8' dangerouslySetInnerHTML={{ __html: data?.body }} />) : (
              <div className='flex justify-center items-center' >
                <Text text={"Description Not Found"} />
              </div>
            )}

          </TextContent>
        </div>
        <Suggested className='w-full lg:w-5/12 h-auto bg-gray-900 bg-opacity-50 rounded-[1.1rem] px-6'>
          <Typography variant="h5" className="mt-5 mb-3 text-gray-400 text-opacity-90">
            Suggested Reads
          </Typography>
          <div className='flex flex-col gap-5 lg:gap-0 my-2 lg:my-5'>
            {suggestions[0] &&
              <>
                <div className='flex flex-row gap-2 lg:gap-5 items-center cursor-pointer' onClick={() => navigate(`/news-and-events/${suggestions[0]?.slug}`)}>
                  <img src={suggestions[0]?.image} alt={suggestions[0]?.image_alt} className='w-2/12' />
                  <Typography variant="p" className="text-white text-[.9rem] text-opacity-90">
                    {suggestions[0]?.title}
                  </Typography>
                </div>
                <hr className='border border-gray-800 lg:my-4' />
              </>
            }
            {suggestions[1] && <>
              <div className='flex flex-row gap-2 lg:gap-5 items-center cursor-pointer' onClick={() => navigate(`/news-and-events/${suggestions[1]?.slug}`)}>
                <img src={suggestions[1]?.image} alt={suggestions[1]?.image_alt} className='w-2/12' />
                <Typography variant="p" className="text-white text-[.9rem] text-opacity-90">
                  {suggestions[1]?.title}
                </Typography>
              </div>
              <hr className='border border-gray-800 lg:my-4' />
            </>}
            {suggestions[2] && <div className='flex flex-row gap-2 lg:gap-5 items-center cursor-pointer' onClick={() => navigate(`/news-and-events/${suggestions[2]?.slug}`)}>
              <img src={suggestions[2]?.image} alt={suggestions[2]?.image_alt} className='w-2/12' />
              <Typography variant="p" className="text-white text-[.9rem] text-opacity-90">
                {suggestions[2]?.title}
              </Typography>
            </div>}
          </div>
        </Suggested>
      </Details>
    </Section>
  )
}

export default NewsandeventsdetailsComponents

const Section = styled(motion.section)`
margin-top: 2rem;
margin-bottom: 4rem;
width: 70%;
@media(max-width:1400px){
  width:90%;
}
`;
const Backgroundimage = styled.div`
height: 45rem;
iframe{
  width: 100%;
  height: 100%;
}
  .image{
    background: no-repeat;
background-position: center;
background-size: cover;
height: 100%;
  }
  @media(max-width:1024px){
    height: 38rem;
}
  @media(max-width:768px){
    height: 30rem;
}
@media(max-width:425px){
    height: 25rem;
}
@media(max-width:320px){
    height: 20rem;
}

`

const Details = styled.div``

const Icons = styled.div``

const Suggested = styled.div`
padding-bottom: 0.8rem !important;
`

const TextContent = styled.div`
  .text-content{
  h1, h2, h3, h4, h5, h6 {
    color: white;
    font-size: 20px !important;
    margin-top: 20px;
    margin-bottom: 10px;
    opacity: 80%;
    font-family: Roboto,sans-serif;

  }
  p{
    font-size: 1.2rem;
    opacity: 0.55;
    margin-top: 10px;
    font-family: popins_regular;
    @media (max-width: 768px) {
    font-size: 1.1rem;
    }

    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }}
`