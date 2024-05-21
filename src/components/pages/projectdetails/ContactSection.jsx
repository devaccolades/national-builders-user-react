import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Icons
import PhoneIcon from '../../../assets/icons/phone.svg'
import { useFormik } from 'formik'
import { ProjectcontactForm } from '../../../Validation'
import { Link } from 'react-router-dom';
import AnimationButton from '../../common/Button'
import { GetBranchesApi, PostEnquiryApi } from '../../../services/services'
import NoDataFound from '../../common/NoDataFound'
import { Spinner } from '@material-tailwind/react'
import Swal from 'sweetalert2'

function ContactSection({ animationConfig, projectId }) {
  const [loader, setLoader] = useState(false)
  const [branch, setBranch] = useState([])

  const initialValues = {
    project: projectId || "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    termsAndConditions: ""
  }
  const {
    values,
    errors,
    touched,
    resetForm,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ProjectcontactForm,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmitForm(values, setSubmitting);
    },
  });
  const handleSubmitForm = async (values, setSubmitting) => {
    try {
      if(!values.project){
        values.project = projectId
    }
      setLoader(true)
      const res = await PostEnquiryApi(values)
      const { StatusCode } = res.data
      
      if (StatusCode === 6001) {
        Swal.fire({
          title: "We received your enquiry",
          text: "We will contact you soon. Thank you for your enquiry.",
          icon: "success",
          background: '#2B2B2B',
          color: 'white',
          confirmButtonColor: '#3085d6',
          customClass: {
            popup: 'custom-swal-popup'
          },
          showConfirmButton: false,
          timer: 3000
        });
        resetForm()
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!.",
          showConfirmButton: false,
          background: '#2B2B2B',
          color: 'white',
          timer: 1500
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false)
      setSubmitting(false);
    }
  };

  const fetchBranch = async () => {
    try {
      const res = await GetBranchesApi()
      const { StatusCode, data } = res.data;
      if (StatusCode === 6000) {
        setBranch(data)
      }
    } catch (error) {
      console.error("Error fetching home page data:", error);
    }
  }
  useEffect(() => {
    fetchBranch()
  }, [])
  return (
    <Section className='mx-auto'>
      <Container className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] p-4 lg:p-8' {...animationConfig}>
        <div className='lg:flex justify-between items-center'>
          <Heading className='text-center'>Talk to our expert</Heading>
          <p className='text-[1.4rem] opacity-80 hidden lg:block'>OR</p>
          <Heading className='hidden lg:block'>Request a callback</Heading>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 p-3 lg:p-5 rounded-[1.1rem] bg-black gap-6'>
          <div className='grid grid-rows-2 gap-5'>
            {branch.length === 0 ? (
              <div className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] py-6 lg:py-0 flex flex-col justify-center items-center gap-5'>                        <NoDataFound text={"Address Not Found..."} />
              </div>
            ) : (
              branch.map((address, index) => (
                <div className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] py-6 lg:py-0 flex flex-col justify-center items-center gap-5'>
                  <img src={PhoneIcon} alt="" />
                  <Heading2>
                    {address?.location}
                  </Heading2>
                  <p className='text-center w-[80%] lg:w-[50%]'>
                    {address?.phone_number}
                  </p>
                </div>
              )))}
          </div>
          <form onSubmit={handleSubmit} className='bg-red bg-[#2B2B2B] bg-opacity-50 p-5 sm:p-8 md:p-10 lg:p-8 xl:p-10 rounded-[1.4rem]'>
            <Columns className='grid md:grid-cols-2 grid-cols-1 gap-5'>
              <div className='w-full'>
                <p className='font-bold mb-4'>First Name</p>
                <input type="text" placeholder='Enter First Name' className='bg-black border border-[#2B2B2B] ps-3 py-3 w-full rounded-[.6rem] focus:outline-gray-500 focus:outline'
                name='first_name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
               />
              </div>
              <div className='w-full'>
                <p className='font-bold mb-4'>Last Name</p>
                <input type="text" placeholder='Enter Last Name' className='bg-black border border-[#2B2B2B] ps-3 py-3 w-full rounded-[.6rem] focus:outline-gray-500 focus:outline'
                 name='last_name'
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.last_name}
                 />
              </div>
              <div className='w-full'>
                <p className='font-bold mb-4'>Email</p>
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
              {loader ? (
                <div className="justify-between bg-[#343894] items-center rounded-full flex p-3 lg:p-4">
                  <Spinner />
                </div>) : (
              <div className='flex justify-center w-full lg:justify-end items-center'>
                <AnimationButton hieght='' text={"Send Message"} />
              </div>)}
            </div>
          </form>
        </div>
      </Container>
    </Section>
  )
}

export default ContactSection

const Section = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
width: 70%;
    @media(max-width:1400px){
      width:90%; 
 
}`

const Container = styled(motion.div)``

const Heading = styled.p`
    font-size: 1.6rem;
    padding-bottom: 1rem;
    @media(max-width:1024px){
        text-align: center;
        font-size: 1.6rem;
}`

const Heading2 = styled.p`
    font-size: 1.3rem;
    font-family: 'popins_bold';
    @media(max-width:1024px){
        font-size: 1.6rem;
}
@media(max-width:425px){
    font-size: 1.6rem;
}
@media (max-width: 375px) {
    font-size: 1.6rem;
}
`;

const Columns = styled.div`
`