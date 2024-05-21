import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import PageName from '../components/common/PageName'
import CommonDiv from '../components/common/CommonDiv'
import ProjectDetailsCarousel from '../components/pages/projectdetails/ProjectDetailsCarousel'
import OverViewAndAmenities from '../components/pages/projectdetails/OverViewAndAmenities'
import Specifications from '../components/pages/projectdetails/Specifications'
import FloorPlan from '../components/pages/projectdetails/FloorPlan'
import ContactSection from '../components/pages/projectdetails/ContactSection'

import { useNavigate, useParams } from 'react-router-dom'
import { GetProjectDetailsApi } from '../services/services'
import LocationMap from '../components/pages/projectdetails/LocationMap'


function ProjectDetails() {
  const navigate = useNavigate()
  const { slug } = useParams();

  const [projectData, setProjectData] = useState({
    data: {},
    images: [],
    floor_images: [],
    amenities: [],
    specification: [],
    distance: []
  });
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

  const fetchData = async () => {
    try {
      const res = await GetProjectDetailsApi(slug);
      const { StatusCode, data, images, floor_images, amenities, specification, distance } = res.data;
      if (StatusCode === 6000) {
        setProjectData({
          data: data,
          images: images,
          floor_images: floor_images,
          amenities: amenities,
          specification: specification,
          distance: distance
        });
      } else if (StatusCode === 6002) {
        navigate('/projects');
      }
    } catch (error) {
      alert(error.message || "Something went wrong");
    }
  }

  useLayoutEffect(() => {
    if (slug) {
      fetchData();
    } else {
      navigate('/projects');
    }
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{projectData?.data?.meta_title}</title>
        <meta
          name="description"
          content={projectData?.data?.meta_description}
        ></meta>
      </Helmet>
      <PageName text={"Project details"} />
      {projectData.data && <ProjectDetailsCarousel animationConfig={animationConfig} data={projectData.data} images={projectData.images} />}
      <OverViewAndAmenities animationConfig={animationConfig} data={projectData?.data} amenities={projectData?.amenities} />
      <Specifications animationConfig={animationConfig} data={projectData?.specification} />
      <FloorPlan animationConfig={animationConfig} data={projectData?.floor_images} />
      <LocationMap animationConfig={animationConfig} iframe={projectData?.data.iframe} distance={projectData?.distance} />
      <ContactSection animationConfig={animationConfig} projectId={projectData?.data?.id}/>
      <CommonDiv />
    </>
  )
}

export default ProjectDetails