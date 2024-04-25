import React from 'react'
import { Helmet } from 'react-helmet';
import PageName from '../components/common/PageName';
import CommonDiv from '../components/common/CommonDiv';

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
  return (
    <>
     <Helmet>
        <title>National Shalom - Ready To Move Flats In Kochi | Best builders in Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
      <PageName text={"Key Handover"} />
      <CommonDiv />
    </>
  )
}

export default KeyHandover