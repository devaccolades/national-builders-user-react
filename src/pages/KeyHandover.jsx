import React from 'react'
import { Helmet } from 'react-helmet';
import PageName from '../components/common/PageName';
import CommonDiv from '../components/common/CommonDiv';

import image1 from '../assets/images/key-handover/image1.jpg'
import image2 from '../assets/images/key-handover/image2.jpg'
import image3 from '../assets/images/key-handover/image3.jpg'
import image4 from '../assets/images/key-handover/image4.jpg'
import image5 from '../assets/images/key-handover/image5.jpg'
import image6 from '../assets/images/key-handover/image6.jpg'
import image7 from '../assets/images/key-handover/image7.jpg'
import image8 from '../assets/images/key-handover/image8.jpg'
import image9 from '../assets/images/key-handover/image9.jpg'
import KeyhandoverLisitng from '../components/pages/keyhandover/KeyhandoverLisitng';

function KeyHandover() {
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

    const data = [
      {id:1,image:image1,name:"Mr. Shyamaprasad – Film Director & Actor"},
      {id:2,image:image2,name:"Angel Susan Varghese"},
      {id:3,image:image3,name:"Dr. Mohan Joseph Modayil"},
      {id:4,image:image4,name:"Dr. Manoj P Samuel and Anu Cherian"},
      {id:5,image:image5,name:"Capt. Unnikrishnan"},
      {id:6,image:image6,name:"Mr. Sunil"},
      {id:7,image:image7,name:"Mr. Jimmy Abraham"},
      {id:8,image:image8,name:"Mr. Akshay Ankush Patil – National Harmony"},
      {id:9,image:image9,name:"Mr. Arun Koli – National Harmony"},
    ]

  return (
    <>
     <Helmet>
        <title>Key Handover - Ready To Move Flats In Kochi | Best builders in Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
      <PageName text={"Key Handover"} />
      <KeyhandoverLisitng data={data} animationConfig={animationConfig}/>
      <CommonDiv />
    </>
  )
}

export default KeyHandover