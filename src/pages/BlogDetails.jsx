import React, { useEffect, useState } from 'react'
import BlogDetailsCom from '../components/pages/blogdetails/BlogDetailsCom'
import { Helmet } from 'react-helmet'
import CommonDiv from '../components/common/CommonDiv';
import { useParams } from 'react-router-dom';
import { GetBlogDetailsApi } from '../services/services';

function BlogDetails() {
  const { slug } = useParams();
  const [blogsDetails,setBlogDetails] = useState()
  const [suggestionsList,setSuggestionsList] = useState([])
  
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

 useEffect(()=>{
  const fetchData = async () => {
    try {
      const res = await GetBlogDetailsApi(slug);
      const { StatusCode, data ,suggestions} = res.data;
      if (StatusCode === 6000) {
        setBlogDetails(data)
        setSuggestionsList(suggestions)
      } else if (StatusCode === 6002) {
        navigate('/blogs');
      }
    } catch (error) {
      alert(error.message || "Something went wrong");
    }
  }
  fetchData()
 },[slug])
  return (
    <>
     <Helmet>
        <title>Top Builders In Kochi | Best builders in Kochi | National Builders</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
    <BlogDetailsCom animationConfig={animationConfig} data={blogsDetails} suggestions={suggestionsList}/>
    <CommonDiv />
    </>
  )
}

export default BlogDetails