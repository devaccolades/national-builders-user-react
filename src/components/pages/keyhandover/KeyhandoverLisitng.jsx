import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React, { useState } from 'react'
import styled from 'styled-components';
import Text from '../../common/Text';
import { motion, AnimatePresence } from 'framer-motion';
import { KayHandoverModal } from '../../modal/KayHandoverModal';
// Icons
import chevronsrightIcon from '../../../assets/icons/chevrons-right.svg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import RectangleBlue from '../../../assets/images/projectdetails/Rectangleblue.svg';
import RectangleWhite from '../../../assets/images/projectdetails/Rectanglewhite.svg';
import CustomCarousel from '../../customcarousel/CustomCarousel';

function KeyhandoverLisitng({ data, animationConfig }) {
    const [startIndex, setStartIndex] = useState(0);
    // Modal for image showing
    const [open, setOpen] = React.useState(false);
    const [signleData, setSignledata] = useState({})
    const handleOpen = () => setOpen(!open);

    const imageCount = data.length;

    const handleImageClick = (index) => {
        setStartIndex(index);
    };

    const handleNext = () => {
        if (startIndex < data.length - 1) {
            setStartIndex(startIndex + 1);
            // imageRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);

        }
    };


    return (
        <>
            {/* Laptop View */}
            <Section className='mx-auto container hidden md:block'>
                <Listing className='grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10' >
                    {data?.length === 0 ? (
                        <Text text={"Data Not Found"} />
                    ) : (
                        data?.map((handover, index) => (
                            <motion.div {...animationConfig}>
                                <Card key={index} className="mt-6 cursor-pointer bg-gray-900 bg-opacity-60" onClick={() => { setSignledata({ image: handover.image }), handleOpen(!open) }}>
                                    {handover?.image ? (<img
                                        className='m-4 mb-0 rounded-[1.1rem]'
                                        src={handover?.image}
                                        alt={`${handover.name} image`}
                                    />) : (
                                        <div className='w-full h-full flex justify-center items-center'>
                                            <Text text={"Preview Not Found"} />
                                        </div>
                                    )}
                                    <CardBody>
                                        <Typography variant="h6" color="white" className="-my-2 text-center text-opacity-90">
                                            {handover?.name}
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))
                    )}
                </Listing>
                <motion.div className='flex justify-center items-center my-6 lg:my-10' {...animationConfig}>
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
                <KayHandoverModal data={signleData} open={open} handleOpen={handleOpen} />
            </Section>
            {/* Moobile View */}
            <Section className='mx-auto container md:hidden block'>
                {/* {data.length > 0 ? (
                    <Carousel className='bg-gray-900 bg-opacity-60 p-3 md:p-6 rounded-[1.1rem] flex flex-col  gap-5 overflow-hidden' {...animationConfig}>
                        <div className='flex flex-col-reverse lg:flex-col gap-6'>
                            <div className='flex flex-row ps-[36rem] pe-[146rem]  md:ps-96 xl:ps-5 p-3 lg:p-5 bg-black gap-3 justify-center overflow-x-auto h-[9rem] rounded-[1.1rem]'>
                                {data.map((image, index) => (
                                    <motion.img key={index} src={image.image} className={`w-[8rem] max-w-[10rem] rounded-[.6rem] cursor-pointer hover:opacity-80  ${startIndex === index ? "" : "opacity-40"}`}
                                        alt={image.name} onClick={() => handleImageClick(index)}
                                        whileHover={{ scale: 1.1 }}
                                        animate={{ x: 140}}
                                        transition={{ ease: "easeOut", duration: 1.1 }}
                                    />
                                ))}
                            </div>
                            <div className='flex flex-col gap-4 w-full justify-center pt-2 md:pt-0 px-1 md:px-3'>
                                {data.slice(startIndex, startIndex + 1).map((image, index) => (
                                    <AnimatePresence key={index}>
                                        <img key={index} src={image.image} className='rounded-[1.1rem]' alt={image.name} />
                                        <Typography variant="h6" color="white" className="-my-2 text-center text-opacity-90">
                                            {image.name}
                                        </Typography>
                                    </AnimatePresence>
                                ))}
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
                ) : (
                    <Carousel className='bg-gray-900 bg-opacity-60 p-3 flex justify-center items-center rounded-[1.1rem] '>
                        <Text text={"Images Not Found..."} />
                    </Carousel>
                )
                } */}
                <CustomCarousel data={data}/>
            </Section>
        </>
    )
}

export default KeyhandoverLisitng

const Section = styled.section`
@media(max-width:1400px){
  width:90%;
}
`;

const Listing = styled.div`
  @media(max-width:1380px){
    justify-content: center;

}`
const Carousel = styled(motion.section)``;
