import React from 'react'
import { Helmet } from 'react-helmet';
import Header from '../components/includes/Header';
import Footer from '../components/includes/Footer';
import PageName from '../components/common/PageName';
import RoundAndText from '../components/common/RoundAndText';
import ContactForm from '../components/pages/contact/ContactForm';
import ContactDetails from '../components/pages/contact/ContactDetails';
import CommonDiv from '../components/common/CommonDiv';

function Contact() {
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
        <title>Contact - Ready To Move Flats In Kochi | Best builders in Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
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