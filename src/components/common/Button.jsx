import { motion } from 'framer-motion';
import React, { useState } from 'react'

import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import styled from 'styled-components';

function AnimationButton({text}) {
    const [hovered, setHovered] = useState(false);

  return (
    <Buttons className='h-auto mt-14 hover:bg-white hover:text-red-500 lg:text-xl rounded-full flex p-3 lg:p-4'
    whileHover={{ scale: 1.1 }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
    {text} {hovered ? (
      <GoArrowRight className={`ms-2 lg:ms-4 p-1 h-7 md:h-8 w-7 md:w-8 bg-red-500 text-white rounded-full icon-transition`} />
    ) : (
      <GoArrowUpRight className={`ms-2 lg:ms-4 p-1 h-7 md:h-8 w-7 md:w-8 bg-red-500 rounded-full icon-transition`} />
    )}
  </Buttons>
  )
}

export default AnimationButton

const Buttons = styled(motion.button)`
  background-color: #343894;
`;