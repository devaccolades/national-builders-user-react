import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@material-tailwind/react";
import { IoIosArrowForward } from 'react-icons/io';
import AnimationButton from '../../common/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Icons
import roundIcons from '../../../assets/icons/round.svg'


function NewsAndBlogs({ data, animationConfig }) {
    const navigate = useNavigate()
    const [value, setValues] = useState(0)
    const max = `-${data.length * 420}`
    const scrollLeft = () => {
        if (value !== 0) {
            console.log(value);
            const updatedValue = value + 300;
            setValues(updatedValue);
        }
    };

    const scrollRight = () => {
        if (value < max) {
            const updatedValue = value;
            setValues(updatedValue);
        } else {
            const updatedValue = value - 300;
            setValues(updatedValue);
        }

    };
    const extractFirstThreeLines = (htmlContent) => {
        const words = htmlContent.split(/\s+/);
        // Taking the first 30 words
        const first30Words = words.slice(0, 20).join(' ');
        return first30Words;
    };


    return (
        <Section className='h-screen bg-gradient-to-r from-gray-900 lg:-mb-20 to-gray-600'>
            <motion.div className='flex h-2/6 justify-around items-center'{...animationConfig}>
                <div className='flex justify-center items-center gap-5 lg:gap-16'>
                    <img src={roundIcons} className='w-3/12 lg:w-auto' alt="" /><p className=' text-3xl lg:text-5xl  font-thin'>New Blogs</p>
                </div>
                <div className='hidden lg:block' onClick={() => navigate('/blogs')}>
                    <AnimationButton text={"View all"} />
                </div>
            </motion.div>
            <Carourcel className='flex justify-end' {...animationConfig}>
                <motion.div className='w-[90%] flex flex-row overflow-x-auto' style={{ scrollbarWidth: 'none' }}>
                    {data.map((data, index) => (
                        <motion.div key={index} className='pe-14'
                            animate={{ x: value }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className='lg:w-[45rem] w-[19rem] lg:h-[27rem] bg-gray-900 lg:grid lg:grid-cols-[20rem,1fr]' style={{ borderRadius: '2rem' }}>
                                <div className='h-[10rem] lg:h-full bg-cover bg-center rounded-t-[2rem] lg:rounded-tr-none lg:rounded-s-[2rem]' style={{ backgroundImage: `url(${data?.image})` }}>
                                    <p className='p-1 text-center text-white font-bold bg-blue-gray-600 text-sm m-3 lg:m-6 w-20 rounded-full'>Article</p>
                                </div>
                                <div className='mx-10 mt-4 lg:mt-10'>
                                    <p className='font-bold text-white lg:text-2xl'>{data?.title}</p>
                                    <p className='text-md lg:text-xl text-white my-2 lg:my-5'>{data?.date_added}</p>
                                    <p className='text-white opacity-75 lg:text-lg' dangerouslySetInnerHTML={{ __html: extractFirstThreeLines(data?.body) }}></p>
                                    <button className='flex justify-center items-center mt-2 lg:mt-12 py-4 lg:py-0 lg:text-xl text-red-500' onClick={() => navigate('/blog/details')}>Read more <IoIosArrowForward />
                                        <IoIosArrowForward className='-ms-3' />
                                    </button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Carourcel>
            <motion.div className='absolute right-[15%] hidden lg:block mt-5 lg:mt-14 ' {...animationConfig}>
                <div className='flex flex-row items-center gap-2'>
                    <button onClick={scrollLeft}>Prev</button>
                    <hr className='w-32' />
                    <button onClick={scrollRight}>Next</button>
                </div>
            </motion.div>
        </Section>
    );
}

export default NewsAndBlogs;

const Section = styled.section`
    padding-bottom: 5rem;
`;

const Carourcel = styled(motion.div)``;
