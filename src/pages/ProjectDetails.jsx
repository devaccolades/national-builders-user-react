import React from 'react'
import { Helmet } from 'react-helmet'
import PageName from '../components/common/PageName'
import CommonDiv from '../components/common/CommonDiv'
import ProjectDetailsCarousel from '../components/pages/projectdetails/ProjectDetailsCarousel'
import OverViewAndAmenities from '../components/pages/projectdetails/OverViewAndAmenities'
import Specifications from '../components/pages/projectdetails/Specifications'
import FloorPlan from '../components/pages/projectdetails/FloorPlan'


// Demo Images after the backen should be remove
import image1 from '../assets/images/projectdetails/image1.jpg';
import image2 from '../assets/images/projectdetails/image2.jpg';
import image3 from '../assets/images/projectdetails/image3.jpg';
import image4 from '../assets/images/projectdetails/image4.jpg';
import image5 from '../assets/images/projectdetails/image5.jpg';
import image6 from '../assets/images/projectdetails/image6.jpg';
import image7 from '../assets/images/projectdetails/image7.jpg';
import image8 from '../assets/images/projectdetails/image8.jpg';
import image9 from '../assets/images/projectdetails/image9.jpg';
import image10 from '../assets/images/projectdetails/3bed.png';
import image11 from '../assets/images/projectdetails/2bed.jpg';
import image12 from '../assets/images/projectdetails/keyplan.jpg';
import LocationMap from '../components/pages/projectdetails/LocationMap'


function ProjectDetails() {
  const data = {
    name: 'National Shalom',
    images: [image1, image2, image3, image4, image5, image6, image7, image8, image9],
    location: 'Thiruvalla, Kerala',
    rera_number: 'K-RERA/PRJ/066/2021',
    description: "Spread over half an acre, Shalom has everything that takes for a life style you deserve. Shalom stands for convenience and luxury in tranquility. Shalom offers you the life style you deserve it’s time to indulge and embrace innovation. Book your apartment and a blissful future at National Shalom. Flats and apartments with world class standards and near to Thiruvalla town. Among this ambitious project’s major specialities is the convenient access it offers to Thiruvalla town which is just 4 kms away. This much sought-after town is also the district’s largest in terms of stature. A cut above the rest, Shalom offers an ingenious blend of greenery and luxury. The flats are now available for sale in Thiruvalla, make sure that you carve a space for yourself here.",
    bedrooms: [2, 3],
    units: 50,
    area: { from: 1328, to: 1519 },
    health_club: true,
    roof_top_party_area: true,
    childrens_play_area: true,
    wifi: true,
    generator_backup: true,
    gas_connection: true,
    intercom: true,
    landscaped_area: true,
    specifications: [
      { title: "Doors and Windows", description: 'Elegant teak wood main door. Moulded doors for interiors, UPVC frames and shutters with glass and MS grill for windows and ventilators. PVC laminated doors for toilets. Locks will be premium brand' },
      { title: "Flooring", description: 'Vitrified tiles 120cm x 80cm for the entire apartment except for toilets.Ceramic tiles for toilets' },
      { title: "Painting", description: 'Internal walls will be coated with two coats of putty, primer and plastic emulsion paint. Exterior wall will be coated with water proof paint. Main door will be melamine polish finish; internal doors will be finished with Jackson’s.' },
      { title: "Toilets", description: 'Concealed plumbing. Wash basin with granite counter, European closets (wall mounted cascade premium brand). CP fittings of premium quality brand. All bed rooms have concealed cistern and shower partition for master bedroom.' },
      { title: "Foundation and Structure", description: 'Deep pile foundation. Earthquake-resistant RCC Framed Structure (Columns, Beams, Lintels, Sunshades, Slabs, etc.) Walls with concrete blocks.' },
      { title: "Kitchen", description: 'Counter with granite top. Motif with pattern dadoo up to 60 cm height from the counter top. Granite counter with stainless steel sink with drain board.' },
      { title: "Sewage", description: 'Will be disposed to Septic Tank' },
      { title: "Water", description: 'KWA and Borewell.' },
    ],
    floorplan: [
      { title: '2 Bed Option', image: image10 },
      { title: '3 Bed Option', image: image11 },
      { title: 'key Plan', image: image12 },
    ],
    location_map:{distance:"",iframelink:""}

  };
  return (
    <>
      <Helmet>
        <title>National Shalom - Ready To Move Flats In Kochi | Best builders in Kochi</title>
        <meta
          name="description"
          content="At English Cafe, we welcome you to boost your confidence and communication skills through our expertly crafted lessons. Join us now!"
        ></meta>
      </Helmet>
      <PageName text={"Project details"} />
      <ProjectDetailsCarousel images={data?.images} name={data?.name} location={data?.location} reraNumber={data?.rera_number} />
      <OverViewAndAmenities
        description={data?.description}
        healthClub={data?.health_club}
        roofTopPartyArea={data?.roof_top_party_area}
        childrensPlayArea={data?.childrens_play_area}
        wifi={data?.wifi}
        generatorBackup={data?.generator_backup}
        gasConnection={data?.gas_connection}
        intercom={data?.intercom}
        landscapedArea={data?.landscaped_area}
        bedrooms={data?.bedrooms}
        units={data?.units}
        area={data?.area}
      />
      <Specifications specifications={data?.specifications} />
      <FloorPlan floorplan={data.floorplan} />
      <LocationMap />
      <CommonDiv />
    </>
  )
}

export default ProjectDetails