import React, { useEffect, useState } from 'react'
import Header from '../components/includes/Header'
import { Helmet } from 'react-helmet'
import HomeBanner from '../components/pages/home/HomeBanner'
import Footer from '../components/includes/Footer'
import TextAndCounts from '../components/pages/home/TextAndCounts'
import AwardsAndRecognitions from '../components/pages/home/AwardsAndRecognitions'
import Ourpresence from '../components/pages/home/Ourpresence'
import VideoTag from '../components/pages/home/VideoTag'
import Testimonials from '../components/pages/home/Testimonials'
import NewsAndBlogs from '../components/pages/home/NewsAndBlogs'

import { GetHomePageApi, GetSeoApi } from '../services/services'
import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [seoData, setSeoData] = useState([])
  const [homepageData, setHomePageData] = useState({
    awards: "",
    home_page_videos: "",
    project_counts: "",
    blogs: "",
    testimonials: ""
  });
  const fetchhomePageData = async () => {
    try {
      const res = await GetHomePageApi();
      const { StatusCode, data } = res.data;

      if (StatusCode === 6000) {
        setHomePageData({
          awards: data?.awards || "",
          home_page_videos: data?.home_page_videos || "",
          project_counts: data?.project_counts || "",
          blogs: data?.blogs || [],
          testimonials: data?.testimonials || []
        });
      }
    } catch (error) {
      console.error("Error fetching home page data:", error);
      setHomePageData({
        awards: "",
        home_page_videos: "",
        project_counts: "",
        blogs: [],
        testimonials: []
      })
    }
  };


  useEffect(() => {
    fetchhomePageData()
  }, [])

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
      <HomeBanner animationConfig={animationConfig} />
      {homepageData.project_counts && <TextAndCounts animationConfig={animationConfig} data={homepageData.project_counts[0]} />}
      {homepageData.awards && <AwardsAndRecognitions animationConfig={animationConfig} data={homepageData.awards} />}
      <Ourpresence />
      {homepageData.home_page_videos && <VideoTag animationConfig={animationConfig} data={homepageData.home_page_videos[0]} />}
      {homepageData.testimonials.length > 0 && <Testimonials testimonials={homepageData?.testimonials} animationConfig={animationConfig} />}
      {homepageData.blogs.length > 0 && <NewsAndBlogs data={homepageData?.blogs} animationConfig={animationConfig} />}
    </>
  )
}

export default Home
