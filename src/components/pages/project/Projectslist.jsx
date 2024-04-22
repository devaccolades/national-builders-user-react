import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import AnimationButton from '../../common/Button';

import Building1 from '../../../assets/images/project/building1.jpg'
import Building2 from '../../../assets/images/project/building2.jpg'
import Building3 from '../../../assets/images/project/building3.jpg'
import Building4 from '../../../assets/images/project/building4.png'
import Building5 from '../../../assets/images/project/building5.png'
import Building6 from '../../../assets/images/project/building6.jpg'
import Building7 from '../../../assets/images/project/building7.jpg'
import Building8 from '../../../assets/images/project/building8.jpg'
import Building9 from '../../../assets/images/project/building9.jpg'

import { motion } from 'framer-motion';

function Projectslist({ animationConfig }) {
  const [selected, setSelected] = useState('All')

  const projects = [
    { image: Building1, name: "Natinal Majestic", place: "Kochi", type: "New Launch", description: "Spread over half an acre, Shalom has everything that takes for a life style you deserve. Shalom stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation." },
    { image: Building2, name: "Natinal Signature Tiwer 2", place: "Eranamkulam", type: "New Launch", description: "Spread over half an acre, Shalom has everything that takes for a life style you deserve. Shalom stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation." },
    { image: Building3, name: "Natinal Signature Tiwer 2", place: "Eranamkulam", type: "New Launch", description: "Spread over half an acre, Shalom has everything that takes for a life style you deserve. Shalom stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation." },
    { image: Building4, name: "Natinal Treedom park Twer 2", place: "Kochi", type: "Ready To Occupy", description: "Spread over half an acre, Shalom has everything that takes for a life style you deserve. Shalom stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation." },
    { image: Building5, name: "Trinity Paradise", place: "Thane", type: "Under Constructions", description: "Spread over half an acre, Shalom has everything that takes for a life style you deserve. Shalom stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation." },
    { image: Building6, name: "Sea Queen park", place: "Navi Mumbai", type: "Under Constructions", description: "Spread over half an acre, Shalom has everything that takes for a life style you deserve. Shalom stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation." },
    { image: Building7, name: "Natinal Kingdom", place: "Kochi", type: "Ready To Occupy", description: "Spread over half an acre, Shalom has everything that takes for a life style you deserve. Shalom stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation." },
    { image: Building8, name: "National Shalom", place: "Thiruvalla", type: "Ready To Occupy", description: "Spread over half an acre, Shalom has everything that takes for a life style you deserve. Shalom stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation." },
    { image: Building9, name: "National Marvel", place: "Navi Mumbai", type: "Sold Out", description: "Spread over half an acre, Shalom has everything that takes for a life style you deserve. Shalom stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation." },
  ]
  
  const [Filter,setFilter] = useState(projects)

  const Filtering = (option) =>{
    setSelected(option)

    if (option === "All") {
      setFilter(projects);
    } else {
      setFilter(projects.filter((project) => project.place === option));
    }
    
  }

  const options = ['All', 'Navi Mumbai', 'Thane', 'Kochi', 'Thiruvalla', 'Eranamkulam']

  return (
    <Section className='container w-full mx-auto'>
      <Selection {...animationConfig}>
        {options.map((option, index) => (
          <p onClick={() =>Filtering(option) } className={`${selected === option ? "text-black bg-white " : "opacity-90"}capitalize py-3 px-4  cursor-pointer border border-gray-800 hover:text-black rounded-[2rem] bg-gray-900 hover:bg-white`} key={index}>
            {option}
          </p>
        ))}
      </Selection>
      <Listing {...animationConfig}>
        {Filter.map((project, index) => (
          <Card key={index} className="w-96 bg-gray-900 bg-opacity-60">
            <img
              className='mt-5 mx-5 rounded-[.8rem]'
              src={project.image || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
              alt="card-image"
            />
            <CardBody>
              <div className='capitalize flex justify-between items-center text-white text-opacity-90'>
                <p className='py-3 px-4 text-[.8rem] md:text-[1rem] border border-gray-800 rounded-[2rem]'>{project.place}</p>
                <p className={`py-3 px-4 text-[.8rem] md:text-[1rem] border border-gray-800 rounded-[2rem] ${project.type === "New Launch" ? "bg-[#343894]" : project.type ==='Ready To Occupy' ? "bg-[#1D4734]": project.type === "Under Constructions" ? "bg-[#646464]" : "bg-red-500"}`}>{project.type}</p>
              </div>
              <Typography variant="h5" color="white" className="mt-5 mb-3 text-opacity-90">
                {project.name}
              </Typography>
              <Typography className=''>
              {project.description.split(' ').slice(0, 20).join(' ')} ...
              </Typography>
              <div className='w-full mt-5'>
                <AnimationButton width='full' text={"View Property Details"} />
              </div>
            </CardBody>
          </Card>
        ))}

      </Listing>
    </Section>
  )
}

export default Projectslist

const Section = styled.section`
@media(max-width:1400px){
  width:90%;
}
`;

const Selection = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    @media(max-width:768px){
  gap: 1rem;
}
`
const Listing = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
`