import React, { useEffect, useState } from 'react'
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

// Images
import logo from '../../assets/images/logo/national-builders-logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;


  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-10 xl:gap-20">
      <Typography
        as="li"
        variant="small"
        className={`p-1 ${currentPath === '/' ? 'font-bold' : 'font-normal'} text-xl text-white hidden lg:block`}
       >
        <Link to={'/'} className="flex items-center">
          Home
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        className={`p-1 ${currentPath === '/project' ? 'font-bold' : 'font-normal'} text-xl text-white hidden lg:block `}
      >
        <Link to={'/project'} className="flex items-center">
          Project
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        className={`p-1 ${currentPath === '/rentals' ? 'font-bold' : 'font-normal'} text-xl text-white hidden lg:block `}
      >
        <Link to={'/rentals'} className="flex items-center">
          Rentals
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className={`p-1 ${currentPath === '/about' ? 'font-bold' : 'font-normal'} text-xl text-white hidden lg:block`} 
      >
        <Link to={'/about'} className="flex items-center">
          About
        </Link>
      </Typography>


      <Menu>
        <MenuHandler onClick={() => setOpenMenu(!openMenu)}>
          <Typography className='cursor-pointer'>
            {openMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}

          </Typography>
        </MenuHandler>
        <MenuList className='bg-black border border-gray-900 text-lg text-white text-opacity-50 rounded-xl'>
          <MenuItem className='my-1'>Project</MenuItem>
          <MenuItem className='my-1'>Rentals</MenuItem>
          <MenuItem className='my-1'>Testimontials</MenuItem>
          <MenuItem className='my-1'>Blogs</MenuItem>
       <MenuItem className='my-1' onClick={()=>navigate('/about')}>About</MenuItem>
          <MenuItem className='my-1' onClick={()=>navigate('/contact')}>Contact</MenuItem>
        </MenuList>
      </Menu>

    </ul>
  );

  return (
    <div className={`top-0 sticky z-10 w-full h-full overflow-x-hidden bg-transparent`}>
      <Navbar className={` border-0 bg-transparent z-10 h-max max-w-full rounded-none px-4 py-6  lg:px-8 lg:py-8`}>
        <motion.div className="flex ps-16 items-center justify-between text-blue-gray-900"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 2 }}
        >
        <motion.img 
          src={logo} 
          className='lg:w-[15rem]' 
          alt="logo" 
          onClick={() => navigate('/')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5 }}
        />
           <div className="flex items-center gap-4">
            <div className="mr-4 xl:mr-32">{navList}</div>
          </div>
        </motion.div>
      </Navbar>
    </div>
  )
}

export default Header