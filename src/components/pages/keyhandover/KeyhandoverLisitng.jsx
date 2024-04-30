import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React, { useState } from 'react'
import styled from 'styled-components';
import Text from '../../common/Text';
import { motion } from 'framer-motion';
import { KayHandoverModal } from '../../modal/KayHandoverModal';
// Icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import RectangleBlue from '../../../assets/images/projectdetails/Rectangleblue.svg';
import RectangleWhite from '../../../assets/images/projectdetails/Rectanglewhite.svg';
import CustomMobileCarousel from '../../customcarousel/CustomMobileCarousel';

function KeyhandoverLisitng({ data, animationConfig }) {
    // Modal for image showing
    const [open, setOpen] = React.useState(false);
    const [signleData, setSignledata] = useState({})
    const handleOpen = () => setOpen(!open);


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
                <motion.div {...animationConfig}>
                <CustomMobileCarousel data={data}/>
                </motion.div>
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
