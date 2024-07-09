import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardBody,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";

import AnimationButton from '../../common/Button';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetBranchDropDownApi, GetProjectApi } from '../../../services/services';
import NoDataFound from '../../common/NoDataFound';

function Projectslist({ animationConfig }) {
  const location = useLocation();
  const locations = location.state && location.state.location;
  const navigate = useNavigate()
  const [selected, setSelected] = useState('All')
  const [sort, setSort] = useState('All')
  const [options, setOptions] = useState([])
  const [projects, setProjects] = useState([])

  const [Filter, setFilter] = useState([])

  const Filtering = (selected, sort) => {
    setSelected(selected);
    setSort(sort);

    let filteredProjects = [...projects];

    if (selected !== "All") {
      filteredProjects = filteredProjects.filter((project) => project.company_branch.id === selected);
    }

    if (sort !== "All") {
      filteredProjects = filteredProjects.filter((project) => project.status === sort);
    }

    setFilter(filteredProjects);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetProjectApi()
        const { StatusCode, data } = res.data;
        if (StatusCode === 6000) {
          setProjects(data)
          setFilter(data);
        }
      } catch (error) {
        setProjects([])
      }
    };
    const fetchDropDown = async () => {
      try {
        const res = await GetBranchDropDownApi()
        const { StatusCode, data } = res.data;
        if (StatusCode === 6000) {
          setOptions(data)
        }
      } catch (error) {
        setOptions([])
      }
    };
    fetchData();
    fetchDropDown();
  }, [])
  useEffect(() => {
    Filtering(locations || 'All', sort);
  }, [locations, sort, projects]); 
  return (
    <Section className='mx-auto'>
      <motion.div className='lg:flex lg:justify-between'  {...animationConfig}>
        <Selection>
          <motion.p onClick={() => Filtering('All', sort)} className={`${selected === 'All' ? "text-black bg-white " : "opacity-90"}capitalize py-3 px-4  cursor-pointer border border-gray-800 hover:text-black rounded-[2rem] bg-gray-900 hover:bg-white`} whileHover={{ scale: 1.2 }}>
            All
          </motion.p>
          {options.map((option, index) => (
            <motion.p onClick={() => Filtering(option.id, sort)} className={`${selected === option.id ? "text-black bg-white " : "opacity-90"}capitalize py-3 px-4  cursor-pointer border border-gray-800 hover:text-black rounded-[2rem] bg-gray-900 hover:bg-white`} whileHover={{ scale: 1.2 }} key={index}>
              {option?.location}
            </motion.p>
          ))}
        </Selection>
        <div className='flex flex-row lg:gap-5 mt-10 lg:mt-0 justify-center items-center'>
          <Menu>
            <MenuHandler >
              <motion.button whileHover={{ scale: 1.2 }} className='border flex lg:justify-center w-full lg:w-auto justify-between items-center border-gray-800 p-2 bg-gray-800 bg-opacity-60 rounded-[.3rem] hover:bg-white hover:text-black'>
                <p className='px-5'>{sort}</p>
                <IoIosArrowDown />
              </motion.button>
            </MenuHandler>
            <MenuList className='bg-gray-800 text-md text-gray-100  opacity-60 border-0'>
              <MenuItem className='my-1' onClick={() => Filtering(selected, 'All')}>All</MenuItem>
              <MenuItem className='my-1' onClick={() => Filtering(selected, 'new launch')}>New Launch</MenuItem>
              <MenuItem className='my-1' onClick={() => Filtering(selected, 'ready to occupy')}>Ready To Occupy</MenuItem>
              <MenuItem className='my-1' onClick={() => Filtering(selected, 'under construction')}>Under Construction</MenuItem>
              <MenuItem className='my-1' onClick={() => Filtering(selected, 'sold out')}>Sold Out</MenuItem>
            </MenuList>
          </Menu>

        </div>
      </motion.div>
      <div>
        <Listing className='lg:ps-16 gap-[2rem] lg:gap-[3rem]' {...animationConfig}>

          {projects.length === 0 ? (
            <div className='flex justify-center items-center w-full'>
            <NoDataFound text={"Projects Not Found..."} />
            </div>
          ) : Filter.length === 0 ? (
            <div className='flex justify-center h-[20rem] items-center w-full'>
             <NoDataFound text={"No Matches Found ..."}/>
            </div>
          ) :
            Filter.map((project, index) => (
              <motion.div className='cursor-pointer' whileHover={{ scale: 1.1 }}>
                <Card key={index} className="sm:w-96 bg-gray-900 bg-opacity-60 ">
                  <img
                    className='mt-4 mx-4 lg:mt-5 lg:mx-5 rounded-[.8rem]'
                    src={project?.thumbnail || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
                    alt={project?.thumbnail_alt}
                  />
                  <CardBody>
                    <div className='capitalize flex justify-between items-center text-white text-opacity-90'>
                      <p className='py-3 px-4 text-[.8rem] md:text-[1rem] border border-gray-800 rounded-[2rem]'>{project?.company_branch.location}</p>
                      <p className={`py-3 px-4 text-[.8rem] md:text-[1rem] border border-gray-800 rounded-[2rem] ${project?.status === "new launch" ? "bg-[#343894]" : project?.status === 'ready to occupy' ? "bg-[#1D4734]" : project?.status === "under construction" ? "bg-[#646464]" : "bg-red-500"}`}>{project?.status}</p>
                    </div>
                    <Typography variant="h5" color="white" className="mt-5 mb-3 text-opacity-90">
                      {project?.name}
                    </Typography>
                    <Typography className=''>
                      {project?.description.split(' ').slice(0, 20).join(' ')} ...
                    </Typography>
                    <div className='w-full mt-5' onClick={() => navigate(`/projects/${project.slug}`)}>
                      <AnimationButton width='full' text={"View Property Details"} />
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
        </Listing>
      </div>
    </Section>
  )
}

export default Projectslist

const Section = styled.section`
width: 70%;
@media(max-width:1400px){
  width:90%;
}
`;

const Selection = styled.div`
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
  gap: 3rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  @media(max-width:1380px){
    justify-content: center;

}
`