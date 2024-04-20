import React from 'react'
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

function Home() {
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
    <Header/>
    <HomeBanner animationConfig={animationConfig}/>
    <TextAndCounts animationConfig={animationConfig}/>
    <AwardsAndRecognitions animationConfig={animationConfig}/>
    <Ourpresence />
    <VideoTag animationConfig={animationConfig}/>
    {/* <Testimonials animationConfig={animationConfig}/> */}
    <NewsAndBlogs animationConfig={animationConfig}/>
    <Footer/>
    </>
  )
}

export default Home

