import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import { IoLocationSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

// Icons
import CustomMobileCarousel from '../../customcarousel/CustomMobileCarousel';
import CustomLaptopCarousel from './CustomLaptopCarousel';

function ProjectDetailsCarousel({ animationConfig, images, name, location, reraNumber }) {


    return (
        <Section className='container mx-auto flex flex-col gap-6'>
            <motion.div className='flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between lg:items-center w-full' {...animationConfig}>
                <Heading1 className='hidden lg:block'>{name}</Heading1>
                <Paragraph className='flex bg-gray-900 w-7/12 md:w-4/12 lg:w-auto border border-gray-800 rounded-[2rem] p-3 text-center flex-row md:gap-3 justify-center items-center'>
                    <IoLocationSharp className='w-6 h-6' />
                    <span>{location}</span>
                </Paragraph>
                <Heading1 className='lg:hidden block'>{name}</Heading1>
                <Paragraph>
                    <span className='span2'>RERA Number : </span>
                    <span>{reraNumber}</span>
                </Paragraph>
            </motion.div>
           <motion.div {...animationConfig}>
           <CustomLaptopCarousel data={images} />
            <CustomMobileCarousel data={images} />
           </motion.div>
        </Section>
    );
}

export default ProjectDetailsCarousel;

const Section = styled.section`
    @media(max-width:1400px){
      width:90%; 
}
`;

const Heading1 = styled.p`
    font-size: 3rem;
    @media(max-width:940px){
    font-size: 2.2rem;
}
@media(max-width:425px){
    font-size: 2.4rem;
}
@media (max-width: 375px) {
    font-size: 1.6rem;
    font-weight: bold;
}
`;

const Paragraph = styled.p`
    opacity: 90%;
    font-size: 1rem;
    font-family: 'popins_regular';
    margin: 1rem auto 1rem auto;

    @media (max-width: 940px) {
        margin: 0;
        font-size: 0.9rem;
    }

    @media (max-width: 425px) {
        font-size: 0.8rem;
    }

    span.span2{
        font-family: popins_bold;
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 425px) {
        font-size: 0.9rem;
    }
`;

const Carousel = styled(motion.section)`
`;
