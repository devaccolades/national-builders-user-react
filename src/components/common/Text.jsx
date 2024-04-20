import React from 'react'
import styled from 'styled-components'

function Text({text}) {
  return (
    <Paragraph className='opacity-65 text-justify leading-7 lg:leading-9'>
        {text}
    </Paragraph>
  )
}

export default Text

const Paragraph = styled.p`
  font-family: 'popins_regular';
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;
