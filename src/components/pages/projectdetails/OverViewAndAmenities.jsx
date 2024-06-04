import React from 'react'
import styled from 'styled-components'
import Text from '../../common/Text'
import { motion } from 'framer-motion'

// Icons
import bedRommsIcon from '../../../assets/icons/bedrooms.svg'
import unitsIcon from '../../../assets/icons/units.svg'
import areaIcon from '../../../assets/icons/area.svg'


function OverViewAndAmenities({ animationConfig, data, amenities }) {
    return (
        <Section className='mx-auto'>
            <OverView className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] p-5 lg:p-8' {...animationConfig}>
                <Heading>OverView</Heading>
                {data.description ? (
                    <Text text={data.description} />
                ) : (
                    <Text align='center' text={"Description Not Found"} />
                )}
                <div className='flex flex-row justify-between flex-wrap mt-10'>
                   {data?.bedrooms && <div>
                        <div className='flex flex-row gap-3 items-center pb-4'>
                            <img src={bedRommsIcon} alt="icons" />
                            <Text text={"Bedrooms"} />
                        </div>
                        <Text align='center' text={data?.bedrooms} />
                    </div>}
                    {data?.units &&<div>
                        <div className='flex flex-row gap-3 items-center pb-4'>
                            <img src={unitsIcon} className='-mt-[0.5rem]' alt="icons" />
                            <Text text={"Units"} />
                        </div>
                        <Text align='center' text={data?.units} />
                    </div>}
                    <div className='mt-5 md:mt-0'>
                        {data?.area_from && <div className='flex flex-row gap-3 items-center pb-4'>
                            <img src={areaIcon} className='-mt-[0.5rem]' alt="icons" />
                            <Text text={"Area"} />
                        </div>}
                       {data?.area_to && <div className='flex items-center justify-center'>
                            <Text text={data?.area_from} />
                            <hr className='w-5 mx-2' />
                            <Text text={`${data?.area_to} sq. ft.`} />
                        </div>}
                    </div>
                </div>
            </OverView>
            <Amenities className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] p-5 lg:p-8 md:pb-20' {...animationConfig}>
                <Heading>Amenities</Heading>
                {amenities.length === 0 ? (<div className='flex lg:-mt-10 justify-center items-center h-full'>
                    <Text align='center' text={"Description Not Found"} />
                </div>) : (
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 h-auto max-h-full mt-2'>
                        {amenities.map((amenity,index)=>(
                            <div >
                            <img src={amenity?.logo} alt={amenity?.image_alt} />
                            <Text align='' mt='3' text={`${amenity?.title}`} />
                        </div>
                        ))}
                    </div>
                )}
            </Amenities>
        </Section>
    )
}

export default OverViewAndAmenities

const Section = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
flex-direction: row;
gap: 2rem;
width: 70%;
    @media(max-width:1400px){
      width:90%; 
      @media(max-width:1024px){
        flex-direction: column;
}
}`

const OverView = styled(motion.div)`
    width: 100%;
`

const Amenities = styled(motion.div)`
    width: 100%;

`

const Heading = styled.p`
    font-size: 1.6rem;
    padding-bottom: 0.6rem;
    @media(max-width:1024px){
        text-align: center;
        font-size: 1.6rem;
}
@media(max-width:425px){
    font-size: 1.6rem;
}
@media (max-width: 375px) {
    font-size: 1.6rem;
    font-weight: bold;
}
`;