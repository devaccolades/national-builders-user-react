import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import PageName from '../components/common/PageName'
import NewsAndEventsListing from '../components/pages/newsandevents/NewsAndEventsListing'
import CommonDiv from '../components/common/CommonDiv'
function NewsAndEvents() {
  
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
        <title>New & Events - Ready To Move Flats In Kochi | Best builders in Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
      <PageName text={"News & Events"} />
      <NewsAndEventsListing animationConfig={animationConfig}/>
      <CommonDiv />
    </>
  )
}

export default NewsAndEvents