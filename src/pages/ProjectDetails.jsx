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
import ContactSection from '../components/pages/projectdetails/ContactSection'


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
    iframelink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid",
    distance:[
      {distance_place:"Thiruvalla Railway Station:",distance:6.6},
      {distance_place:"Chengannur Railway Station:",distance:3.7},
      {distance_place:"KM Cherian Heart Speciality Hospital:",distance:2.2},
      {distance_place:"Thiruvalla Bus Stand:",distance:5.5},
      {distance_place:"Chengannur Bus Stand:",distance:3.6},
      {distance_place:"Pushpagiri Medical College:",distance:5.0},
      {distance_place:"Mammen Memorial Hospital:",distance:2.0},
      {distance_place:"Christian College:",distance:6.3},
      {distance_place:"Providence College Of Engineering:",distance:4.6},
      {distance_place:"Believers Hospital:",distance:10},
      {distance_place:"Mar Thoma College Thiruvalla:",distance:7.2},
    ]

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
      <LocationMap iframelink={data?.iframelink} distance={data.distance} />
      <ContactSection/>
      <CommonDiv />
    </>
  )
}

export default ProjectDetails