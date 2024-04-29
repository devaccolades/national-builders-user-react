import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Mailsvg from '../../../assets/icons/mail.svg'
import Phonesvg from '../../../assets/icons/phone.svg'
import Locationsvg from '../../../assets/icons/location.svg'

function ContactDetails({animationConfig}) {

    return (
        <Section className='container mx-auto'>
            <Maindiv className='grid grid-flow-row-2 lg:grid-cols-2 gap-16'>
                <motion.div className='bg-gray-900 bg-opacity-60 grid gap-5 text-lg py-10 lg:p-10 rounded-[1.5rem]' {...animationConfig}>
                    <div className='text-center'>
                        <p className='text-2xl font-bold '>Our <span className='bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text'>Mumbai Office</span></p>
                        <Paragraph className='px-4 md:px-10 lg:px-0'></Paragraph>
                    </div>
                    <div className='bg-black mx-4 md:mx-10 lg:mx-0 py-8 gap-5 flex flex-col justify-center items-center rounded-[1.5rem]'>
                        <img src={Mailsvg} alt="" />
                        <a href="mailto:marketingmumbai@nationalbuilders.in" className='opacity-65 hidden md:block'>marketingmumbai@nationalbuilders.in</a>
                        <a href="mailto:marketingmumbai@nationalbuilders.in" className='opacity-65 md:hidden text-center block'>
                            <p>
                                marketingmumbai@nationalbu
                            </p>
                            <p>ilders.in</p>
                        </a>
                    </div>
                    <div className='bg-black gap-5 mx-4 md:mx-10 lg:mx-0 py-8 flex flex-col justify-center items-center  rounded-[1.5rem]'>
                        <img src={Phonesvg} alt="" />
                        <div className='text-center opacity-65'>
                            <p>+ 91 22 49639871 / 72 / 73</p>
                            <p> +91 2249737814 </p>
                            <p className='hidden lg:block'>+91 9223300950 / +91 9223300960 </p>
                            <p className='hidden lg:block'>+91 9004091082</p>
                            <p className='lg:hidden block'>+91 9223300950 / +91 </p>
                            <p className='lg:hidden block'>9223300960 +91 9004091082</p>
                        </div>
                    </div>
                    <div className='bg-black gap-5 mx-4 md:mx-10 lg:mx-0 py-8 flex flex-col justify-center items-center rounded-[1.5rem]'>
                        <img src={Locationsvg} alt="" />
                        <div className='text-center px-4 lg:px-5 opacity-65'>
                            <Addres className='text-white'>National Builders, Sea Queen Heritage, 1st Floor, Plot No.6, Sector 18, Sanpada, Palm Beach Service Road, Navi Mumbai - 400705</Addres>

                        </div>
                    </div>
                </motion.div>
                <motion.div className='bg-gray-900 bg-opacity-60 grid gap-5 text-lg py-10 lg:p-10 rounded-[1.5rem]' {...animationConfig}>
                    <div className='text-center'>
                        <p className='text-2xl font-bold '>Our <span className='bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text'>Kochi Office</span></p>
                        <Paragraph className='px-4 md:px-10 lg:px-0'></Paragraph>
                    </div>
                    <div className='bg-black mx-4 md:mx-10 lg:mx-0 py-8 gap-5 flex flex-col justify-center items-center rounded-[1.5rem]'>
                        <img src={Mailsvg} alt="" />
                        <a href="mailto:marketingkochi@nationalbuilders.in" className='opacity-65 hidden lg:block'>marketingkochi@nationalbuilders.in</a>
                        <a href="mailto:marketingkochi@nationalbuilders.in" className='opacity-65 lg:hidden text-center block'>
                            <p>
                                marketingkochi@nationalbu
                            </p>
                            <p>ilders.in</p>
                        </a>
                    </div>
                    <div className='bg-black gap-5 mx-4 md:mx-10 lg:mx-0 py-8 flex flex-col justify-center items-center  rounded-[1.5rem]'>
                        <img src={Phonesvg} alt="" />
                        <div className='text-center opacity-65'>
                            <p>+91 4842340781,2333391,</p>
                            <p>2534558,</p>
                            <p> +91 98475 33355, +91 98475 44333,</p>
                            <p>+91 98477 17771</p>
                        </div>
                    </div>
                    <div className='bg-black gap-5 mx-4 md:mx-10 lg:mx-0 py-8 flex flex-col justify-center items-center rounded-[1.5rem]'>
                        <img src={Locationsvg} alt="" />
                        <div className='text-center px-4 lg:px-5 opacity-65'>
                            <Addres className=''>National Pearl Star, 5th Floor, High School Jn., Edappally, Kochi, Kerala - 682 024</Addres>

                        </div>
                    </div>
                </motion.div>
            </Maindiv>
        </Section>
    )
}

export default ContactDetails

const Section = styled.section`
margin-bottom: 4rem;
@media(max-width:1400px){
  width:90%;
}
`;

const Maindiv = styled.section`

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
const Addres =  styled.p`
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