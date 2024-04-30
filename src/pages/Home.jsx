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
import shyamaprasad from '../assets/images/testimonials/shyamaprasad.jpg'
import sujith from '../assets/images/testimonials/sujithbhakthan.jpg'
import anilkumar from '../assets/images/testimonials/anilkumar.jpg'

function Home() {
const data = {
  blogs : [
    {image:Building1, title:"Renting vs Buying: What is the Right Choice for you in Kochi?",type:"Article",date:"march 16, 2022", description:'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.'},
    {image:Building2, title:"Renting vs Buying: What is the Right Choice for you in Kochi?",type:"Article",date:"march 16, 2022", description:'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.'},
    {image:Building3, title:"Renting vs Buying: What is the Right Choice for you in Kochi?",type:"Article",date:"march 16, 2022", description:'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.'},
    {image:Building4, title:"Renting vs Buying: What is the Right Choice for you in Kochi?",type:"Article",date:"march 16, 2022", description:'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.'},
    {image:Building5, title:"Renting vs Buying: What is the Right Choice for you in Kochi?",type:"Article",date:"march 16, 2022", description:'At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.'},
  ],
  testimonials: [
    {
      image: shyamaprasad,
      name: "SHYAMAPRASAD TC",
      project: 'NATINAL SIGNATURE',
      description: 'When i thought to buy a home at Kochi i started my immense research and finally i arrived at a conclusion that National builders is the best builders in kochi. When i went through the history of projects of National Builders i can say with confidence that Mr Sunny has idenetified only those locations where the future prospects are very high and that the value of investments will compound on an average of double digits. The track record of projects made by National builders and people who bought flats of national builders will prove the same. When u buy a flat with national builders rest be assured that the value of your investment is also taken care by Mr sunny.'
    },
    // {
    //   image: sujith,
    //   name: "SUJITH BHAKTHAN AND SWETHA BAKTHAN",
    //   project: 'NATINAL KINGDOM 17 C',
    //   description: 'We thank the premium projects developer for helping us realize our dream of owning a luxurious home in the heart of the city. We are proud of the fact that we have a home in National Kingdom, Kochi’s first Skywalk Project. We are confident that this stellar project will redefine luxurious living in Kochi and we look forward to living the life of our dreams, thanks to National Builders.'
    // },
    // {
    //   image: anilkumar,
    //   name: "DR: ANILKUMAR R",
    //   project: 'NATINAL KINGDOM PALARIVATTOM 6C',
    //   description: 'Happy to see the opulent National Kingdom skyscraper towering in the sky. I applaud the great efforts of the National Builders team who were supportive right from the inception of the project to the handing over of the apartment. My family and I are eagerly awaiting the completion of the interiors and for beginning our stay in this prestigious apartment.'
    // }
  ],
}

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
    {/* <Ourpresence /> */}
    <VideoTag animationConfig={animationConfig}/>
    <Testimonials testimonials={data?.testimonials}  animationConfig={animationConfig}/>
    <NewsAndBlogs data={data?.blogs} animationConfig={animationConfig}/>
    </>
  )
}

export default Home
