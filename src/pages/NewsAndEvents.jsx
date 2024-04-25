import React from 'react'
import { Helmet } from 'react-helmet'
import PageName from '../components/common/PageName'
import NewsAndEventsListing from '../components/pages/newsandevents/NewsAndEventsListing'

// After add backend you should be remove this images
import image1 from '../assets/images/newsandevents/news1.jpg'
import image2 from '../assets/images/newsandevents/news2.jpg'
import image3 from '../assets/images/newsandevents/news3.jpg'
function NewsAndEvents() {
  const data = [
    {image:image1,title:"M.C Sunny won Business Excellence in Construction Award 2016- Unique Times FMB Award 2016",date:"june 11,2021",description:"Business Excellence in Construction Award 2016 was awarded to Mr. M C Sunny, CMD, National Builders, in the Unique Times FMB Award presented by Manappuram Gold Loan Powered by Confident, held at Crowne Plaza, Kochi. The Award was presented by Mr. V P Nandakumar, MD and CEO of Manappuram Group, and the Chairman of CII’s Kerala State Council. An event by Pegasus and directed by Ajit Ravi Pegasus Business Excellence in Construction Award 2016 was awarded to Mr. M C Sunny, CMD, National Builder."},
    {image:image2,title:"Marunadum Malanadum M C Sunny",date:"june 11,2021",description:"An eminent business leader and a real-estate pioneer, Founder-CMD M C Sunny’s leadership with nearly four decades of hands-on professional experience and a strong value system has built National Builders into one of the most reputed real-estate companies in Navi Mumbai and Kerala. This solid legacy of 35 years built on the twin-pillars of excellence and integrity has won the trust of customers."},
    {image:image3,title:"M C Sunny | Chairman and MD, National Builders | THE INTERVIEW",date:"june 11,2021",description:"An eminent business leader and a real-estate pioneer, Founder-CMD M C Sunny’s leadership with nearly four decades of hands-on professional experience and a strong value system has built National Builders into one of the most reputed real-estate companies in Navi Mumbai and Kerala. This solid legacy of 35 years built on the twin-pillars of excellence and integrity has won the trust of customers."},
  ]
  return (
    <>
    <Helmet>
        <title>Projects - Ready To Move Flats In Kochi | Best builders in Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
      <PageName text={"News & Events"} />
      <NewsAndEventsListing data={data}/>
    </>
  )
}

export default NewsAndEvents