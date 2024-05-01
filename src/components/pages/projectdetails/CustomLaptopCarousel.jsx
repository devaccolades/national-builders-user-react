import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Icons
import RectangleBlue from '../../../assets/images/projectdetails/Rectangleblue.svg';
import RectangleWhite from '../../../assets/images/projectdetails/Rectanglewhite.svg';
import CustomCarousel from "../../customcarousel/CustomMobileCarousel";

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

const CustomLaptopCarousel = ({ data }) => {
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
    <>
      <Section className="hidden lg:block">
        <Main className="flex flex-col bg-gray-900 bg-opacity-50 rounded-[1.1rem] p-6">
          <div className="flex flex-col-reverse gap-6">
            <SliderContainer className="flex flex-row gap-6 overflow-hidden">
              <div>
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    src={data[activeImageIndex].image}
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
              </div>
              <div>
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    src={data[activeImageIndex + 1]?.image || data[0]?.image}
                    alt={data.name}
                    key={imageCount + 1}
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
              </div>
            </SliderContainer>
            <Thumbnails ref={thumbnailsRef} className="rounded-[1.1rem]"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
            >
              {data.map((image, index) => (
                <motion.img
                  key={index}
                  src={image.image}
                  alt=""
                  onClick={() => skipToImage(index)}
                  className={`rounded-[.6rem] cursor-pointer`}
                  initial={{ width: "6rem", maxWidth: "6rem" }}
                  animate={{
                    width: image.id === data[activeImageIndex].id ? "8.9rem" : "8rem",
                    maxWidth: image.id === data[activeImageIndex].id ? "8.9rem" : "8rem",
                    transition: { duration: 0.3 }
                  }}
                />
              ))}
            </Thumbnails>
          </div>
          <ArrowButtons className='flex justify-center items-center'>
            <div className='bg-black flex flex-row p-1 rounded-[1.1rem]'>
              <button className='bg-gray-900  p-3 rounded-full' onClick={() => swipeToImage(-1)}>
                <FaArrowLeft />
              </button>
              <div className='flex flex-row justify-center gap-1 px-2'>
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

    </>
  )
}

export default CustomLaptopCarousel;

const Section = styled.section``;

const Main = styled.div``;

const SliderContainer = styled.div`
  overflow-x: hidden !important;
  position: relative;  
  height: 32rem;
  width: 100%;
  @media (max-width: 1300px) {
    height: 27rem !important;
  }
  @media (max-width: 1024px) {
    height: 22rem !important;
  }

  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;

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
  gap: 0.8rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowButtons = styled.div``;
