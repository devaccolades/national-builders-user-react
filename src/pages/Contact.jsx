import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import PageName from '../components/common/PageName';
import RoundAndText from '../components/common/RoundAndText';
import ContactForm from '../components/pages/contact/ContactForm';
import ContactDetails from '../components/pages/contact/ContactDetails';
import CommonDiv from '../components/common/CommonDiv';
import { useLocation } from 'react-router-dom';
import { GetSeoApi } from '../services/services';

function Contact() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [seoData, setSeoData] = useState([])

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
        <title>{seoData?.meta_title}</title>
        <meta
          name="description"
          content={seoData?.meta_description}
        ></meta>
      </Helmet>
      <PageName text={"Contact Us"} />
      <RoundAndText headingred={"Let's"} headingwhite={"Connect"} text={"We are excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with us."} />
      <ContactForm animationConfig={animationConfig} />
      <RoundAndText headingred={"Get"} headingwhite={"in touch with us"} text={"We are here to assist you with any inquiries, requests or feedback you may have."} />
      <ContactDetails animationConfig={animationConfig}/>
      <CommonDiv/>

    </>
  )
}

export default Contact