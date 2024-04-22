import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components';
import Text from '../../common/Text';
import AnimationButton from '../../common/Button';

function TextAndCounts({animationConfig}) {
  
    return (
        <Section className='container mx-auto grid grid-rows-[1fr,16rem]'>
            <div className='flex flex-col lg:flex-row lg:items-start pt-36 py-10  lg:mx-5 xl:mx-0' >
                <motion.div className='w-full lg:w-8/12 text-white text-2xl md:text-4xl lg:text-6xl mb-5 lg:mb-0 -mt-16 lg:mt-0' {...animationConfig}>
                    <div className='invisible lg:visible h-0 lg:h-full'>
                        {/* For Laptop View */}
                        <p className='my-3'>Best Builders</p>
                        <p className='my-3'>In</p>
                        <p className='my-3 text-red-500'>Navi Mumbai</p>
                        <p className='my-3'>And</p>
                        <p className='my-3 text-red-500'>Kerala</p>
                    </div>
                    {/* For mobile View */}
                    <div className='visible lg:invisible lg:h-0 font-bold'>
                        <p className='my-2 text-center'>Best Builders In</p>
                        <p className='m-3 text-center'><span className='text-red-500'>Navi Mumbai</span> And <span className='text-red-500'>Kerala</span></p>
                    </div>
                </motion.div>
                <motion.div class='w-full flex flex-col gap-3' {...animationConfig}>
                    <Text text={"A visionary real estate development firm, National Builders specializes in pioneering architecturally distinct residential and mixed-use projects in India's prime metropolitan markets of Navi Mumbai and Kerala."} />
                    <Text text={"The firm has a proven track record of successful real estate development, consistently fulfilling its commitments and exceeding customer expectations. Its stamp of quality and delivery of best-in-class features are visible in each of the 135+ projects of National Builders."} />

                    <div className='lg:w-3/1 h-24 items-center flex justify-center lg:justify-start'>
                        <AnimationButton text={"Read More"} />
                    </div>

                </motion.div>
            </div>
            <motion.div className='grid grid-cols-2 lg:grid-cols-4 w-full  lg:mt-0' {...animationConfig}>
                <div className='my-auto mx-auto text-center'>
                    <p className='text-5xl lg:text-6xl my-4'>5</p>
                    <Text text={"Launched"}/>
                </div>
                <div className='my-auto mx-auto text-center'>
                    <p className='text-5xl lg:text-6xl my-4'>135</p>
                    <Text text={"Project's Completed"}/>
                </div>
                <div className='my-auto mx-auto text-center'>
                    <p className='text-5xl lg:text-6xl my-4'>4</p>
                    <Text text={"Ready to Move In"}/>
                </div>
                <div className='my-auto mx-auto text-center'>
                    <p className='text-5xl lg:text-6xl my-4'>4</p>
                    <Text text={"Ongoing"}/>
                </div>
            </motion.div>
        </Section>
    )
}

export default TextAndCounts

const Section = styled.div`
@media(max-width:1400px){
  width:90%;
}
`