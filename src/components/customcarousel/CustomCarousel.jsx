import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Icons
import RectangleBlue from '../../assets/images/projectdetails/Rectangleblue.svg';
import RectangleWhite from '../../assets/images/projectdetails/Rectanglewhite.svg';
import { Typography } from "@material-tailwind/react";

const sliderVariants = {
  incoming: direction => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: direction => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
}

const sliderTransition = {
  ease: "linear",
  duration: 1,
}

const CustomCarousel = ({ data }) => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const activeImageIndex = wrap(0, data.length, imageCount);
  const thumbnailsRef = useRef(null);

  const swipeToImage = swipeDirection => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
    centerThumbnail(swipeDirection);
  };

  const centerThumbnail = swipeDirection => {
    const thumbnailsContainer = thumbnailsRef.current;
    const thumbnailWidth = thumbnailsContainer.scrollWidth / data.length;
    const scrollAmount = activeImageIndex * thumbnailWidth;

    const directionToScroll = swipeDirection > 0 ? 'right' : 'left';

    if ((activeImageIndex === data.length - 1 && swipeDirection > 0) || (activeImageIndex === 0 && swipeDirection < 0)) {
      thumbnailsContainer.scrollLeft = directionToScroll === 'right' ? 0 : thumbnailsContainer.scrollWidth;
    } else {
      if (directionToScroll === 'right') {
        thumbnailsContainer.scrollLeft = scrollAmount - thumbnailsContainer.offsetWidth / 2 + thumbnailWidth / 3 + 100;
      } else {
        thumbnailsContainer.scrollLeft = scrollAmount - thumbnailsContainer.offsetWidth / 2 + thumbnailWidth / 3 - 100;
      }
    }
  };


  const dragEndHandler = dragInfo => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = imageId => {
    setImageCount([imageId, imageId - activeImageIndex]);
    centerThumbnail(imageId - activeImageIndex);
  };

  return (
    <Section>
      <Main className="grid grid-rows-[1fr,3rem,8rem,2rem] bg-gray-900 bg-opacity-90 rounded-[1.1rem] p-5 gap-5">
        <SliderContainer>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img src={data[activeImageIndex].image}
              alt={data.name}
              key={imageCount}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="image rounded-[1.1rem]"
            />
          </AnimatePresence>
        </SliderContainer>
        <div className="flex justify-center items-center">
          <Typography variant="h6" color="white" className=" text-center text-opacity-90">
            {data[activeImageIndex].name}
          </Typography>
        </div>
        <Thumbnails ref={thumbnailsRef} className="rounded-[1.1rem]">
          {data.map((image, index) => (
            <motion.img
              key={index}
              src={image.image}
              alt=""
              onClick={() => skipToImage(index)}
              className={`rounded-[.6rem] cursor-pointer`}
              initial={{ width: "6rem", maxWidth: "6rem" }}
              animate={{
                width: image.id === data[activeImageIndex].id ? "7rem" : "6rem",
                maxWidth: image.id === data[activeImageIndex].id ? "7rem" : "6rem",
                transition: { duration: 0.3 }
              }}
            />
          ))}
        </Thumbnails>
        <ArrowButtons className='flex justify-center items-center'>
          <div className='bg-black flex flex-row p-1 rounded-[1.1rem]'>
            <button className='bg-gray-900  p-3 rounded-full' onClick={() => swipeToImage(-1)}>
              <FaArrowLeft />
            </button>
            <div className='flex flex-row justify-center gap-1 md:px-2'>
              {data.map((image, index) => (
                <img key={index} src={(data[activeImageIndex].id === image.id) ? RectangleBlue : RectangleWhite} className='w-1/12 md:w-2/12' alt="" />
              ))}
            </div>
            <button className='bg-gray-900  p-3 rounded-full' onClick={() => swipeToImage(1)}>
              <FaArrowRight />
            </button>
          </div>
        </ArrowButtons>
      </Main>
    </Section>
  )
}

export default CustomCarousel;

const Section = styled.section``;

const Main = styled.div``;

const SliderContainer = styled.div`
    overflow-x: hidden !important;
  position: relative;  
  height: 32rem;
  @media (max-width: 425px) {
      height: 22rem !important;
  }
    @media (max-width: 375px) {
      height: 18rem !important;
  }

  .image {
    position: absolute;
    height: auto;
    width: auto;

    @media only screen and (max-width: 375px) {
      width: 286px;
      height: 286px;
    }

    &:hover {
      cursor: grab;
    }

    &:active {
      cursor: grabbing;
    }
  }
`;

const Thumbnails = styled.div`
  padding: 0.9rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: black;
  gap: 0.6rem;
`;

const ArrowButtons = styled.div``