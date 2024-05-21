import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import PageName from '../components/common/PageName';
import RoundAndText from '../components/common/RoundAndText';
import RentalsList from '../components/pages/rentals/RentalsList';
import CommonDiv from '../components/common/CommonDiv'

import { GetRentalsApi } from '../services/services';

function RentalProperties() {
  const [retals,setRentals] = useState([])
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetRentalsApi()
        const { StatusCode, data } = res.data;
        if (StatusCode === 6000) {
          setRentals(data)
        }
      } catch (error) {
        setRentals([])
      }
    };

    fetchData();
  }, [])

  return (
    <>
     <Helmet>
        <title>Rentals - Ready To Give a Flat In Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
      <PageName text={"Rental Properties"} />
      <RoundAndText headingred={"Properties"} headingwhite={"for rent"} />
      <RentalsList animationConfig={animationConfig} data={retals}/>
      <CommonDiv />
    </>
  )
}

export default RentalProperties