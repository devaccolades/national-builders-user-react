import React from 'react'
import { Helmet } from 'react-helmet'
import PageName from '../components/common/PageName'
import CommonDiv from '../components/common/CommonDiv'
import ProjectDetailsCarousel from '../components/pages/projectdetails/ProjectDetailsCarousel'

function ProjectDetails() {
  return (
    <>
      <Helmet>
        <title>National Shalom - Ready To Move Flats In Kochi | Best builders in Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
      <PageName text={"Project details"} />
      <ProjectDetailsCarousel/>
      <CommonDiv />
    </>
  )
}

export default ProjectDetails