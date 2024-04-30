import React from 'react'
import { Helmet } from 'react-helmet'
import NewsandeventsdetailsComponents from '../components/pages/newsandeventsdetails/NewsandeventsdetailsComponents'
import CommonDiv from '../components/common/CommonDiv'

function NewsAndEventsDetails() {
  return (
    <>
    <Helmet>
        <title>M.C Sunny won Business Excellence in Construction Award 2016- Unique Times FMB Award 2016 - National</title>
        <meta
          name="description"
          content="M.C Sunny won Business Excellence in Construction Award 2016- Unique Times FMB Award 2016 - National"
        ></meta>
      </Helmet>
      <NewsandeventsdetailsComponents />
      <CommonDiv />
    </>
  )
}

export default NewsAndEventsDetails