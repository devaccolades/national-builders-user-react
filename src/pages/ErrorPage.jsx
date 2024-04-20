import React from 'react'
import styled from 'styled-components';
import errorPage from '../assets/images/other/error.svg';

function ErrorPage() {
  return (
  <>
  {/* <Header/> */}
  <Section>
     <img src={errorPage} alt="" />
  </Section>
  {/* <Footer/> */}
  </>
  )
}

export default ErrorPage;

const Section = styled.div`
    height: 90vh;

    img{
      width: 100%;
      object-fit: contain;
      height: 100%;
    }
`;