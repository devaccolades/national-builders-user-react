import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import PageName from '../components/common/PageName';
import RoundAndText from '../components/common/RoundAndText';
import RentalsList from '../components/pages/rentals/RentalsList';
import CommonDiv from '../components/common/CommonDiv'

import { GetRentalsApi, GetSeoApi } from '../services/services';
import { useLocation } from 'react-router-dom';

function RentalProperties() {
  const [retals, setRentals] = useState([])

  const location = useLocation();
  const currentPath = location.pathname;
  const [seoData, setSeoData] = useState([])


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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetSeoApi(currentPath)
        const { StatusCode, data } = res.data;
        if (StatusCode === 6000) {
          setSeoData(data)
        }
      } catch (error) {
        console.error("Error fetching home page data:", error);
      }
    }
    fetchData()
  }, [currentPath])

  return (
    <>
      <Helmet>
        <title>{seoData?.meta_title}</title>
        <meta
          name="description"
          content={seoData?.meta_description}
        ></meta>
      </Helmet>
      <PageName text={"Rental Properties"} />
      <RoundAndText headingred={"Properties"} headingwhite={"for rent"} />
      <RentalsList animationConfig={animationConfig} data={retals} />
      <CommonDiv />
    </>
  )
}

export default RentalProperties