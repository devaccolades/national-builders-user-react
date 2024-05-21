import * as Yup from "yup";
// const phoneRegExp = /^\d{10}$/;
export const contactForm = Yup.object({
  first_name: Yup.string().trim(),
  last_name: Yup.string().trim(),
  email: Yup.string().trim().email().required("Please enter your email address"),
  phone: Yup.string().trim().required("Please enter your phone number") ,
  message: Yup.string().trim().min(4).required("Please enter a message with at least 4 characters"),
  termsAndConditions: Yup.boolean().oneOf([true], "Please accept the terms and conditions").required("Please accept the terms and conditions"),
});

export const ProjectcontactForm = Yup.object({
  project: Yup.string().trim(),
  first_name: Yup.string().trim(),
  last_name: Yup.string().trim(),
  email: Yup.string().trim().email().required("Please enter your email address"),
  phone: Yup.string().trim().required("Please enter your phone number") ,
  message: Yup.string().trim().min(4).required("Please enter a message with at least 4 characters"),
  termsAndConditions: Yup.boolean().oneOf([true], "Please accept the terms and conditions").required("Please accept the terms and conditions"),
});

export const RentalsContactForm = Yup.object({
  rentals: Yup.string().trim(),
  first_name: Yup.string().trim(),
  last_name: Yup.string().trim(),
  email: Yup.string().trim().email().required("Please enter your email address"),
  phone: Yup.string().trim().required("Please enter your phone number") ,
  message: Yup.string().trim().min(4).required("Please enter a message with at least 4 characters"),
  termsAndConditions: Yup.boolean().oneOf([true], "Please accept the terms and conditions").required("Please accept the terms and conditions"),
});
