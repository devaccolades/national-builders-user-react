import React from 'react'
import { Helmet } from 'react-helmet';
import PageName from '../components/common/PageName';
import RoundAndText from '../components/common/RoundAndText';
import RentalsList from '../components/pages/rentals/RentalsList';
import CommonDiv from '../components/common/CommonDiv'

// Image after the backend should be remove the images
import Rentals1 from '../assets/images/rentals/rentals1.png'
import Rentals2 from '../assets/images/rentals/rentals2.jpg'
function RentalProperties() {
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
    {image:Rentals1, name:'National Residency 0-14',type:'Commercial',area:500,price:50, place:'Kochi'},
    {image:Rentals1, name:'National Residency 0-7',type:'Commercial',area:500,price:50, place:'Kochi'},
    {image:Rentals1, name:'National Residency B-4 And 5',type:'Commercial',area:276,price:50, place:'Kochi'},
    {image:Rentals2, name:'National Pearl Star -2K',type:'Commercial',area:666,price:60, place:'Kochi'},
    {image:Rentals2, name:'National Pearl Star -3N',type:'Commercial',area:775,price:60, place:'Kochi'},
    {image:Rentals2, name:'National Pearl Star -4K',type:'Commercial',area:666,price:60, place:'Kochi'},
  ]

  return (
    <>
     <Helmet>
        <title>Rental Archive - Ready To Move Flats In Kochi | Best builders in Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
      <PageName text={"Rental Properties"} />
      <RoundAndText headingred={"Properties"} headingwhite={"for rent"} />
      <RentalsList animationConfig={animationConfig} data={data}/>
      <CommonDiv />
    </>
  )
}

export default RentalProperties