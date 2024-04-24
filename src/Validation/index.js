import * as Yup from "yup";
const phoneRegExp = /^\d{10}$/;
export const contactForm = Yup.object({
  first_name: Yup.string().trim(),
  last_name: Yup.string().trim(),
  email: Yup.string().trim().email().required("Please enter your email address"),
  phone: Yup.string()
  .trim() 
  .matches(phoneRegExp, "Invalid phone number")
  .required("Please enter your phone number") ,
  message: Yup.string().trim().min(4).required("Please enter a message with at least 4 characters"),
  termsAndConditions: Yup.boolean().oneOf([true], "Please accept the terms and conditions").required("Please accept the terms and conditions"),

});

