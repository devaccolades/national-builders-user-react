import React from 'react'
import { motion } from 'framer-motion'
// Image
import Award1 from '../../../assets/images/home/award1.png'
import Award2 from '../../../assets/images/home/award2.png'
import Award3 from '../../../assets/images/home/award3.png'
import Award4 from '../../../assets/images/home/award4.png'
import Award5 from '../../../assets/images/home/award5.png'
function AwardsAndRecognitions({animationConfig}) {

  return (
    <motion.div className='pt-20 py-56 mx-auto container' {...animationConfig}>
        <div className='flex justify-center items-center text-center text-3xl lg:text-6xl'>
          <p><span className='text-red-500'>Awards</span> and <span style={{
            backgroundImage: 'linear-gradient(to right, white, #64748b)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>Recognitions</span>
          </p>
        </div>
        <div className='w-full pt-10 lg:pt-28 flex justify-center items-center'>
          <img className='mx-2 lg:mx-12 w-2/12 lg:w-auto flex justify-center items-center' src={Award1} alt="" />
          <img className='mx-2 lg:mx-12 w-2/12 lg:w-auto flex justify-center items-center' src={Award2} alt="" />
          <img className='mx-2 lg:mx-12 w-2/12 lg:w-auto flex justify-center items-center' src={Award3} alt="" />
          <img className='mx-2 lg:mx-12 w-2/12 lg:w-auto flex justify-center items-center' src={Award4} alt="" />
        </div>
      </motion.div>
  )
}

export default AwardsAndRecognitions