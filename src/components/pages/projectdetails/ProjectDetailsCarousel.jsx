import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import { IoLocationSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

import CustomMobileCarousel from '../../customcarousel/CustomMobileCarousel';
import CustomLaptopCarousel from './CustomLaptopCarousel';
import NoDataFound from '../../common/NoDataFound';
import Text from '../../common/Text';

function ProjectDetailsCarousel({ animationConfig, data, images }) {
    return (
        <Section className='mx-auto flex flex-col gap-6 '>
            <motion.div className='flex flex-col lg:flex-row gap-2 lg:gap-10 justify-between lg:items-center w-full' {...animationConfig}>
                <Heading1 className='hidden lg:block lg:w-[30%]'>{data?.name}</Heading1>
                <Paragraph className='flex bg-gray-900 border border-gray-800 rounded-[2rem] p-3 text-center flex-row md:gap-3 justify-center items-center'>
                    <IoLocationSharp className='w-6 h-6' />
                    <span>{data?.location}</span>
                </Paragraph>
                <Heading1 className='lg:hidden block'>{data?.name}</Heading1>
                <div>
                   {data?.logo && <img src={data?.logo} className='w-[130px] h-[130px]' alt="" />}
                </div>
                <p>
                    <Paragraph>
                        <div>
                            <span className='span2'>RERA Number : </span>
                            <span>{data?.rera_number}</span>
                        </div>
                        <div className='flex justify-center items-center mt-3'>
                            <img src={data.qr_code} className='w-[100px] h-[100px]' alt="" />
                        </div>
                    </Paragraph>
                </p>
            </motion.div>
            <motion.div {...animationConfig}>
                {images.length === 0 ? (
                    <div className='flex justify-center flex-col h-[20rem] items-center'>
                        <NoDataFound text={"Images Not Found"} />
                    </div>
                ) : (
                    <>
                        <CustomLaptopCarousel data={images} />
                        <CustomMobileCarousel data={images} />
                    </>
                )}
            </motion.div>
        </Section>
    );
}

export default ProjectDetailsCarousel;

const Section = styled.section`
width: 70%;
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
