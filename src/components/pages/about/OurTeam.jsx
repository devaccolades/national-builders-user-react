import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Image
import Director1 from '../../../assets/images/about/director1.png'
import Director2 from '../../../assets/images/about/director2.png'
import Director3 from '../../../assets/images/about/director3.png'
import Director4 from '../../../assets/images/about/director4.jpeg'
import RoundAndText from '../../common/RoundAndText'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import { DirectorModal } from '../../modal/DirectorModal'

function OurTeam({ animationConfig }) {
  const [data, setdata] = useState('');

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const directors = [
    { 'image': Director1, 'name': 'M.C.Sunny', 'position': 'CMD and Managing Director', 'linkedin': 'ling', 
      'explain1': "An eminent business leader and a real-estate pioneer, Founder-CMD M C Sunny’s leadership with nearly four decades of hands-on professional experience and a strong value system has built National Builders into one of the most reputed real-estate companies in Navi Mumbai and Kerala." ,
      'explain2':"A key contributor in making Navi Mumbai a ‘City of the 21 st century’ that it is now, Mr. Sunny is the man behind landmark buildings that house the dreams of thousands of families. After successfully executing prestigious projects in Navi Mumbai in the early years, Mr. Sunny made a strong foray in the real-estate market of his homeland Kerala. Today, some of the finest towers with the most luxurious homes in the cities of Navi Mumbai and Cochin are testaments to the vision and will of Mr. Sunny.",
      'explain3':"A self-made entrepreneur who puts people before profits, Mr. Sunny firmly believes that ethics and integrity are the true foundations of business. A practitioner of the commit-less-and- deliver-more philosophy, Mr. Sunny has built a solid reputation as a stalwart of the business fraternity – and a compassionate member of the community. From holding key posts in Industry Bodies and Developers’ Associations over the years, to being on the Board of Trustees of educational and cultural organizations, Mr. Sunny is a prominent personality and philanthropist for whom giving back to the society is not only a commitment, but a way of life."
    },
    { 'image': Director2, 'name': 'Sherly', 'position': 'Director', 'linkedin': 'ling',
      'explain1': "A partner in progress, a pillar of strength and a pioneering businesswoman, Sherly Sunny is a guiding force at National Builders. A trailblazer in her own right, the co-founder has been an active contributor to the Group’s growth strategy and expansion plans over the years. Her solid yet reassuring presence has been one of the key contributors to  the ascension of National Builders. The compassionate entrepreneur also actively oversees the philanthropic and CSR initiatives of National Builders",
      'explain2': "",
      'explain3': "",
       },
    { 'image': Director3, 'name': 'Sijo Sunny', 'position': 'Director', 'linkedin': 'ling', 
      'explain1': "Building on the 35-year legacy of National Builders, the young engineer with a management degree from Coventry London brings his sharp business acumen and entrepreneurial skills to drive the Group’s growth. From formulation of project proposals and design plans,to general management and project execution, Mr. Sijo Sunny is instrumental in powering the strategic growth of National Builders." ,
      'explain2': "" ,
      'explain3': "" ,
    },
    { 'image': Director4, 'name': 'Anne Sijo Sunny', 'position': 'Director', 'linkedin': 'ling', 
      'explain1': "The Electronics & Communications engineer from BITS-Pilani with a flair for marketing takes inspiration from her global understanding and multi-cultural upbringing in the GCC region to devise cutting-edge strategies for National Builders. A pursuer of process  optimization and continuous innovation, Ms. Anne Sijo Sunny heads the marketing team at National Builders   and is the driving force behind the Group’s marketing campaigns and communication initiatives." ,
      'explain2': "" ,
      'explain3': "" ,
    },
  ]
  return (
    <>
      <Section>
        <RoundAndText headingred={"Our"} headingwhite={"Team"} text={"At National Builders, we have always taken care to pick the best location with ease of accessibility and assured appreciation. The perfect locations make our project truly well connected. All our projects are located at the heart of the city which gives residents access to the most happening lifestyle hubs, the finest hotels, luxury retail stores, premium entertainment centres and major hotspots of work."} />
        <Container className='mx-auto w-full grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-0 right-auto left-auto '>
          {directors.map((director, index) => (
            <motion.div {...animationConfig} whileHover={{ scale: 1.1 }} >
              <Card onClick={() => { handleOpen(), setdata(director) }} key={index} className="mt-6 lg:mt-3 lg:w-auto bg-gray-900 lg:me-4 hover:shadow-gray-600 hover:shadow-xl cursor-pointer" >
                <img className='h-4/6 mt-4 px-6 pt-3 lg:pt-2 lg:px-4'
                  src={director.image || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
                  alt="card-image"
                />
                <div className='flex -mt-5 justify-center items-center'>
                  <div className='bg-[#343894] px-6 py-3 rounded-full'>
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_917_15657)">
                        <path d="M21.0845 0.570312H1.91113C0.992676 0.570312 0.25 1.29541 0.25 2.19189V21.4443C0.25 22.3408 0.992676 23.0703 1.91113 23.0703H21.0845C22.0029 23.0703 22.75 22.3408 22.75 21.4487V2.19189C22.75 1.29541 22.0029 0.570312 21.0845 0.570312ZM6.92529 19.7437H3.58545V9.00342H6.92529V19.7437ZM5.25537 7.54004C4.18311 7.54004 3.31738 6.67432 3.31738 5.60645C3.31738 4.53857 4.18311 3.67285 5.25537 3.67285C6.32324 3.67285 7.18896 4.53857 7.18896 5.60645C7.18896 6.66992 6.32324 7.54004 5.25537 7.54004ZM19.4233 19.7437H16.0879V14.5229C16.0879 13.2793 16.0659 11.6753 14.352 11.6753C12.6162 11.6753 12.3525 13.0332 12.3525 14.4351V19.7437H9.02149V9.00342H12.2207V10.4712H12.2646C12.7085 9.62744 13.7983 8.73535 15.4199 8.73535C18.7993 8.73535 19.4233 10.959 19.4233 13.8506V19.7437Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_917_15657">
                          <rect width="22.5" height="22.5" fill="white" transform="translate(0.25 0.570312)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-xl text-white text-center">
                    {director.name}
                  </Typography>
                  <Typography className='text-center'>
                    {director.position}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </Container>
      </Section>
      <DirectorModal open={open} handleOpen={handleOpen} data={data} />
    </>
  )
}

export default OurTeam

const Section = styled.div`
padding-top: 5rem;
padding-bottom: 5rem;

`

const Container = styled.div`
  width: 70%;
    @media(max-width:1400px){
        width:90%
}
`