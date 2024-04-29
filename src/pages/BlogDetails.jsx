import React from 'react'
import BlogDetailsCom from '../components/pages/blogdetails/BlogDetailsCom'
import { Helmet } from 'react-helmet'

// After connecting to backend remove this images
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
    </>
  )
}

export default BlogDetails