import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, CardBody, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';
import AnimationButton from '../../common/Button';
import Text from '../../common/Text'
// Icons
import { IoIosArrowDown } from 'react-icons/io';
import areaIcon from '../../../assets/icons/area.svg'
import rupeesIcon from '../../../assets/icons/rupee.svg'
import { EnquireModal } from '../../modal/EnquireModal';
function RentalsList({ animationConfig, data }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const [selected, setSelected] = useState('All')
    const [sort, setSort] = useState('All')
    const [Filter, setFilter] = useState(data)
    const [rentalsData, setRentalData] = useState({})

    const options = ['All', 'Navi Mumbai', 'Thane', 'Kochi', 'Thiruvalla', 'Ernakulam']

    const Filtering = (selected, sort) => {
        setSelected(selected);
        setSort(sort);
        let filteredrentals = [...data];

        if (selected !== "All") {
            filteredrentals = filteredrentals.filter((rental) => rental.place === selected);
        }

        if (sort !== "All") {
            filteredrentals = filteredrentals.filter((rental) => rental.type === sort);
        }

        setFilter(filteredrentals);
    };
    return (
        <Section className='container mx-auto lg:-mt-20'>
            <motion.div className='lg:flex lg:justify-between'  {...animationConfig}>
                <Selection>
                    {options.map((option, index) => (
                        <motion.p onClick={() => Filtering(option, sort)} className={`${selected === option ? "text-black bg-white " : "opacity-90"}capitalize py-3 px-4  cursor-pointer border border-gray-800 hover:text-black rounded-[2rem] bg-gray-900 hover:bg-white`} whileHover={{ scale: 1.2 }} key={index}>
                            {option}
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
                            <MenuItem className='my-1' onClick={() => Filtering(selected, 'Commercial')}>Commercial</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </motion.div>
            <Listing {...animationConfig} className={`grid ${Filter.length > 0 ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1"} gap-6 lg:gap-10`}>
                {Filter.length === 0 ? (
                    <div className='flex justify-center items-center w-full text-gray-600'>
                        <p className='text-center'>NO MATCHES FOUND ...</p>
                    </div>
                ) :
                    Filter.map((rental, index) => (
                        <motion.div className='cursor-pointer' whileHover={{ scale: 1.1 }}>
                            <Card key={index} className="bg-gray-900 bg-opacity-60 p-4 md:p-6 flex flex-col md:flex-row w-full">
                                <img
                                    className='md:w-5/12 rounded-[.8rem]'
                                    src={rental?.image || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
                                    alt="card-image"
                                />
                                <CardBody className='w-full lg:-mt-5'>
                                    <div className='capitalize flex justify-between items-center text-white text-opacity-90'>
                                        <p className='py-3 px-4 text-[.8rem] md:text-[1rem] border border-gray-800 rounded-[2rem]'>{rental?.place}</p>
                                        <p className={`py-3 px-4 text-[.8rem] md:text-[1rem] border border-gray-800 rounded-[2rem] bg-[#17458B]`}>{rental?.type}</p>
                                    </div>
                                    <Typography variant="h5" color="white" className="mt-5 mb-3 text-opacity-90">
                                        {rental?.name}
                                    </Typography>
                                    <div className='grid grid-cols-2 gap-5'>
                                        <div>
                                            <div className='flex flex-row gap-2 items-center'>
                                                <img src={areaIcon} className='' alt="" />
                                                <p className='text-[1.1rem] lg:text-[1.3rem] text-gray-600'>Area</p>
                                            </div>
                                            <p className='text-[1.1rem] lg:text-[1.3rem] pt-2 text-gray-600'>{`${rental.area} sq. ft.`}</p>
                                        </div>

                                        <div>
                                            <div className='flex flex-row gap-2 items-center'>
                                                <img src={rupeesIcon} className='' alt="" />
                                                <p className='text-[1.1rem] lg:text-[1.3rem] text-gray-600'>Area</p>
                                            </div>
                                            <p className='text-[1.2rem] pt-2 text-gray-600'>{`${rental.price}/sqft + MMc`}</p>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-row  justify-end items-center -mb-3 mt-6' onClick={() => { setRentalData(rental), handleOpen(!open) }}>
                                        {window.innerWidth < 768 ? (
                                            <AnimationButton width='full' text={"Enquire now"} />
                                        ) :
                                            (
                                                <AnimationButton width='' text={"Enquire now"} />
                                            )}
                                    </div>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
            </Listing>
            <EnquireModal open={open} handleOpen={handleOpen} rentalsData={rentalsData} />
        </Section>
    )
}

export default RentalsList

const Section = styled.section`
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

  margin-top: 4rem;
  margin-bottom: 4rem;
  @media(max-width:1380px){
    justify-content: center;

}
`