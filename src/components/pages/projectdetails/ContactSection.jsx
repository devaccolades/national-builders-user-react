import React from 'react'
import styled from 'styled-components'
import ContactForm from '../contact/ContactForm'

// Icons
import PhoneIcon from '../../../assets/icons/phone.svg'

function ContactSection() {
  return (
    <Section className='mx-auto container'>
      <Container className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] p-3 lg:p-8'>
        <div className='flex justify-between items-center'>
          <Heading>Talk to our expert</Heading>
          <p className='text-[1.4rem] opacity-80'>OR</p>
          <Heading>Request a callback</Heading>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 p-5 rounded-[1.1rem] bg-black gap-6'>
          <div className='grid grid-rows-2 gap-5'>
            <div className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] py-6 lg:py-0 flex flex-col justify-center items-center gap-5'>
              <img src={PhoneIcon} alt="" />
              <Heading2>
                Mumbai
              </Heading2>
              <p className='text-center w-[80%] lg:w-[50%]'>
                + 9122 49639871 /72/ 73, 2249737814 +91 9223300950 / 9223300960, +91 9004091082
              </p>
            </div>
            <div className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] py-6 lg:py-0 flex flex-col justify-center items-center gap-5'>
              <img src={PhoneIcon} alt="" />
              <Heading2>
                Kochi
              </Heading2>
              <p className='text-center w-[80%] lg:w-[50%]'>
              +91 4842340781,2333391, 2534558, +91 98475 33355, +91 98475 44333, +91 98477 17771
              </p>
            </div>
          </div>
          <div className='-mb-[5rem] -mx-5 lg:mx-0'>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ContactSection

const Section = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
    @media(max-width:1400px){
      width:90%; 
 
}`

const Container = styled.div``

const Heading = styled.p`
    font-size: 1.6rem;
    padding-bottom: 0.6rem;
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