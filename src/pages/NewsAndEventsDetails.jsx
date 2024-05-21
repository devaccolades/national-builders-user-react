import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import NewsandeventsdetailsComponents from '../components/pages/newsandeventsdetails/NewsandeventsdetailsComponents'
import CommonDiv from '../components/common/CommonDiv'
import { GetNewsAndEventsApi, GetNewsAndEventsDetailsApi } from '../services/services';
import { useParams } from 'react-router-dom';

function NewsAndEventsDetails() {
  const { slug } = useParams();
  const [newsAndEvents,setNewsAndEvents] = useState('')
  const [suggestionsData,setSuggestionsData] = useState([])
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
        const res = await GetNewsAndEventsDetailsApi(slug)
        const { StatusCode, data, suggestions } = res.data;
        if (StatusCode === 6000) {
          setNewsAndEvents(data)
          setSuggestionsData(suggestions)
        }
    } catch (error) {
      setNewsAndEvents([])
    }
};
useEffect(()=>{
  fetchData()
},[slug])
  return (
    <>
    <Helmet>
        <title>{newsAndEvents?.meta_tag}</title>
        <meta
          name="description"
          content={newsAndEvents?.meta_description}
        ></meta>
      </Helmet>
      <NewsandeventsdetailsComponents animationConfig={animationConfig} data={newsAndEvents} suggestions={suggestionsData} />
      <CommonDiv />
    </>
  )
}

export default NewsAndEventsDetails