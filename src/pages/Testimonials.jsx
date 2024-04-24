import React from 'react'
import { Helmet } from 'react-helmet'
import PageName from '../components/common/PageName'
import RoundAndText from '../components/common/RoundAndText'
import TestimonialsList from '../components/pages/testimonials/TestimonialsList'
import CommonDiv from '../components/common/CommonDiv'

// After the backend configuration make sure delete all imaages
import shyamaprasad from '../assets/images/testimonials/shyamaprasad.jpg'
import sujith from '../assets/images/testimonials/sujithbhakthan.jpg'
import anilkumar from '../assets/images/testimonials/anilkumar.jpg'


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
  const data = {
    testimonials: [
      {
        image: shyamaprasad,
        name: "SHYAMAPRASAD TC",
        project: 'NATINAL SIGNATURE',
        description: 'When i thought to buy a home at Kochi i started my immense research and finally i arrived at a conclusion that National builders is the best builders in kochi. When i went through the history of projects of National Builders i can say with confidence that Mr Sunny has idenetified only those locations where the future prospects are very high and that the value of investments will compound on an average of double digits. The track record of projects made by National builders and people who bought flats of national builders will prove the same. When u buy a flat with national builders rest be assured that the value of your investment is also taken care by Mr sunny.'
      },
      {
        image: sujith,
        name: "SUJITH BHAKTHAN AND SWETHA BAKTHAN",
        project: 'NATINAL KINGDOM 17 C',
        description: 'We thank the premium projects developer for helping us realize our dream of owning a luxurious home in the heart of the city. We are proud of the fact that we have a home in National Kingdom, Kochi’s first Skywalk Project. We are confident that this stellar project will redefine luxurious living in Kochi and we look forward to living the life of our dreams, thanks to National Builders.'
      },
      {
        image: anilkumar,
        name: "DR: ANILKUMAR R",
        project: 'NATINAL KINGDOM PALARIVATTOM 6C',
        description: 'Happy to see the opulent National Kingdom skyscraper towering in the sky. I applaud the great efforts of the National Builders team who were supportive right from the inception of the project to the handing over of the apartment. My family and I are eagerly awaiting the completion of the interiors and for beginning our stay in this prestigious apartment.'
      }
    ],
    total_count: 6,
  };
  
  return (
    <>
     <Helmet>
        <title>Rental Archive - Ready To Move Flats In Kochi | Best builders in Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
      <PageName text={"Testimonials"} />
      <RoundAndText headingred={"Words"} headingwhite={"from our valuable customers"} />
      <TestimonialsList animationConfig={animationConfig} data={data}/>
      <CommonDiv />
    </>
  )
}

export default Testimonials