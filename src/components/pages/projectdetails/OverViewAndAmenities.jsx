import React from 'react'
import styled from 'styled-components'
import Text from '../../common/Text'

// Icons
import bedRommsIcon from '../../../assets/icons/bedrooms.svg'
import unitsIcon from '../../../assets/icons/units.svg'
import areaIcon from '../../../assets/icons/area.svg'
import healthIcon from '../../../assets/icons/helth.svg'
import roofpartyIcon from '../../../assets/icons/rooftoppartyarea.svg'
import childrensareaIcon from '../../../assets/icons/childrensplayarea.svg'
import wifiIcon from '../../../assets/icons/wifi.svg'
import generatoIcon from '../../../assets/icons/generator.svg'
import gasIcon from '../../../assets/icons/gas.svg'
import intercomIcon from '../../../assets/icons/intercom.svg'
import landscapareaIcon from '../../../assets/icons/landscaped.svg'


function OverViewAndAmenities({
    description,
    healthClub,
    roofTopPartyArea,
    childrensPlayArea,
    wifi,
    generatorBackup,
    gasConnection,
    intercom,
    landscapedArea,
    bedrooms,
    units,
    area
}) {
    return (
        <Section className='container mx-auto'>
            <OverView className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] p-8'>
                <Heading>OverView</Heading>
                {description ? (
                    <Text text={description} />
                ) : (
                    <Text align='center' text={"Description Not Found"} />
                )}
                <div className='flex flex-row justify-between flex-wrap mt-10'>
                    <div>
                        <div className='flex flex-row gap-3 items-center pb-4'>
                            <img src={bedRommsIcon} alt="icons" />
                            <Text text={"Bedrooms"} />
                        </div>
                        <Text text={bedrooms.join(', ')} />
                    </div>
                    <div>
                        <div className='flex flex-row gap-3 items-center pb-4'>
                            <img src={unitsIcon} className='-mt-[0.5rem]' alt="icons" />
                            <Text text={"Units"} />
                        </div>
                        <Text text={units} />
                    </div>
                    <div className='mt-5 md:mt-0'>
                        <div className='flex flex-row gap-3 items-center pb-4'>
                            <img src={areaIcon} className='-mt-[0.5rem]' alt="icons" />
                            <Text text={"Area"} />
                        </div>
                        <div className='flex items-center'>
                            <Text text={area.from} />
                            <hr className='w-5 mx-2' />
                            <Text text={`${area.to} sq. ft.`} />
                        </div>
                    </div>
                </div>

            </OverView>
            <Amenities className='bg-gray-900 bg-opacity-60 rounded-[1.1rem] p-8 md:pb-20'>
                <Heading>Amenities</Heading>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 h-full mt-2'>
                    {healthClub && (<div className=''>
                        <img src={healthIcon} alt="" />
                        <Text align='' mt='3' text={"Health Club"} />
                    </div>)}
                    {roofTopPartyArea && (<div className=''>
                        <img src={roofpartyIcon} alt="" />
                        <Text align='' mt='3' text={"Roof Top Party Area"} />
                    </div>)}
                    {childrensPlayArea && (<div className=''>
                        <img src={childrensareaIcon} alt="" />
                        <Text align='' mt='3' text={"Children's Play Area"} />
                    </div>)}
                    {wifi && (<div className=' '>
                        <img src={wifiIcon} alt="" />
                        <Text align='' mt='3' text={"WiFi Enabled Visitors Lounge"} />
                    </div>)}
                    {generatorBackup && (<div className=''>
                        <img src={generatoIcon} alt="" />
                        <Text align='' mt='3' text={"Generator Back Up"} />
                    </div>)}
                    {gasConnection && (<div className=''>
                        <img src={gasIcon} alt="" />
                        <Text align='' mt='3' text={"Centralised Gas Connection"} />
                    </div>)}
                    {intercom && (<div className=''>
                        <img src={intercomIcon} alt="" />
                        <Text align='' mt='3' text={"Intercom"} />
                    </div>)}
                    {landscapedArea && (<div className=''>
                        <img src={landscapareaIcon} alt="" />
                        <Text align='' mt='3' text={"Landscaped Area"} />
                    </div>)}
                </div>
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
    @media(max-width:1400px){
      width:90%; 
      @media(max-width:1024px){
        flex-direction: column;
}
}`

const OverView = styled.div`
    width: 100%;
`

const Amenities = styled.div`
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