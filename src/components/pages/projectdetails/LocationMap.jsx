import React from 'react'
import styled from 'styled-components'

function LocationMap() {
  return (
    <Section className='mx-auto container'>
            <Container className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] p-8'>
            <Heading>Floor Plans</Heading>
            <div className='grid grid-cols-2'>
                <div>1</div>
                <div>
                {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="450"
              frameBorder="0"
              style="border:0;"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            /> */}
                </div>
            </div>
            </Container>
    </Section>
  )
}

export default LocationMap

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