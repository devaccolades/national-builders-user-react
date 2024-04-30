import React from "react";
import {
    Button,
    Dialog,
} from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";

import { contactForm } from "../../Validation";
import { useFormik } from 'formik';
import styled from "styled-components";
import { Link } from "react-router-dom";
import AnimationButton from "../common/Button";

export function EnquireModal({ open, handleOpen, rentalsData }) {
    const initialValues = {
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
        <>
            <Dialog size={"md"} open={open} handler={handleOpen} className="bg-transparent bg-black -mt-10 lg:mt-0">
                <form onSubmit={handleSubmit} className='bg-[#2B2B2B] bg-opacity-50 p-5 rounded-[1.4rem]  border border-gray-800 md:p-14 lg:p-14  text-white overflow-x-auto h-[40rem] md:h-auto md:overflow-hidden'>
                    <div className="lg:-mt-5 my-3 lg:my-0 flex flex-row justify-between items-center">
                        <p className="text-[1.3rem] lg:text-[2rem] font-bold">{rentalsData.name}</p>
                        <p className="p-2 border border-gray-500 rounded-full" onClick={handleOpen}>
                            <IoMdClose className="h-5 w-5"/>
                        </p>
                    </div>
                    <Columns className='grid md:grid-cols-2 grid-cols-1 gap-2 lg:gap-5 lg:mt-8'>
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
                            <p className='font-bold mb-2 lg:mb-4'>Last Name</p>
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
                    <div className='w-full mt-5'>
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
                    <div className='flex justify-between mt-10 items-center flex-col gap-10 md:gap-0 md:flex-row'>
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
                        <div className='flex justify-between w-full lg:justify-end items-center'>
                            <button onClick={handleOpen} className="px-6 py-3 border md:hidden block border-gray-700 rounded-[2rem]">Back</button>
                            <AnimationButton hieght='' text={"Send Message"} />
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