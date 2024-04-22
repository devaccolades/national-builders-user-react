import React from 'react'
import { motion } from 'framer-motion'
// Image
import MumbaiOffice from '../../../assets/images/about/mumbaioffice.png'
import KochiOffice from '../../../assets/images/about//kochioffice.jpg'
import { Card } from '@material-tailwind/react'
import styled from 'styled-components'
function OurOffice({ animationConfig }) {
    return (
        <Section {...animationConfig}>
                <div className='mx-auto container grid grid-cols-1 md:grid-cols-2 gap-8 p-4 lg:p-10 w-full'>
                   <motion.div {...animationConfig}>
                   <Card className='bg-gray-900 h-full my-8 lg:my-0  me-10 w-full'>
                        <img className='rounded-lg ' src={MumbaiOffice} alt="" />
                        <p className='text-center py-5 text-xl font-bold text-white'>Our <span className='text-red-500'>Mumbai</span> Office</p>
                    </Card>
                   </motion.div>
                   <motion.div {...animationConfig}>
                   <Card className='bg-gray-900 h-full my-8 lg:my-0  w-full lg:me-10'>
                        <img className='rounded-lg ' src={KochiOffice} alt="" />
                        <p className='text-center py-5  text-xl font-bold text-white'>Our <span className='text-red-500'>Kochi</span> Office</p>
                    </Card>
                   </motion.div>
                </div>
        </Section>

    )
}

export default OurOffice

const Section = styled(motion.div)`
background-color: #20212D;
padding-top: 2rem;
padding-bottom: 2rem;
`