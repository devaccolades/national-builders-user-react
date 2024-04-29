import React from 'react'
import styled from 'styled-components';
import { Typography } from '@material-tailwind/react';

// Icons
import facebookIcon from '../../../assets/icons/facebook.svg'
import twitterIcon from '../../../assets/icons/twitter.svg'
import linkedInIcon from '../../../assets/icons/linkedin.svg'
import linkIcon from '../../../assets/icons/links.svg'

// aftr backend should be remove
import image1 from '../../../assets/images/blogs/image1.png'
import Text from '../../common/Text';

function BlogDetailsCom() {
  return (
    <Section className='container mx-auto flex flex-col gap-5 lg:gap-10'>
      <Backgroundimage className=''>
        <img src={image1} className='h-full w-full rounded-[1.1rem]' alt="" />
      </Backgroundimage>
      <Details className='flex flex-col lg:flex-row gap-10'>
        <div className='w-full flex flex-col-reverse lg:flex-row gap-10'>
          <Icons className='w-full lg:w-1/12 flex justify-center lg:justify-start flex-row lg:flex-col gap-5'>
            <div className='bg-gray-900 flex justify-center items-center rounded-[1.1rem]'>
              <img src={facebookIcon} className='m-5' alt="" />
            </div>
            <div className='bg-gray-900 flex justify-center items-center rounded-[1.1rem]'>
              <img src={twitterIcon} className='m-5' alt="" />
            </div>
            <div className='bg-gray-900 flex justify-center items-center rounded-[1.1rem]'>
              <img src={linkedInIcon} className='m-5' alt="" />
            </div>
            <div className='bg-gray-900 flex justify-center items-center rounded-[1.1rem]'>
              <img src={linkIcon} className='m-5' alt="" />
            </div>
          </Icons>
          <TextContent className='bg-gray-900 w-full rounded-[1.1rem] p-6'>
            <div className='flex flex-row'>
              <p className='text-gray-500 p-2 border border-gray-600 rounded-[2rem]'>June 7,2021</p>
            </div>
            <Typography variant="h5" color="white" className="mt-5 mb-3 text-opacity-90">
              Renting vs. Buying: What’s the Right Choice for You in Kochi?
            </Typography>
            <Text text={"Real estate decisions often boil down to one fundamental question: to rent or to buy? Each avenue offers unique advantages, tailored to varying lifestyles and financial situations. Especially in the rapidly-evolving city of Kochi, the choice can be confusing and weigh heavily on a person looking to make this city their home. In this blog, we will discuss the benefits of renting vs. buying to help you, the prospective customer, decide what fits your lifestyle and budget."} />
            <Typography variant="h5" className="mt-5 mb-3 text-gray-400 text-opacity-90">
              Renting
            </Typography>
            <Text text={"Renting provides a level of flexibility unparalleled in homeownership. It’s a practical choice for those seeking short-term stays or uncertain about settling in a specific location. With renting, maintenance concerns often fall on the landlord, easing the responsibility on tenants. Flexibility to relocate without the hassle of selling a property is a significant advantage. Absolutely, let’s highlight the advantages of both renting and buying in the real estate market:"} />
            <Typography variant="h5" className="mt-5 mb-3 text-gray-400 text-opacity-90">
              Advantages of Renting:
            </Typography>
            <Text align='' text={"Flexibility: Renting provides flexibility, allowing individuals to easily relocate or change accommodations without the commitments of homeownership."} />
            <Text align='' mt='3' text={"Lower Initial Costs: Renting typically requires lower initial costs compared to buying a property, as it often involves smaller upfront expenses like security deposits and monthly rent."} />
            <Text align='' mt='3' text={"Limited Responsibility: Tenants are usually not responsible for major maintenance or repair costs. These obligations often fall on the landlord, freeing renters from some financial burdens. "} />
            <Text align='' mt='3' text={"Testing the Waters: Renting allows individuals to test out different neighbourhoods or property types before committing to a long-term investment, offering a chance to explore without a permanent commitment."} />
            <Typography variant="h5" className="mt-5 mb-3 text-gray-400 text-opacity-90">
              Buying
            </Typography>
            <Text align='' text={"On the other hand, buying a home represents stability and long-term investment. Homeownership builds equity over time, providing a sense of ownership and stability. It allows for personalisation and the freedom to make structural changes. Moreover, it acts as a hedge against rising rental costs in the long run."} />

            <Typography variant="h5" className="mt-5 mb-3 text-gray-400 text-opacity-90">
              Advantages of Buying:
            </Typography>
            <Text align='' text={"Equity and Investment: Homeownership builds equity over time, representing a long-term investment. Property value appreciation can result in financial gains. "} />
            <Text align='' mt='3' text={"Stability and Control: Homeowners have control over their living space. They can personalise and modify their home to suit their preferences without seeking permission."} />
            <Text align='' mt='3' text={"Fixed Payments: Fixed-rate mortgages provide stability, ensuring that monthly payments remain consistent over the loan’s duration, unlike fluctuating rental prices."} />
            <Text align='' mt='3' text={"Sense of Ownership: Owning a home provides a sense of stability, belonging, and pride in ownership, contributing to a stronger connection to the community and neighbourhood."} />
            <Typography variant="h5" className="mt-5 mb-3 text-gray-400 text-opacity-90">
              Who can help you decide whether to rent/buy in Kochi?
            </Typography>
            <Text align='' text={"National Builders’ ongoing projects and ready to move in flats in Kochi encompass both ends of this spectrum, accommodating the needs of renters and potential homeowners."} />
            <Text align='' mt='3' text={"For those considering renting, National Builders’ ongoing projects offer a range of rental options. These properties boast quality living spaces with modern amenities, providing renters the comfort and convenience they seek without the commitment of ownership."} />
            <Text align='' mt='3' text={"Simultaneously, for those inclined towards homeownership, National Builders’ flats for sale in Kochi present an enticing prospect. These homes, built with precision and quality craftsmanship, cater to individuals or families seeking a permanent abode. With a focus on sustainable practices and innovative design, these properties signify not just homes but investments in the future."} />

            <Typography variant="h5" className="mt-5 mb-3 text-gray-400 text-opacity-90">
              Finding Your Fit
            </Typography>
            <Text align='' text={"Renting versus buying is a decision deeply rooted in personal circumstances and aspirations. National Builders, with their diverse portfolio, aim to meet the varied needs of individuals and families, ensuring that whether one seeks a temporary sanctuary or a permanent haven, there’s a home crafted just for them."} />
            <Text align='' mt='2' text={"Ultimately, the choice between renting and buying hinges on individual preferences, financial capabilities, and future plans. Regardless, National Builders stands as a reliable partner, offering options that align with diverse aspirations in the ever-evolving real estate landscape."} />
          </TextContent>
        </div>
        <div className='w-4/12 rounded-[1.1rem]'>
          fdasfdsafda
        </div>

      </Details>
    </Section>
  )
}

export default BlogDetailsCom

const Section = styled.section`
margin-top: 4rem;
margin-bottom: 4rem;
@media(max-width:1400px){
  width:90%;
}
`;
const Backgroundimage = styled.div`

`

const Details = styled.div``

const Icons = styled.div``

const TextContent = styled.div``