import React from 'react'
import styled from 'styled-components'
import Text from '../../common/Text'
import { motion } from 'framer-motion'

function FloorPlan({ floorplan }) {
    return (
        <Section className='mx-auto container'>
            <Container className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] p-8'>
                <Heading>Floor Plans</Heading>
                {floorplan?.length > 0 ? (
                    <div className='bg-black rounded-[1.1rem] p-3 lg:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {floorplan.map((plan, index) => (
                            <>
                                {plan.image ? (
                                    <motion.div className='flex flex-col  gap-6 cursor-pointer' whileHover={{ scale: 1.1 }}>
                                        <img src={plan?.image} className='rounded-[1.1rem]' alt={plan?.name} />
                                        <Text align='center' text={plan.title}/>
                                    </motion.div>
                                ) : (
                                    <Text text={"Image Not Uploaded"} align='center' />
                                )}
                            </>
                        ))}
                    </div>
                ) : (
                    <Text align='center' text={"Floor Plans Not Found"} />
                )}

            </Container>
        </Section>
    )
}

export default FloorPlan


const Section = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
    @media(max-width:1400px){
      width:90%; 
 
}`

const Container = styled.div``

const Heading = styled.p`
    font-size: 1.6rem;
    padding-bottom: 0.6rem;
    @media(max-width:1024px){
        text-align: center;
        font-size: 1.6rem;
}`