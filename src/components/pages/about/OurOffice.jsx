import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
// Image
import MumbaiOffice from '../../../assets/images/about/mumbaioffice.png'
import KochiOffice from '../../../assets/images/about//kochioffice.jpg'
import { Card } from '@material-tailwind/react'
import styled from 'styled-components'
import { GetBranchesApi } from '../../../services/services'
function OurOffice({ animationConfig }) {
    const [branch, setBranch] = useState([])
    const fetchBranch = async () => {
        try {
            const res = await GetBranchesApi()
            const { StatusCode, data } = res.data;
            if (StatusCode === 6000) {
                setBranch(data)
            }
        } catch (error) {
            console.error("Error fetching home page data:", error);
        }
    }
    useEffect(() => {
        fetchBranch()
    }, [])
    return (
        <>
            {branch.length > 0 ? (<Section {...animationConfig}>
                <div className='card grid grid-cols-1 w-[70%] md:grid-cols-2 gap-8 p-4 lg:p-10 mx-auto'>
                    {branch.map((branches, index) => (
                        <motion.div {...animationConfig} whileHover={{ scale: 1.1 }}>
                            <Card whileHover={{ scale: 1.1 }} className='bg-gray-900 my-8 lg:my-0  me-10 w-full hover:shadow-gray-600 hover:shadow-xl'>
                                <img className='rounded-lg ' src={branches?.image} alt={branches?.image_alt} />
                                <p className='text-center py-5 text-xl font-bold text-white'>Our <span className='text-red-500'>{branches?.location}</span> Office</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>) : (<></>)}
        </>

    )
}

export default OurOffice

const Section = styled(motion.div)`
background-color: #20212D;
padding-top: 2rem;
padding-bottom: 2rem;

@media (max-width: 1024px) {
    .card {
      width: 80%;
    }
  }
  @media (max-width: 576px) {
    .card {
      width: 100%;
    }
  }


`