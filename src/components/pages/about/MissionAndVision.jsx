import React from 'react'
import RoundAndText from '../../common/RoundAndText'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Image
import MissionImg from '../../../assets/images/about/mission.jpg'
import VisionImag from '../../../assets/images/about/vission.jpg'
import Text from '../../common/Text'

function MissionAndVision({animationConfig}) {
    return (
        <>
            <Section {...animationConfig}>
                <RoundAndText headingred={"Mission"} headingwhite={"& Vision"} text={"An eminent business leader and a real-estate pioneer, Founder-CMD M C Sunny’s leadership with nearly four decades of hands-on professional experience and a strong value system has built National Builders into one of the most reputed real-estate companies in Navi Mumbai and Kerala."} />
                <Container className='mx-auto'>
                    <div className='lg:flex '>
                        <motion.div className='bg-[#252630] justify-center pt-5 lg:pt-10 px-5 lg:px-10 rounded-t-[2rem] rounded-b-[1rem] flex' {...animationConfig}>
                            <motion.img src={MissionImg} whileHover={{ scale: 1.1 }}  className='rounded-[2rem] hover:shadow-gray-600 hover:shadow-xl' alt="" />
                            <div className='flex justify-center items-center '>
                                <div className='w-[2px] hidden lg:block rounded-full bg-red-500 h-20 hidden-div'></div>
                            </div>
                        </motion.div>
                        <div className='flex justify-center items-center'>
                            <motion.div className='my-5 lg:ps-10 lg:mt-0' {...animationConfig}>
                                <p className='pb-1 text-center lg:text-start lg:pb-4 bg-gradient-to-r from-white to-gray-600 text-transparent bg-clip-text text-2xl font-bold'>Mission</p>
                                <Text text={"Building quality urban spaces with integrity and innovation that inspires generations"} />
                            </motion.div>
                        </div>
                    </div>
                    <Content className='md:flex md:justify-end'>
                        <div className='flex justify-center items-center '>
                            <motion.div className='mt-5 lg:me-10 lg:mt-0 ' {...animationConfig}>
                                <p className='pb-1 text-center lg:text-start lg:pb-4 bg-gradient-to-r from-white to-gray-600 text-transparent bg-clip-text text-2xl font-bold'>Vision</p>
                                <Text text={"Building quality urban spaces with integrity and innovation that inspires generations"} />
                            </motion.div>
                        </div>
                        <motion.div className='bg-[#252630] justify-center pt-5 lg:pt-10 px-5 lg:px-10 rounded-t-[2rem] rounded-b-[1rem] flex' {...animationConfig}>
                            <div className='flex justify-center items-center '>
                                <div className='w-[2px] hidden lg:block rounded-full bg-red-500 h-20'></div>
                            </div>
                            <motion.img src={VisionImag} whileHover={{ scale: 1.1 }} className='rounded-[2rem] hover:shadow-gray-600 hover:shadow-xl' alt="" />
                        </motion.div>
                    </Content>
                </Container>
            </Section>
        </>
    )
}

export default MissionAndVision

const Section = styled(motion.div)`
background-color: #20212D;
padding-top: 5rem;
padding-bottom: 5rem;
`

const Container = styled.div`
width: 70%;
    @media(max-width:1400px){
        width:90%
}

`
const Content = styled.div`
display: flex;
flex-direction: row;
    @media(max-width:960px){
    flex-direction:column-reverse ;
}
`