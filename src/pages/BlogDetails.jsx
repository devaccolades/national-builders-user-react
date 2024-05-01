import React from 'react'
import BlogDetailsCom from '../components/pages/blogdetails/BlogDetailsCom'
import { Helmet } from 'react-helmet'
import CommonDiv from '../components/common/CommonDiv';

function BlogDetails() {
  const animationConfig = {
    initial: {
      opacity: 0,
      y: 50,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };
  return (
    <>
     <Helmet>
        <title>Top Builders In Kochi | Best builders in Kochi | National Builders</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
    <BlogDetailsCom animationConfig={animationConfig}/>
    <CommonDiv />
    </>
  )
}

export default BlogDetails