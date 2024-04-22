import React from 'react'
import styled from 'styled-components'

function Text({text,mt=''}) {
  return (
    <Paragraph className={`text-justify mt-${mt} `}>
        {text}
    </Paragraph>
  )
}

export default Text

const Paragraph = styled.p`
    opacity: 55%;
    font-size: 1.2rem;
    font-family: 'popins_regular';

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }`