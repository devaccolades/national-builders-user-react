import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

import Video from '../../../assets/images/home/video1.mp4'

function VideoTag({ animationConfig }) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  useEffect(()=>{
    if (!isIOS){
      document.getElementById("background-video").play();
    }
    document.getElementById("background-video").play();
  },[])
  return (
    <Section className='mx-auto container' {...animationConfig}>
      <video
      id="background-video"
      autoplay
      loop
      muted
      playsinline
      controls
       className='w-full rounded-[1.1rem] lg:rounded-[2rem]'>
        <source src={Video} type="video/mp4" autoCorrect='' />
        Your browser does not support the video tag.
      </video>

    </Section>
  )
}

export default VideoTag

const Section = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
@media(max-width:1400px){
  width:90%;
}
@media(max-width:768px){
  margin-top: 25rem;
  margin-bottom: 4rem;

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
