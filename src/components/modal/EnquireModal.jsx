import React, { useState } from "react";
import {
    Button,
    Dialog,
    Spinner,
} from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";

import { RentalsContactForm } from "../../Validation";
import { useFormik } from 'formik';
import styled from "styled-components";
import { Link } from "react-router-dom";
import AnimationButton from "../common/Button";
import { PostRentalEnquiryApi } from "../../services/services";
import Swal from "sweetalert2";

export function EnquireModal({ open, handleOpen, rentalsData }) {
    const [loader, setLoader] = useState(false)

    const initialValues = {
        rentals: rentalsData?.id,
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
        handleBlur,
        handleSubmit,
        handleChange,
        resetForm,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: RentalsContactForm,
        onSubmit: (values, { setSubmitting }) => {
            handleSubmitForm(values, setSubmitting);
        },
    });
    const handleSubmitForm = async (values, setSubmitting) => {
        try {
            setLoader(true)
            if (!values.rentals) {
                values.rentals = rentalsData.id
            }
            const res = await PostRentalEnquiryApi(values)
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
                handleOpen();
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
            handleOpen();
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
            setSubmitting(false);
        }
    };
    return (
        <>
            <Dialog size={"md"} open={open} handler={handleOpen} className="bg-transparent bg-black -mt-10 lg:mt-0">
                <form onSubmit={handleSubmit} className='bg-[#2B2B2B] bg-opacity-50 rounded-[1.4rem] md:rounded-[0.6rem] lg:rounded-[1.4rem] border border-gray-800 text-white overflow-x-auto h-[40rem] md:h-auto md:overflow-hidden'>
                    <div className="lg:-mt-5 my-3 lg:my-0 flex flex-row justify-between items-center sticky top-0 px-5 py-4 md:px-14 lg:px-14 lg:pt-8 lg:pb-5 bg-[#161515] bg-opacity-90">
                        <p className="text-[1.3rem] lg:text-[2rem] font-bold">{rentalsData.name}</p>
                        <p className="p-2 border border-gray-500 rounded-full" onClick={handleOpen}>
                            <IoMdClose className="h-5 w-5" />
                        </p>
                    </div>
                    <Columns className='grid md:grid-cols-2 grid-cols-1 gap-2 lg:gap-5 lg:mt-8 px-5 md:px-14 lg:px-14 '>
                        <div className='w-full'>
                            <p className='font-bold mb-2 lg:mb-4'>First Name</p>
                            <input type="text" placeholder='Enter First Name' className='bg-black border border-[#2B2B2B] ps-3 py-3 w-full rounded-[.6rem] focus:outline-gray-500 focus:outline' name='first_name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.first_name}
                            />
                        </div>
                        <div className='w-full'>
                            <p className='font-bold mb-2 lg:mb-4'>Last Name</p>
                            <input type="text" placeholder='Enter Last Name' className='bg-black border border-[#2B2B2B] ps-3 py-3 w-full rounded-[.6rem] focus:outline-gray-500 focus:outline' name='last_name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.last_name}
                            />
                        </div>
                        <div className='w-full'>
                            <p className='font-bold mb-2 lg:mb-4'>Email</p>
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
                            <p className='font-bold mb-2 lg:mb-4'>Phone</p>
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
                    <div className='w-full  px-5 md:px-14 lg:px-14 mt-4'>
                        <p className='font-bold mb-2 lg:mb-4'>Message</p>
                        <textarea name="message" placeholder='Enter Your Message' className='bg-black border border-[#2B2B2B] ps-3 py-3 w-full rounded-[.6rem] focus:border-gray-500 focus:outline-none' id="" cols="30" rows="6"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                        ></textarea>
                        {touched.message && errors.message && (
                            <div className="text-red-500 text-sm ">{errors.message}</div>
                        )}
                    </div>
                    <div className='md:p-14 md:pt-0 lg:p-14 lg:pt-0 pt-0 p-5 flex justify-between mt-4 items-center flex-col gap-10 md:gap-0 md:flex-row'>
                        <div className='flex items-center gap-3'>
                            <input type="checkbox" name='termsAndConditions' className='bg-black -mt-8 border border-2B2B2B  rounded-md' id=""
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.termsAndConditions}
                            />
                            <div>
                                <p className="">I Agree with <Link className='underline'>Terms of User</Link> and <Link className='underline'>Privacy Policy</Link></p>
                                {touched.termsAndConditions && errors.termsAndConditions && (
                                    <div className="text-red-500 text-sm ">{errors.termsAndConditions}</div>
                                )}
                            </div>

                        </div>
                        <div className='flex justify-between w-full md:justify-end items-center'>
                            <button onClick={handleOpen} className="px-6 py-3 border md:hidden block border-gray-700 rounded-[2rem]">Back</button>
                            {loader ? (
                                <div className="justify-between bg-[#343894] items-center rounded-full flex p-3 lg:p-4">
                                    <Spinner />
                                </div>
                            ) : (<button type='submit'>
                                <AnimationButton hieght='' text={"Send Message"} />
                            </button>)}
                        </div>
                    </div>
                </form>
            </Dialog>
        </>
    )
}


const Columns = styled.div`
`

const ClosingIcons = styled.div`
    /* position: absolute;
    top: 4%;
    right: 4%;
    @media(max-width:720px){
        position: sticky;
} */
`