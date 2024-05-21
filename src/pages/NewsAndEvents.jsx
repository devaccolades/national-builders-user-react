import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import PageName from '../components/common/PageName'
import NewsAndEventsListing from '../components/pages/newsandevents/NewsAndEventsListing'
import CommonDiv from '../components/common/CommonDiv'
import { useLocation } from 'react-router-dom'
import { GetSeoApi } from '../services/services'
function NewsAndEvents() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [seoData, setSeoData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetSeoApi(currentPath)
        const { StatusCode, data } = res.data;
        if (StatusCode === 6000) {
          setSeoData(data)
        }
      } catch (error) {
        console.error("Error fetching home page data:", error);
      }
    }
    fetchData()
  }, [currentPath])
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
        <title>{seoData?.meta_title}</title>
        <meta
          name="description"
          content={seoData?.meta_description}
        ></meta>
      </Helmet>
      <PageName text={"News & Events"} />
      <NewsAndEventsListing animationConfig={animationConfig} />
      <CommonDiv />
    </>
  )
}

export default NewsAndEvents