import { motion } from 'framer-motion'
import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

import Video from '../../../assets/images/home/video1.mp4'

function VideoTag({animationConfig}) {

  return (
    <Section className='h-screen flex justify-center items-center px-5 lg:px-0 mx-auto container mt-64 ' {...animationConfig}>
      <video controls className='w-full rounded-[2rem] lg:rounded-[2rem]'>
  <source src={Video} type="video/mp4" autoCorrect='' />
  Your browser does not support the video tag.
</video>

    </Section>
  )
}

export default VideoTag

const Section = styled.div``

const PlayerMain = styled.div`
  height: 77vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledReactPlayer = styled(ReactPlayer)`
`
