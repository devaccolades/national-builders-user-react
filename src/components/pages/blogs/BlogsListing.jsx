import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, CardBody, CardFooter, Typography, } from "@material-tailwind/react";
// Icons
import chevronsrightIcon from '../../../assets/icons/chevrons-right.svg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import RectangleBlue from '../../../assets/images/projectdetails/Rectangleblue.svg';
import RectangleWhite from '../../../assets/images/projectdetails/Rectanglewhite.svg';
import { useNavigate } from 'react-router-dom';
import NoDataFound from '../../common/NoDataFound';
import { GetBlogsApi } from '../../../services/services';

function BlogsListing({ animationConfig }) {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState([])
    const [mobileView, setMobileView] = useState(false);
    const [limit, setLimit] = useState({ startLimit: 0, endLimit: 3 })
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
                const res = await GetBlogsApi(limit.startLimit, limit.endLimit)
                const { StatusCode, data, total_count } = res.data;
                if (StatusCode === 6000) {
                    setBlogs(data)
                    setTotalCount(total_count)
                }
            } catch (error) {
                setBlogs([])
            }
        };
        fetchData()
        if (limit.startLimit === 0) {
            // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      
          } else {
            // if (mobileView){
            //     window.scrollTo({ top: 150, left: 0, behavior: 'smooth' });
            // }else{
            //     window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });
            // }
      
          }
    }, [limit])

    const truncateText = (htmlContent) => {
        const words = htmlContent.split(/\s+/);
        let trimWords = ''
        if (!mobileView) {
            trimWords = words.slice(0, 65).join(' ');
        } else {
            trimWords = words.slice(0, 30).join(' ');
        }
        trimWords += ' ...';
        return trimWords;
    };

    const truncateText2 = (htmlContent) => {
        const words = htmlContent.split(/\s+/);
        let trimWords = ''
        trimWords = words.slice(0, 30).join(' ');
        trimWords += ' ...';
        return trimWords;
    };

useEffect(()=>{
    if (mobileView){
        setLimit({ startLimit: 0, endLimit: 3 })
    }else{
        setLimit({ startLimit: 0, endLimit: 7 })
    }
},[mobileView])
    return (
        <Section className='mx-auto'>
            <Listing ref={topRef} {...animationConfig}>
                {blogs && blogs?.length === 0 ? (
                    <div className='flex justify-center items-center w-full'>
                        <NoDataFound text={"Blogs Not Found..."} />
                    </div>
                ) : (
                    <>
                        {blogs[0] &&
                            <Card className="bg-gray-900 bg-opacity-60 lg:grid lg:grid-cols-2 w-full mb-6">
                                <img
                                    className='image mt-4 mx-4 lg:hidden block lg:mt-5 lg:mx-5 rounded-[.8rem]  '
                                    src={blogs[0]?.image || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
                                    alt={blogs[0]?.image_alt}
                                />
                                <div className='hidden lg:block m-5 rounded-[1.1rem] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${blogs[0]?.image})` }}>
                                </div>
                                <div>
                                    <CardBody>
                                        <div className='flex'>
                                            <p className='p-2 text-g border border-gray-800 rounded-[2rem]'>{blogs[0]?.date_added}</p>
                                        </div>
                                        <Typography variant="h5" color="blue-gray" className="mt-4 mb-3 text-white">
                                            {blogs[0]?.title}
                                        </Typography>
                                        <Typography className='lg:text-lg text-justify' dangerouslySetInnerHTML={{ __html: truncateText(blogs[0].body) }} />
                                    </CardBody>
                                    <CardFooter className=" pt-0 -my-2 lg:my-0 gap-1 cursor-pointer">
                                        <div className='flex flex-row' onClick={() => navigate(`/blog/${blogs[0]?.slug}`)}>
                                            <p className='text-red-500'>Read more</p>
                                            <img src={chevronsrightIcon} alt="" />
                                        </div>
                                    </CardFooter>
                                </div>
                            </Card>
                        }
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
                            {blogs?.map((blog, index) => {
                                if (index !== 0) {
                                    return (
                                        <Card className="bg-gray-900 bg-opacity-60">
                                            <img
                                                className='image mt-4 mx-4 lg:mt-5 lg:mx-5 rounded-[.8rem]'
                                                src={blog?.image || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
                                                alt={blogs?.image_alt}
                                            />
                                            <CardBody>
                                                <div className='flex mb-4'>
                                                    <p className='p-2 text-g border border-gray-800 rounded-[2rem]'>{blogs[0].date_added}</p>
                                                </div>
                                                <Typography variant="h5" color="blue-gray" className="mb-2 text-white">
                                                    {blog?.title}
                                                </Typography>
                                                <Typography className='lg:text-lg' dangerouslySetInnerHTML={{ __html: truncateText2(blogs[0].body) }} />
                                            </CardBody>
                                            <CardFooter className=" pt-0 -my-2 lg:my-0 gap-1 cursor-pointer">
                                                <div className='flex flex-row' onClick={() => navigate(`/blog/${blog?.slug}`)}>
                                                    <p className='text-red-500'>Read more</p>
                                                    <img src={chevronsrightIcon} alt="" />
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    );
                                }
                                return null;
                            })}
                            
                        </div>
                    </>
                )}
                {blogs.length > 0 && <motion.div className='flex justify-center mt-10 items-center' {...animationConfig}>
                   {mobileView?( <div className='bg-black flex flex-row p-1 rounded-[1.1rem]'>
                        <button className='bg-gray-900 p-3 rounded-full' onClick={() => {
                            const newStartLimit = Math.max(0, limit.startLimit - 3);
                            const newEndLimit = Math.min(limit.endLimit - 3, totalCount);
                            setLimit({ startLimit: newStartLimit, endLimit: newEndLimit });
                        }} disabled={limit.startLimit === 0}>
                            <FaArrowLeft />
                        </button>
                        <div className='flex flex-row justify-center gap-1 md:px-5'>
                            {Array.from({ length: Math.ceil(totalCount / 3) }, (_, index) => (
                                <img key={index} src={(index * 3 === limit.startLimit) ? RectangleBlue : RectangleWhite} className='w-1/12 md:w-2/12' alt="" />
                            ))}
                        </div>
                        <button className='bg-gray-900 p-3 rounded-full' onClick={() => {
                            const newStartLimit = limit.startLimit + 3;
                            const newEndLimit = limit.endLimit + 3;
                            setLimit({ startLimit: newStartLimit, endLimit: newEndLimit });
                        }} disabled={limit.endLimit >= totalCount}>
                            <FaArrowRight />
                        </button>
                    </div>):(
                        <div className='bg-black flex flex-row p-1 rounded-[1.1rem]'>
                        <button className='bg-gray-900 p-3 rounded-full' onClick={() => {
                            const newStartLimit = Math.max(0, limit.startLimit - 7);
                            const newEndLimit = Math.min(limit.endLimit - 7, totalCount);
                            setLimit({ startLimit: newStartLimit, endLimit: newEndLimit });
                        }} disabled={limit.startLimit === 0}>
                            <FaArrowLeft />
                        </button>
                        <div className='flex flex-row justify-center gap-1 md:px-6'>
                            {Array.from({ length: Math.ceil(totalCount / 7) }, (_, index) => (
                                <img key={index} src={(index * 7 === limit.startLimit) ? RectangleBlue : RectangleWhite} className='w-1/12 md:w-5' alt="" />
                            ))}
                        </div>
                        <button className='bg-gray-900 p-3 rounded-full' onClick={() => {
                            const newStartLimit = limit.startLimit + 7;
                            const newEndLimit = limit.endLimit + 7;
                            setLimit({ startLimit: newStartLimit, endLimit: newEndLimit });
                        }} disabled={limit.endLimit >= totalCount}>
                            <FaArrowRight />
                        </button>
                    </div>
                    )}
                </motion.div>}
            </Listing>
        </Section>
    )
}

export default BlogsListing

const Section = styled.section`
width: 70%;
margin-top: 1rem;
margin-bottom: 4rem;
@media(max-width:1400px){
  width:90%;
}
`;

const Listing = styled(motion.div)`
    .image{
        height:16rem !important; 
    }
`