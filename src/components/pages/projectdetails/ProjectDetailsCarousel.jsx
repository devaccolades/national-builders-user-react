import React, { useState } from 'react';
import styled from 'styled-components';
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Images
import image1 from '../../../assets/images/projectdetails/image1.jpg';
import image2 from '../../../assets/images/projectdetails/image2.jpg';
import image3 from '../../../assets/images/projectdetails/image3.jpg';
import image4 from '../../../assets/images/projectdetails/image4.jpg';
import image5 from '../../../assets/images/projectdetails/image5.jpg';
import image6 from '../../../assets/images/projectdetails/image6.jpg';
import image7 from '../../../assets/images/projectdetails/image7.jpg';
import image8 from '../../../assets/images/projectdetails/image8.jpg';
import image9 from '../../../assets/images/projectdetails/image9.jpg';

import RectangleBlue from '../../../assets/images/projectdetails/Rectangleblue.svg';
import RectangleWhite from '../../../assets/images/projectdetails/Rectanglewhite.svg';

function ProjectDetailsCarousel() {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
    const [startIndex, setStartIndex] = useState(0);

    const imageCount = images.length -1;


    const handleImageClick = (index) => {
        setStartIndex(index);
    };

    const handleNext = () => {
        if (startIndex < images.length - 2) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };


    return (
        <Section className='container mx-auto'>
            <div className='lg:flex justify-between items-center w-full'>
                <Heading1 className='hidden lg:block'>National Shalom</Heading1>
                <Paragraph className='flex bg-gray-900 border border-gray-800 rounded-[2rem] p-3 text-center flex-row gap-3 justify-center items-center'>
                    <IoLocationSharp className='w-6 h-6' />
                    <span>Thiruvalla, Kerala</span>
                </Paragraph>
                <Heading1 className='lg:hidden block'>National Shalom</Heading1>
                <Paragraph>
                    <span className='span2'>RERA Number : </span>
                    <span>K-RERA/PRJ/066/2021</span>
                </Paragraph>
            </div>

            <Carousel className='bg-gray-900 bg-opacity-60 p-6 rounded-[1.1rem] flex flex-col gap-5'>
                <div className='flex  flex-row bg-black p-5 gap-2 justify-center rounded-[1.1rem]'>
                    {images.map((image, index) => (
                        <img key={index} src={image} className='w-[8rem] rounded-[.8rem]' alt="" onClick={() => handleImageClick(index)} />
                    ))}
                </div>
                <div className='flex flex-row gap-4 w-full'>
                    {images.slice(startIndex, startIndex + 2).map((image, index) => (
                        <img key={index} src={image} className='w-full rounded-[1rem]' alt="" />
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-black flex flex-row p-1 rounded-[.8rem]'>
                        <button className='bg-gray-900  p-3 rounded-full' onClick={handlePrev}>
                            <FaArrowLeft />
                        </button>
                        <div className='flex flex-row gap-1 px-2'>
                            {Array.from({ length: imageCount }, (_, index) => (
                                <>
                                    <img key={index} src={(startIndex  === index)? RectangleBlue : RectangleWhite} alt="" />
                                </>
                            ))}
                        </div>
                        <button className='bg-gray-900  p-3 rounded-full' onClick={handleNext}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </Carousel>
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
    @media(max-width:768px){
    font-size: 2.4rem;
}
@media(max-width:425px){
    font-size: 2.4rem;
}
@media (max-width: 375px) {
    font-size: 1.9rem;
}
`;

const Paragraph = styled.p`
    opacity: 90%;
    font-size: 1rem;
    font-family: 'popins_regular';
    margin: 1rem auto 1rem auto;

    @media (max-width: 768px) {
        font-size: 0.9rem;
        width: 60%;
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

const Carousel = styled.section``;
