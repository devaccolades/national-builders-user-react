import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

function VideoTag({ animationConfig, data }) {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  useEffect(() => {
    if (!isIOS) {
      if (isMobile){
        document.getElementById("mobile-background-video").play();
      }else{
      document.getElementById("desktop-background-video").play();
      }
    }
    // document.getElementById("background-video").play();
  }, [])
  return (
    <Section className='mx-auto' {...animationConfig}>
      {isMobile ? (<video
        id="mobile-background-video"
        autoplay
        loop
        muted
        playsinline
        controls
        className='w-full rounded-[1.1rem] lg:rounded-[2rem]'>
        <source src={data?.mobile_video} type="video/mp4" autoCorrect='' />
        Your browser does not support the video tag.
      </video>) : (
        <video
          id="desktop-background-video"
          autoplay
          loop
          muted
          playsinline
          controls
          className='w-full rounded-[1.1rem] lg:rounded-[2rem]'>
          <source src={data?.desktop_video} type="video/mp4" autoCorrect='' />
          Your browser does not support the video tag.
        </video>
      )}

    </Section>
  )
}

export default VideoTag

const Section = styled(motion.div)`
margin-top: 10rem;
margin-bottom: 5rem;
width: 70%;
@media(max-width:1400px){
  width:90%;
}
@media(max-width:768px){
  margin-top: 29rem !important;
  margin-bottom: 4% !important;

}
`;


const PlayerMain = styled.div`
  height: 77vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledReactPlayer = styled(ReactPlayer)`
`
