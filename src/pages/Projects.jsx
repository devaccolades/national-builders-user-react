import React from 'react'
import styled from 'styled-components'
import Header from '../components/includes/Header'
import { Helmet } from 'react-helmet'
import RoundAndText from '../components/common/RoundAndText'
import PageName from '../components/common/PageName'
import Projectslist from '../components/pages/project/Projectslist'
import CommonDiv from '../components/common/CommonDiv'

function Projects() {
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
        <title>Projects - Ready To Move Flats In Kochi | Best builders in Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
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
