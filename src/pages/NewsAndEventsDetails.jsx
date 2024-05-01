import React from 'react'
import { Helmet } from 'react-helmet'
import NewsandeventsdetailsComponents from '../components/pages/newsandeventsdetails/NewsandeventsdetailsComponents'
import CommonDiv from '../components/common/CommonDiv'

function NewsAndEventsDetails() {
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
        <title>M.C Sunny won Business Excellence in Construction Award 2016- Unique Times FMB Award 2016 - National</title>
        <meta
          name="description"
          content="M.C Sunny won Business Excellence in Construction Award 2016- Unique Times FMB Award 2016 - National"
        ></meta>
      </Helmet>
      <NewsandeventsdetailsComponents animationConfig={animationConfig} />
      <CommonDiv />
    </>
  )
}

export default NewsAndEventsDetails