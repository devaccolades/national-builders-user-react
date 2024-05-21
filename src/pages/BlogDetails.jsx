import React, { useEffect, useState } from 'react'
import BlogDetailsCom from '../components/pages/blogdetails/BlogDetailsCom'
import { Helmet } from 'react-helmet'
import CommonDiv from '../components/common/CommonDiv';
import { useParams } from 'react-router-dom';
import { GetBlogDetailsApi } from '../services/services';

function BlogDetails() {
  const { slug } = useParams();
  const [blogsDetails, setBlogDetails] = useState()
  const [suggestionsList, setSuggestionsList] = useState([])
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetBlogDetailsApi(slug);
        const { StatusCode, data, suggestions } = res.data;
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
  }, [slug])
  return (
    <>
      <Helmet>
        <title>{blogsDetails?.meta_tag}</title>
        <meta
          name="description"
          content={blogsDetails?.meta_description}
        ></meta>
      </Helmet>
      <BlogDetailsCom animationConfig={animationConfig} data={blogsDetails} suggestions={suggestionsList} />
      <CommonDiv />
    </>
  )
}

export default BlogDetails