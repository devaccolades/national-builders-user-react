import React from 'react'
import BlogDetailsCom from '../components/pages/blogdetails/BlogDetailsCom'
import { Helmet } from 'react-helmet'
import CommonDiv from '../components/common/CommonDiv';

function BlogDetails() {
  
  return (
    <>
     <Helmet>
        <title>Top Builders In Kochi | Best builders in Kochi | National Builders</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
    <BlogDetailsCom/>
    <CommonDiv />
    </>
  )
}

export default BlogDetails