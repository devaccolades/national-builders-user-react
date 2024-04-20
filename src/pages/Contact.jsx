import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

// Formic
import { useFormik } from 'formik';
import { ContactForm } from '../Validation';

// Image
import Round from '../assets/images/common/round.svg'
import MailImg from '../assets/images/contact/mail.svg'
import PhoneImag from '../assets/images/contact/phone.svg'
import LocationImg from '../assets/images/contact/location.svg'
import BgImage from '../assets/images/common/botm-image.png'

// Icons
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/includes/Header';
import Footer from '../components/includes/Footer';

function Contact() {
  const [hovered, setHovered] = useState(false);

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

  // Submit Contact Form
  const initialValues = {
    email: "",
    phone: "",
    message: "",
    termsAndConditions: ""
  }
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ContactForm,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmitForm(values, setSubmitting);
    },
  });
  const handleSubmitForm = async (values, setSubmitting) => {
    try {
      alert(values.termsAndConditions, 'daxo')

    } catch (error) {

    } finally {
      setSubmitting(false);
    }
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
            <Header />
      <section className='text-white px-5 md:mx-auto container'>
        <motion.div className='w-full my-24 lg:my-20 ' {...animationConfig} >
          <p className='capitalize py-10 font-bold bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text text-center text-4xl md:text-5xl lg:text-7xl'>Contact us</p>
        </motion.div>
        <motion.div {...animationConfig}>
          <div className='flex my-5 justify-center lg:justify-start items-center'>
            <img src={Round} alt="round image" className='w-3/12 md:w-2/12 lg:w-auto' />
            <p className='ps-4 md:ps-10 text-4xl md:text-5xl'><span className='text-red-500'>Let's </span><span className='bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text'>Connect</span> </p>
          </div>
          <p className='text-xl opacity-65 text-justify'>We are excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with us.</p>
        </motion.div>
        {/* Form start */}
        <motion.form onSubmit={handleSubmit} className='bg-2B2B2B bg-opacity-50 py-12 px-6 lg:py-20 lg:px-20  my-20 rounded-[1.5rem] lg:rounded-[2rem] shadow-2xl' {...animationConfig}>
          <div className='grid lg:grid-cols-2 gap-5 lg:gap-10'>
            <div className=''>
              <p className='font-bold pb-3'>First name</p>
              <input type="text" className='bg-black border ps-3 border-2B2B2B py-3 w-full rounded-md' placeholder='Enter First Name' name="first_name" id="" />
            </div>
            <div className=''>
              <p className='font-bold pb-3'>Last name</p>
              <input type="text" className='bg-black border border-2B2B2B ps-3 py-3 w-full rounded-md' placeholder='Enter Last Name' name="last_name" id="" />
            </div>
            <div className=''>
              <p className='font-bold pb-3'>Email</p>
              <input type="text" className='bg-black border border-2B2B2B ps-3 py-3 w-full rounded-md' placeholder='Enter Your Email' name="email" id=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <div className="text-red-500 text-sm ">{errors.email}</div>
              )}
            </div>
            <div className=''>
              <p className='font-bold pb-3'>Phone</p>
              <input type="number" className='bg-black border border-2B2B2B ps-3 py-3 w-full rounded-md' placeholder='Enter Your Phone Number' name="phone" id=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {touched.phone && errors.phone && (
                <div className="text-red-500 text-sm ">{errors.phone}</div>
              )}
            </div>
          </div>
          <div className='w-full mt-10'>
            <p className='font-bold pb-3'>Message</p>
            <textarea name="message" placeholder='Enter Your Message' className='bg-black border border-2B2B2B ps-3 py-3 w-full rounded-md' id="" cols="30" rows="6"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            ></textarea>
            {touched.message && errors.message && (
              <div className="text-red-500 text-sm ">{errors.message}</div>
            )}
          </div>
          <div className='grid grid-rows-2 gap-7 lg:gap-0 lg:grid-cols-2 mt-8 lg:-mb-10'>
            <div className='flex items-center gap-3'>
              <input type="checkbox" name='termsAndConditions' className='bg-black border border-2B2B2B  rounded-md' id=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.termsAndConditions}
              />
              <div>
                <p>I Agree with <Link className='underline'>Terms of User</Link> and <Link className='underline'>Privacy Policy</Link></p>

                {touched.termsAndConditions && errors.termsAndConditions && (
                  <div className="text-red-500 text-sm ">{errors.termsAndConditions}</div>
                )}
              </div>

            </div>
            <div className='flex justify-center lg:justify-end items-center'>
              <motion.button type='submit' className='bg-343894  hover:bg-white hover:text-red-500 text-xl rounded-full flex p-3'
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Send Message {hovered ? (
                  <GoArrowRight className={`ms-2 lg:ms-4 p-1 h-7 md:h-8 w-7 md:w-8 bg-red-500 text-white rounded-full icon-transition`} />
                ) : (
                  <GoArrowUpRight className={`ms-2 lg:ms-4 p-1 h-7 md:h-8 w-7 md:w-8 bg-red-500 rounded-full icon-transition`} />
                )}
              </motion.button>
            </div>
          </div>
        </motion.form>

        {/* Form End */}

        <motion.div className='mt-48 my-20' {...animationConfig}>
          <div className='flex justify-center lg:justify-start my-5 items-center'>
            <img src={Round} alt="round image" className='w-3/12 md:w-2/12 lg:w-auto' />
            <p className='ps-4  lg:ps-10 text-4xl md:text-5xl'><span className='text-red-500'>Get </span><span className='bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text'>in touch with us</span> </p>
          </div>
          <p className='text-xl opacity-65 text-justify'>We are here to assist you with any inquiries, requests or feedback you may have.</p>
        </motion.div>

        <div className='grid grid-flow-row-2 lg:grid-cols-2 gap-16' >
          <motion.div className='bg-gray-900 grid gap-5 text-lg py-10 lg:p-10 rounded-[1.5rem]' {...animationConfig}>
            <div className='text-center'>
              <p className='text-2xl font-bold '>Our <span className='bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text'> Mumbai Office</span></p>
              <p className='pt-3 opacity-65 pb-6 px-4 md:px-10 lg:px-0'>We are here to assist you with any inquiries, requests or feedback you may have.</p>
            </div>
            <div className='bg-black mx-4 md:mx-10 lg:mx-0 py-8 gap-5 flex flex-col justify-center items-center rounded-[1.5rem]'>
              <img src={MailImg} alt="" />
              <a href="mailto:marketingmumbai@nationalbuilders.in" className='opacity-65 hidden lg:block'>marketingmumbai@nationalbuilders.in</a>
              <a href="mailto:marketingmumbai@nationalbuilders.in" className='opacity-65 lg:hidden text-center block'>
                <p>
                  marketingmumbai@nationalbu
                </p>
                <p>ilders.in</p>
              </a>
            </div>
            <div className='bg-black gap-5 mx-4 md:mx-10 lg:mx-0 py-8 flex flex-col justify-center items-center  rounded-[1.5rem]'>
              <img src={PhoneImag} alt="" />
              <div className='text-center opacity-65'>
                <p>+ 91 22 49639871 / 72 / 73</p>
                <p> +91 2249737814 </p>
                <p className='hidden lg:block'>+91 9223300950 / +91 9223300960 </p>
                <p className='hidden lg:block'>+91 9004091082</p>
                <p className='lg:hidden block'>+91 9223300950 / +91 </p>
                <p className='lg:hidden block'>9223300960 +91 9004091082</p>
              </div>
            </div>
            <div className='bg-black gap-5 mx-4 md:mx-10 lg:mx-0 py-8 flex flex-col justify-center items-center rounded-[1.5rem]'>
              <img src={LocationImg} alt="" />
              <div className='text-center px-4 lg:px-5 opacity-65'>
                <p>National Builders, Sea Queen Heritage, 1st Floor, Plot No.6, Sector 18, Sanpada, Palm Beach Service Road, Navi Mumbai - 400705</p>

              </div>
            </div>
          </motion.div>

          <motion.div className='bg-gray-900 grid gap-5 text-lg py-10 lg:p-10 rounded-[1.5rem]' {...animationConfig}>
            <div className='text-center'>
              <p className='text-2xl font-bold '>Our <span className='bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text'> Kochi Office</span></p>
              <p className=' pt-3 opacity-65 pb-6 px-4 md:px-10 lg:px-0'>We are here to assist you with any inquiries, requests or feedback you may have.</p>
            </div>
            <div className='bg-black mx-4 md:mx-10 lg:mx-0 py-8 gap-5 flex flex-col justify-center items-center rounded-[1.5rem]'>
              <img src={MailImg} alt="" />
              <a href="mailto:marketingkochi@nationalbuilders.in" className='opacity-65 hidden lg:block'>marketingkochi@nationalbuilders.in</a>
              <a href="mailto:marketingkochi@nationalbuilders.in" className='opacity-65 lg:hidden text-center block'>
                <p>
                  marketingkochi@nationalbu
                </p>
                <p>ilders.in</p>
              </a>
            </div>
            <div className='bg-black gap-5  mx-4 md:mx-10 lg:mx-0 py-8 flex flex-col justify-center items-center  rounded-[1.5rem]'>
              <img src={PhoneImag} alt="" />
              <div className='text-center opacity-65'>
                <p>+91 4842340781,2333391,</p>
                <p>2534558,</p>
                <p> +91 98475 33355, +91 98475 44333,</p>
                <p>+91 98477 17771</p>
              </div>
            </div>
            <div className='bg-black gap-5 mx-4 md:mx-10 lg:mx-0 py-8 flex flex-col justify-center items-center rounded-[1.5rem]'>
              <img src={LocationImg} alt="" />
              <div className='text-center px-4 opacity-65'>
                <p className=''>National Pearl Star, 5th Floor, High School Jn., Edappally, Kochi, Kerala - 682 024</p>
                <p className=''></p>
                <p className=''> </p>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <motion.div className='bg-cover p-6 lg:p-10 bg-center mt-28' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgImage})` }} {...animationConfig}>
        <div className='mx-auto container lg:flex' >
          <div className='lg:w-full text-center'>
            <p className='text-3xl lg:text-5xl lg:font-bold' >
              Find your <span className='bg-gradient-to-r from-white to-gray-600 text-transparent bg-clip-text'>dream home today</span>
            </p>
            <p className='text-xl text-justify opacity-65 pt-8'>A dedicated homecare department is at service 24/7 to cater to all the needs of the customer. From choosing the perfect house, doing all the paperwork and handing over your keys, our Homecare will assist you. We have a dedicated after-sales and asset management team to attend to all repair and maintenance work.</p>
          </div>
          <div className='lg:w-4/12 xl:w-3/12 flex justify-center my-10 lg:my-0 lg:justify-end items-center '>
            <motion.button className='bg-343894  hover:bg-white hover:text-red-500 text-lg rounded-full flex p-3'
              whileHover={{ scale: 1.1 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Explore Property {hovered ? (
                <GoArrowRight className={`ms-2 lg:ms-4 p-1 h-7 md:h-8 w-7 md:w-8 bg-red-500 text-white rounded-full icon-transition`} />
              ) : (
                <GoArrowUpRight className={`ms-2 lg:ms-4 p-1 h-7 md:h-8 w-7 md:w-8 bg-red-500 rounded-full icon-transition`} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
      <Footer />

    </>
  )
}

export default Contact