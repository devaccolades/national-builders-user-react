import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import PageName from '../components/common/PageName'
import RoundAndText from '../components/common/RoundAndText'
import TestimonialsList from '../components/pages/testimonials/TestimonialsList'
import CommonDiv from '../components/common/CommonDiv'


function Testimonials() {
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
        <title>Testimonial - Ready To Give a Flat In Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
      <PageName text={"Testimonials"} />
      <RoundAndText headingred={"Words"} headingwhite={"from our valuable customers"} />
      <TestimonialsList animationConfig={animationConfig}/>
      <CommonDiv />
    </>
  )
}

export default Testimonials