import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion ,AnimatePresence} from 'framer-motion';


import RectangleBlue from '../../../assets/images/projectdetails/Rectangleblue.svg';
import RectangleWhite from '../../../assets/images/projectdetails/Rectanglewhite.svg';
import Text from '../../common/Text';

function ProjectDetailsCarousel({animationConfig,images,name,location,reraNumber}) {
    const [startIndex, setStartIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageRef = useRef(null);

    const imageCount = images.length - 1;

    const handleImageClick = (index) => {
        setStartIndex(index);
    };

    const handleNext = () => {
        if (startIndex < images.length - 2) {
            setStartIndex(startIndex + 1);
            // imageRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
            
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
            {images.length > 0 ? (
                 <Carousel className='bg-gray-900 bg-opacity-60 p-3 md:p-6 rounded-[1.1rem] flex flex-col  gap-5 overflow-hidden' {...animationConfig}>
                 <div className='flex flex-col-reverse lg:flex-col gap-6'>
                     <div className='flex flex-row ps-[32rem] md:ps-96 xl:ps-5 p-3 lg:p-5 bg-black gap-3 justify-center overflow-x-auto xl:overflow-hidden h-[9rem] rounded-[1.1rem]'>
                         {images.map((image, index) => (
                             <motion.img key={index} src={image} className={`w-[8rem] max-w-[10rem] rounded-[.6rem] cursor-pointer hover:opacity-80  ${(windowWidth <= 767 && startIndex === index) || (windowWidth > 767 && startIndex <= index && index <= startIndex + 1)
                                     ? ""
                                     : "opacity-40"
                                 }`}
                                 alt="" onClick={() => handleImageClick(index)}
                                 whileHover={{ scale: 1.1 }}
                                 animate={{ x: windowWidth <= 768 ? 140 : windowWidth <= 1024 ? 30 : 0 }}
                                 transition={{ ease: "easeOut", duration: 2 }}
                                 ref={index === startIndex ? imageRef : null}
                             />
                         ))}
                     </div>
                     <div className='flex flex-row gap-4 w-full justify-center pt-2 md:pt-0 px-1 md:px-3'>
                         {windowWidth <= 767 ? (
                             // Render one image
                             images.slice(startIndex, startIndex + 1).map((image, index) => (
                                <AnimatePresence  key={index}>

                                 <img key={index} src={image} className='rounded-[1.1rem]' alt="" />
                                 </AnimatePresence>

                             ))
                         ) : (
                             // Render two images
                             
                             images.slice(startIndex, startIndex + 2).map((image, index) => (
                                <AnimatePresence  key={index}>
                                 <motion.img key={index} src={image} className='w-6/12 rounded-[1.1rem]' alt=""
                                   initial={{ x: 300, opacity: 0 }}
                                   animate={{ x: 0, opacity: 1 }}
                                   exit={{ x: -300, opacity: 0 }}
                                 />
                                 </AnimatePresence>
                             ))
                         )}
                     </div>
                 </div>
                 <div className='flex justify-center items-center'>
                     <div className='bg-black flex flex-row p-1 rounded-[1.1rem]'>
                         <button className='bg-gray-900  p-3 rounded-full' onClick={handlePrev}>
                             <FaArrowLeft />
                         </button>
                         <div className='flex flex-row justify-center gap-1 md:px-2'>
                             {Array.from({ length: imageCount }, (_, index) => (
                                 <>
                                     <img key={index} src={(startIndex === index) ? RectangleBlue : RectangleWhite} className='w-1/12 md:w-2/12' alt="" />
                                 </>
                             ))}
                         </div>
                         <button className='bg-gray-900  p-3 rounded-full' onClick={handleNext}>
                             <FaArrowRight />
                         </button>
                     </div>
                 </div>
             </Carousel>
            ):(
                <Carousel className='bg-gray-900 bg-opacity-60 p-3 flex justify-center items-center rounded-[1.1rem] '>
                        <Text text={"Images Not Found..."}/>
                </Carousel>
            )
           }
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
