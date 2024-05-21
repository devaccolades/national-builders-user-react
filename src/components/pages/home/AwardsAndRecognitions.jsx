import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

function AwardsAndRecognitions({animationConfig,data}) {

  return (
    <Section className='pt-20 py-56 mx-auto w-[95%] md:w-[70%]' {...animationConfig}>
        <div className='flex justify-center items-center text-center text-3xl lg:text-6xl'>
          <p><span className='text-red-500'>Awards</span> and <span style={{
            backgroundImage: 'linear-gradient(to right, white, #64748b)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>Recognitions</span>
          </p>
        </div>
        <div className='w-full pt-10 lg:pt-28 flex custom-scrollbar justify-center items-center overflow-y-auto '>
         {data.map((img,index)=>(
          <img className='mx-2 lg:mx-12 w-2/12 md:w-auto  flex justify-center items-center' src={img.images} alt={img?.image_alt} />
         ))}
        </div>
      </Section>
  )
}

export default AwardsAndRecognitions

const Section = styled(motion.div)`
  
  .custom-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for Firefox */
.custom-scrollbar {
  scrollbar-width: none; /* Firefox */
}

/* Hide scrollbar for Edge and Internet Explorer */
.custom-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
}

/* Maintain scrolling */
.custom-scrollbar {
  overflow-y: auto; /* Ensure vertical scrolling is enabled */
}
`