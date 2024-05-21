import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Text from '../../common/Text';
import { motion } from 'framer-motion';
import { KayHandoverModal } from '../../modal/KayHandoverModal';
// Icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import RectangleBlue from '../../../assets/images/projectdetails/Rectangleblue.svg';
import RectangleWhite from '../../../assets/images/projectdetails/Rectanglewhite.svg';
import CustomMobileCarousel from '../../customcarousel/CustomMobileCarousel';
import { GetKeyAndHandoverApi } from '../../../services/services';
import NoDataFound from '../../common/NoDataFound';
import KeyHandOverCustomMovileCarousel from '../../customcarousel/KeyHandOverCustomMovileCarousel';

function KeyhandoverLisitng({ animationConfig }) {
    // Modal for image showing
    const [open, setOpen] = React.useState(false);
    const [signleData, setSignledata] = useState({})
    const handleOpen = () => setOpen(!open);
    const [keyHandOver, setKeyHandOver] = useState([])
    const [mobileView, setMobileView] = useState(false);
    const [limit, setLimit] = useState({ startLimit: 0, endLimit: 9 })
    const [totalCount, setTotalCount] = useState(0)
    const topRef = useRef(null);

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
                const res = await GetKeyAndHandoverApi(limit.startLimit, limit.endLimit)
                const { StatusCode, data, total_count } = res.data;
                if (StatusCode === 6000) {
                    setKeyHandOver(data)
                    setTotalCount(total_count)
                }
            } catch (error) {
                setKeyHandOver([])
            }
        };
        fetchData()
        if (limit.startLimit === 0) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

          } else {
            window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });

          }
    }, [limit])

    return (
        <>
            {/* Laptop View */}
            <Section className='mx-auto hidden md:block'>
                <Listing className='flex flex-wrap gap-5 lg:gap-10' >
                    {keyHandOver?.length == 0 ? (
                        <div className='flex justify-center items-center mb-20 w-full'>
                            <NoDataFound text={"Key Hand Over Not Found..."} />
                        </div>
                    ) : (
                        keyHandOver?.map((handover, index) => (
                            <motion.div {...animationConfig}>
                                <Card key={index} className="mt-6 md:w-96 cursor-pointer bg-gray-900 bg-opacity-60" onClick={() => { setSignledata({ image: handover.image }), handleOpen(!open) }}>
                                    {handover?.image ? (<img
                                        className='m-4 mb-0 rounded-[1.1rem]'
                                        src={handover?.image}
                                        alt={handover?.image_alt}
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
                {keyHandOver?.length>0&& <motion.div className='flex justify-center items-center my-6 lg:my-10' {...animationConfig}>
                <div className='bg-black flex flex-row p-1 rounded-[1.1rem]'>
                        <button className='bg-gray-900 p-3 rounded-full' onClick={() => {
                            const newStartLimit = Math.max(0, limit.startLimit - 9);
                            const newEndLimit = Math.min(limit.endLimit - 9, totalCount);
                            setLimit({ startLimit: newStartLimit, endLimit: newEndLimit });
                        }} hidden={limit.startLimit === 0}>
                            <FaArrowLeft />
                        </button>
                        <div className='flex flex-row justify-center gap-1 md:px-2'>
                            {Array.from({ length: Math.ceil(totalCount / 9) }, (_, index) => (
                                <img key={index} src={(index*9 === limit.startLimit) ? RectangleBlue : RectangleWhite} className='w-1/12 md:w-2/12' alt="" />
                            ))}
                        </div>
                        <button className='bg-gray-900 p-3 rounded-full' onClick={() => {
                            const newStartLimit = limit.startLimit + 9;
                            const newEndLimit = limit.endLimit + 9;
                            setLimit({ startLimit: newStartLimit, endLimit: newEndLimit });
                        }} hidden={limit.endLimit >= totalCount}>
                            <FaArrowRight />
                        </button>
                    </div>
                </motion.div>}
                <KayHandoverModal data={signleData} open={open} handleOpen={handleOpen} />
            </Section>
            {/* Moobile View */}
            <Section className='mx-auto container md:hidden block'>
                <motion.div {...animationConfig} className='mb-10'>
                    <KeyHandOverCustomMovileCarousel data={keyHandOver}/>
                </motion.div>
            </Section>
        </>
    )
}

export default KeyhandoverLisitng

const Section = styled.section`
width: 70%;
@media(max-width:1400px){
  width:90%;
}
`;

const Listing = styled.div`

  /* @media(max-width:1380px){ */
    justify-content: center;
/* } */
`
