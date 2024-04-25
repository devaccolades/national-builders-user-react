import React from 'react'
import styled from 'styled-components';
import Text from '../../common/Text'
import { Typography } from '@material-tailwind/react';

// Icons
import chevronsrightIcon from '../../../assets/icons/chevrons-right.svg'

function NewsAndEventsListing({ data }) {
  return (
    <Section className='mx-auto container'>
      <Listing className='grid col-2 gap-5'>
        {data && data.length === 0 ? (
          <Text align='center' text={"No Data Found"} />
        ) : (
          <>
            {data?.map((news, index) => (
               <div key={index} className={`grid ${index === 0 ? 'grid-cols-2' : 'grid-cols-1'} gap-8 bg-gray-900 bg-opacity-60 p-6 rounded-[1.1rem]`}>
               {index === 0 ? (
                   <>
                       <img src={news.image} className='rounded-[1.1rem]' alt="new image" />
                       <div className='flex flex-col items-start'>
                           <p className='px-3 py-2 capitalize text-xs border opacity-80 border-gray-800 rounded-[2rem]'>{news.date}</p>
                           <Typography variant="h5" color="white" className="mt-5 mb-3 text-opacity-90">
                               {news?.title}
                           </Typography>
                           <Text align='' text={truncateText(news.description)} />
                           <div className='flex justify-end pt-5 items-end w-full'>
                               <p className='text-red-500'>Read more</p>
                               <img src={chevronsrightIcon} alt="" />
                           </div>
                       </div>
                   </>
               ) : (
                   <div className='grid grid-row-2 gap-8'>
                       <img src={news.image} className='rounded-[1.1rem]' alt="new image" />
                       <div className='flex flex-col items-start'>
                           <p className='px-3 py-2 capitalize text-xs border opacity-80 border-gray-800 rounded-[2rem]'>{news.date}</p>
                           <Typography variant="h5" color="white" className="mt-5 mb-3 text-opacity-90">
                               {news?.title}
                           </Typography>
                           <Text align='' text={truncateText(news.description)} />
                           <div className='flex justify-end pt-5 items-end w-full'>
                               <p className='text-red-500'>Read more</p>
                               <img src={chevronsrightIcon} alt="" />
                           </div>
                       </div>
                   </div>
               )}
           </div>

            ))}
          </>
        )}
      </Listing>
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

function truncateText(text) {
  const words = text.split(' ');
  if (words.length > 48) {
    return words.slice(0, 56).join(' ') + '...';
  } else {
    return text;
  }
}