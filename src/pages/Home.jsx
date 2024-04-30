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

// Afer the backed configurations remove all images
import Building1 from '../assets/images/home/building1.jpg'
import Building2 from '../assets/images/home/building2.jpg'
import Building3 from '../assets/images/home/building3.jpg'
import Building4 from '../assets/images/home/building4.jpg'
import Building5 from '../assets/images/home/building5.jpg'
function Home() {
const data = [
  {image:Building1, title:"Renting vs Buying: What is the Right Choice for you in Kochi?",type:"Article",date:"march 16, 2022", description:'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.'},
  {image:Building2, title:"Renting vs Buying: What is the Right Choice for you in Kochi?",type:"Article",date:"march 16, 2022", description:'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.'},
  {image:Building3, title:"Renting vs Buying: What is the Right Choice for you in Kochi?",type:"Article",date:"march 16, 2022", description:'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.'},
  {image:Building4, title:"Renting vs Buying: What is the Right Choice for you in Kochi?",type:"Article",date:"march 16, 2022", description:'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.'},
  {image:Building5, title:"Renting vs Buying: What is the Right Choice for you in Kochi?",type:"Article",date:"march 16, 2022", description:'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.'},
]

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
    <HomeBanner animationConfig={animationConfig}/>
    <TextAndCounts animationConfig={animationConfig}/>
    <AwardsAndRecognitions animationConfig={animationConfig}/>
    <Ourpresence />
    <VideoTag animationConfig={animationConfig}/>
    {/* <Testimonials animationConfig={animationConfig}/> */}
    <NewsAndBlogs data={data} animationConfig={animationConfig}/>
    </>
  )
}

export default Home
