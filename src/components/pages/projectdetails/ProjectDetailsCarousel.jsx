import React from 'react'
import styled from 'styled-components'
import { IoLocationSharp } from "react-icons/io5";


function ProjectDetailsCarousel() {
  return (
    <Section className='contents '>
        <div className='flex w-full'>
            <p>National Shalom</p>
            <p>
                <IoLocationSharp/>
                <span>Thiruvalla, Kerala</span>
            </p>
            <p>
                <span>RERA Number : </span>
                <span>K-RERA/PRJ/066/2021</span>
            </p>
        </div>
    </Section>
  )
}

export default ProjectDetailsCarousel

const Section = styled.section`
    @media(max-width:1400px){
      width:90%; 
}
`