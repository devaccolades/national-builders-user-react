import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

function CounterAnimation({value}) {
  const countRef = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
      const observer = new IntersectionObserver(handleIntersection, {
          root: null,
          rootMargin: '0px',
          threshold: 0.5, 
      });

      observer.observe(countRef.current);

      return () => observer.disconnect();
  }, []);

  useEffect(() => {
      if (countRef.current && countRef.current.isIntersecting) {
          const controls = animate(count, value, { duration: 2 });

          return () => controls.stop();
      }
  }, [value]);

  const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
          const controls = animate(count, value, { duration: 2 });

          return () => controls.stop();
      }
  };
  return (
    <motion.p className='text-5xl lg:text-6xl my-4' ref={countRef}>{rounded}</motion.p>
  )
}

export default CounterAnimation