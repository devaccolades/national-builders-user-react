import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import Heading from '../components/pages/about/Heading';
import AboutContent from '../components/pages/about/AboutContent';
import CommonDiv from '../components/common/CommonDiv';
import MissionAndVision from '../components/pages/about/MissionAndVision';
import OurTeam from '../components/pages/about/OurTeam';
import OurOffice from '../components/pages/about/OurOffice';
function About() {
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
                <title>About - Ready To Give a Flat In Kochi</title>
                <meta
                    name="description"
                    content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
                ></meta>
            </Helmet>
            <Heading animationConfig={animationConfig}/>
            <AboutContent animationConfig={animationConfig}/>
            <MissionAndVision animationConfig={animationConfig}/>
            <OurTeam animationConfig={animationConfig}/>
            <OurOffice animationConfig={animationConfig}/>
            <CommonDiv/>

        </>
    )
}

export default About