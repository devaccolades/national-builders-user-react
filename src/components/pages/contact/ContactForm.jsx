import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { contactForm } from '../../../Validation/index'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import AnimationButton from '../../common/Button';

function ContactForm({animationConfig}) {
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
    validationSchema: contactForm,
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
    <Section className='container mx-auto' {...animationConfig}>
      <form onSubmit={handleSubmit} className='bg-red bg-[#2B2B2B] bg-opacity-50 p-5 sm:p-8 md:p-10 lg:p-14 xl:p-20 rounded-[1.4rem]'>
        <Columns className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          <div className='w-full'>
            <p className='font-bold mb-4'>First Name</p>
            <input type="text" placeholder='Enter First Name' className='bg-black border border-[#2B2B2B] ps-3 py-3 w-full rounded-[.6rem] focus:outline-gray-500 focus:outline' name='first_name' />
          </div>
          <div className='w-full'>
            <p className='font-bold mb-4'>Last Name</p>
            <input type="text" placeholder='Enter Last Name' className='bg-black border border-[#2B2B2B] ps-3 py-3 w-full rounded-[.6rem] focus:outline-gray-500 focus:outline' name='last_name' />
          </div>
          <div className='w-full'>
            <p className='font-bold mb-4'>Last Name</p>
            <input type="email" placeholder='Enter Your Email' className='bg-black border border-[#2B2B2B] ps-3 py-3 w-full rounded-[.6rem] focus:outline-gray-500 focus:outline' name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && (
              <div className="text-red-500 text-sm ">{errors.email}</div>
            )}
          </div>
          <div className='w-full'>
            <p className='font-bold mb-4'>Phone</p>
            <input type="number" placeholder='Enter Your Number' className='bg-black border border-[#2B2B2B] ps-3 py-3 w-full rounded-[.6rem] focus:outline-gray-500 focus:outline' name='phone'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {touched.phone && errors.phone && (
              <div className="text-red-500 text-sm ">{errors.phone}</div>
            )}
          </div>

        </Columns>
        <div className='w-full mt-5'>
          <p className='font-bold mb-4'>Message</p>
          <textarea name="message" placeholder='Enter Your Message' className='bg-black border border-[#2B2B2B] ps-3 py-3 w-full rounded-[.6rem] focus:border-gray-500 focus:outline-none' id="" cols="30" rows="6"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          ></textarea>
          {touched.message && errors.message && (
            <div className="text-red-500 text-sm ">{errors.message}</div>
          )}
        </div>
        <div className='flex justify-between mt-10 items-center flex-col gap-10 md:gap-0 md:flex-row'>
          <div className='flex items-center gap-3'>
            <input type="checkbox" name='termsAndConditions' className='bg-black border border-2B2B2B  rounded-md' id=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.termsAndConditions}
            />
            <div c>
              <p>I Agree with <Link className='underline'>Terms of User</Link> and <Link className='underline'>Privacy Policy</Link></p>

              {touched.termsAndConditions && errors.termsAndConditions && (
                <div className="text-red-500 text-sm ">{errors.termsAndConditions}</div>
              )}
            </div>

          </div>
          <div className='flex justify-center lg:justify-end items-center'>
            <AnimationButton hieght='' text={"Send Message"} />
           
          </div>
        </div>
      </form>
    </Section>
  )
}

export default ContactForm

const Section = styled(motion.section)`
margin-bottom: 5rem;
@media(max-width:1400px){
  width:90%;
}
`;

const Columns = styled.div`
`