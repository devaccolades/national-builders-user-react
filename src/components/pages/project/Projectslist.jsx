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
    { image: Building1, name: "National Majestic", place: "Kochi", type: "New Launch", description: "Spread over half an acre, National Majestic has everything that takes for a life style you deserve. National Majestic stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation." },
    { image: Building2, name: "National Signature Tower 2", place: "Ernakulam", type: "New Launch", description: "Life in Cochin is always in vogue. It keeps in pace with this rapidly changing world. It is a known fact that today Cochin is the ultimate destination for the people who want to keep abreast with the perpetually moving world. Keeping these factors in perspective National builders is launching the novel conceptin" },
    { image: Building3, name: "National Shalom", place: "Ernakulam", type: "New Launch", description: "Spread over half an acre, Shalom has everything that takes for a life style you deserve. Shalom stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation. Book your apartment and a blissful future at National Shalom. Flats and apartments with world class standards and near to Thiruvalla town. Among this ambitious project’s major specialities is the convenient access it offers to Thiruvalla town which is just 4 kms away. This much sought-after town is also the district’s largest in terms of stature. A cut above the rest, Shalom offers an ingenious blend of greenery and luxury. The flats are now available for sale in Thiruvalla, make sure that you carve a space for yourself here." },
    { image: Building4, name: "National Treedom park Tower 2", place: "Kochi", type: "Ready To Occupy", description: "Kerala is known as “God’s Own Country for its lush natural beauty, beguiling backwaters and wealth of spices that have been the Holy Grail for generations of seafarers. Cochin is the ultimate destination for the people who love changes. Complementing this change National Builders launches a new concept in luxury – National Treedom Park – at vyttila, the magnum opus in luxury." },
    { image: Building5, name: "Trinity Paradise", place: "Thane", type: "Under Construction", description: "Trinity Paradise offers easy access to Navi Mumbai, Thane, Kalyan and Dombivali. Shillphata has emerged as a very convenient neighbourhood, considering the easy living conditions. This is the place where you can spend time in nature, breathe deeply, let go off your worries, forgive yourself and others and build your life around what you love." },
    { image: Building6, name: "Sea Queen park", place: "Navi Mumbai", type: "Under Construction", description: "Sea Queen Park, another project from National Builders. Located at Taloja ( Majkur ), Ghot Camp, Near Taloja phase II. Key Features G + 4 Residential cum commercial project, Community Hall with Gym, Land Scape Garden, Children Play Area , Jogging Track, Indoor Games and Intercom Facilities." },
    { image: Building7, name: "National Kingdom", place: "Kochi", type: "Ready To Occupy", description: "National Builders proudly presents its magnum opus project National Kingdom, Kochi’s first sky villa project. A majestic skyscraper with a medley of new age features and amenities, National Kingdom is coming up at the new buzz point of Kochi – Palarivattom. Located near the Palarivattom Metro Station, National Kingdom offers a premium lifestyle to the connoisseurs of fine living." },
    { image: Building8, name: "National Shalom", place: "Thiruvalla", type: "Ready To Occupy", description: "Spread over half an acre, Shalom has everything that takes for a life style you deserve. Shalom stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation. Book your apartment and a blissful future at National Shalom. Flats and apartments with world class standards and near to Thiruvalla town. Among this ambitious project’s major specialities is the convenient access it offers to Thiruvalla town which is just 4 kms away. This much sought-after town is also the district’s largest in terms of stature. A cut above the rest, Shalom offers an ingenious blend of greenery and luxury. The flats are now available for sale in Thiruvalla, make sure that you carve a space for yourself here." },
    { image: Building9, name: "National Marvel", place: "Navi Mumbai", type: "Sold Out", description: "National Builders heralded a classicism in the art of home making. In a short span of just 25 years National Builders re-wrote the rules of graceful living by completing 100 projects in Navi Mumbai and Kochi . Every project of National is a landmark which needs no address proof to differentiate. Added to these is the ISO 9001:2000 certification.The Chairman and Managing Director of National Builders, Mr. M.C. Sunny, an amazing visionary, is a Keralite who holds the honor of fulfilling the aspirations of Non-resident Indians who dreamed of a serene but splendid living style." },
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

  const options = ['All', 'Navi Mumbai', 'Thane', 'Kochi', 'Thiruvalla', 'Ernakulam']

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
              src={project?.image || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
              alt="card-image"
            />
            <CardBody>
              <div className='capitalize flex justify-between items-center text-white text-opacity-90'>
                <p className='py-3 px-4 text-[.8rem] md:text-[1rem] border border-gray-800 rounded-[2rem]'>{project?.place}</p>
                <p className={`py-3 px-4 text-[.8rem] md:text-[1rem] border border-gray-800 rounded-[2rem] ${project?.type === "New Launch" ? "bg-[#343894]" : project?.type ==='Ready To Occupy' ? "bg-[#1D4734]": project?.type === "Under Construction" ? "bg-[#646464]" : "bg-red-500"}`}>{project?.type}</p>
              </div>
              <Typography variant="h5" color="white" className="mt-5 mb-3 text-opacity-90">
                {project?.name}
              </Typography>
              <Typography className=''>
              {project?.description.split(' ').slice(0, 20).join(' ')} ...
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