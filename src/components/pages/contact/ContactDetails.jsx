import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Mailsvg from '../../../assets/icons/mail.svg'
import Phonesvg from '../../../assets/icons/phone.svg'
import Locationsvg from '../../../assets/icons/location.svg'
import { GetBranchesApi } from '../../../services/services'
import NoDataFound from '../../common/NoDataFound'

function ContactDetails({ animationConfig }) {
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
        <Section className='mx-auto'>
            <Listing className='grid grid-flow-row-2 lg:grid-cols-2 gap-16'>
                {branch.length === 0 ? (
                    <div className='bg-gray-900 bg-opacity-60 grid gap-5 text-lg py-10 lg:p-10 rounded-[1.5rem]' {...animationConfig}>
                        <NoDataFound text={"Address Not Found..."} />
                    </div>
                ) : (
                    branch.map((address, index) => (
                        <motion.div key={index} className='card bg-gray-900 bg-opacity-60 grid gap-5 text-lg py-10 lg:p-10 rounded-[1.5rem]' {...animationConfig}>
                            <div className='text-center'>
                                <p className='text-2xl font-bold '>Our <span className='bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text'>{address.location} Office</span></p>
                                <Paragraph className='px-4 md:px-10 lg:px-0'></Paragraph>
                            </div>
                            <div className='bg-black mx-4 md:mx-10 lg:mx-0 py-8 gap-5 flex flex-col justify-center items-center rounded-[1.5rem]'>
                                <img src={Mailsvg} alt="" />
                                <a href={`mailto:${address?.email}`} className='opacity-65 w-[80%] mx-auto whitespace-normal break-words text-center'>{address?.email}</a>
                            </div>
                            <div className='bg-black gap-5 mx-4 md:mx-10 lg:mx-0 py-8 flex flex-col justify-center items-center  rounded-[1.5rem]'>
                                <img src={Phonesvg} alt="" />
                                <div className='text-center opacity-65'>
                                    <p className='w-[85%] lg:w-[90%] xl:w-[66%] mx-auto'>
                                       {address?.phone_number}
                                    </p>
                                </div>
                            </div>
                            <div className='bg-black gap-5 mx-4 md:mx-10 lg:mx-0 py-8 flex flex-col justify-center items-center rounded-[1.5rem]'>
                                <img src={Locationsvg} alt="" />
                                <div className='text-center px-4 lg:px-5 opacity-65'>
                                    <Addres className='text-white'>{address?.address}</Addres>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </Listing>
        </Section>
    )
}

export default ContactDetails

const Section = styled.section`
margin-bottom: 4rem;
width: 70%;
@media(max-width:1400px){
  width:90%;
}
`;

const Listing = styled.section`

@media (min-width: 700px) and (max-width: 959px){
    .card{
        margin: auto;
        width: 70%;
    }
}
`
const Paragraph = styled.p`
    opacity: 55%;
    font-size: 1.2rem;
    font-family: 'popins_regular';
    margin: 1rem auto 1rem auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`
const Addres = styled.p`
opacity: 90%;
font-size: 1.2rem;
font-family: 'popins_regular';
margin: 1rem auto 1rem auto;

@media (max-width: 768px) {
font-size: 1.1rem;
}

@media (max-width: 425px) {
font-size: 1rem;
}
`