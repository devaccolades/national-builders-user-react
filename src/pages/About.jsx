import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import Heading from '../components/pages/about/Heading';
import AboutContent from '../components/pages/about/AboutContent';
import CommonDiv from '../components/common/CommonDiv';
import MissionAndVision from '../components/pages/about/MissionAndVision';
import OurTeam from '../components/pages/about/OurTeam';
import OurOffice from '../components/pages/about/OurOffice';
import { GetSeoApi } from '../services/services';
import { useLocation } from 'react-router-dom';
function About() {
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
      <Heading animationConfig={animationConfig} />
      <AboutContent animationConfig={animationConfig} />
      <MissionAndVision animationConfig={animationConfig} />
      <OurTeam animationConfig={animationConfig} />
      <OurOffice animationConfig={animationConfig} />
      <CommonDiv />

    </>
  )
}

export default About