import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import RoundAndText from '../components/common/RoundAndText'
import PageName from '../components/common/PageName'
import Projectslist from '../components/pages/project/Projectslist'
import CommonDiv from '../components/common/CommonDiv'
import { useLocation } from 'react-router-dom'
import { GetSeoApi } from '../services/services'

function Projects() {
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
      <PageName text={"Our Projects"} />
      <RoundAndText headingred={"Showcasing"} headingwhite={"Our hardwork"} text={"Highlighting the results of our dedicated work—a thoughtful presentation of unique apartment properties that embody careful craftsmanship and attention to detail."} />
      <Projectslist animationConfig={animationConfig} />
      <CommonDiv />
    </>

  )
}

export default Projects
