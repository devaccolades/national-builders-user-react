import React from 'react'
import { Helmet } from 'react-helmet'
import PageName from '../components/common/PageName'
import CommonDiv from '../components/common/CommonDiv'
import BlogsListing from '../components/pages/blogs/BlogsListing'

// After the backend configuration should be remove the images
import image1 from '../assets/images/blogs/image1.png'
import image2 from '../assets/images/blogs/image2.png'
import image3 from '../assets/images/blogs/image3.png'
import image4 from '../assets/images/blogs/image4.png'
import image5 from '../assets/images/blogs/image5.png'
import image6 from '../assets/images/blogs/image6.png'
import image7 from '../assets/images/blogs/image7.png'

function Blogs() {
  const animationConfig = {
    initial: {
      opacity: 0,
      y: 50,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };
  const data = [
    {image:image1,title:"Renting vs. Buying: What’s the Right Choice for You in Kochi?",date:'June, 11, 2021',description:"Real estate decisions often boil down to one fundamental question: to rent or to buy? Each avenue offers unique advantages, tailored to varying lifestyles and financial situations. Especially in the rapidly-evolving city of Kochi, the choice can be confusing and weigh heavily on a person looking to make this city their home. In this blog, we will discuss the benefits of renting vs. buying to help you, the prospective customer, decide what fits your lifestyle and budget."},
    {image:image2,title:"Why Kochi is the Ideal Location for Your Dream Home, Top Projects in Kochi",date:'June, 11, 2021',description:"Real estate decisions often boil down to one fundamental question: to rent or to buy? Each avenue offers unique advantages, tailored to varying lifestyles and financial situations. "},
    {image:image3,title:"Emerging Real Estate Hotspots in Kochi: Where to Buy Flats for Future Growth",date:'June, 11, 2021',description:"Real estate decisions often boil down to one fundamental question: to rent or to buy? Each avenue offers unique advantages, tailored to varying lifestyles and financial situations. "},
    {image:image4,title:"Affordable ready to move in flats in Kochi : Where to find them",date:'June, 11, 2021',description:"Real estate decisions often boil down to one fundamental question: to rent or to buy? Each avenue offers unique advantages, tailored to varying lifestyles and financial situations. "},
    {image:image5,title:"Affordable ready to move in flats in Kochi : Where to find them",date:'June, 11, 2021',description:"Real estate decisions often boil down to one fundamental question: to rent or to buy? Each avenue offers unique advantages, tailored to varying lifestyles and financial situations. "},
    {image:image6,title:"Why Kochi is the Ideal Location for Your Dream Home, Top Projects in Kochi",date:'June, 11, 2021',description:"Real estate decisions often boil down to one fundamental question: to rent or to buy? Each avenue offers unique advantages, tailored to varying lifestyles and financial situations. "},
    {image:image7,title:"Emerging Real Estate Hotspots in Kochi: Where to Buy Flats for Future Growth",date:'June, 11, 2021',description:"Real estate decisions often boil down to one fundamental question: to rent or to buy? Each avenue offers unique advantages, tailored to varying lifestyles and financial situations. "},

  ]
  return (
    <>
    <Helmet>
        <title>Blogs - Ready To Move Flats In Kochi | Best builders in Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
      <PageName text={"Blogs"} />
      <BlogsListing data={data} animationConfig={animationConfig}/>
      <CommonDiv />
    </>
  )
}

export default Blogs