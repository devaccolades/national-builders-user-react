import React from "react";
import {
  Dialog,
  Typography,
} from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";


export function DirectorModal({ open, handleOpen, data }) {
  return (
    <>
      <Dialog size="xl" className="bg-black p-5 lg:p-10 text-white rounded-[2rem] border border-gray-800 h-[93vh] md:h-[93vh] lg:h-auto overflow-y-scroll lg:overflow-y-hidden" open={open} handler={handleOpen}>
        <div className="lg:hidden block sticky top-0">
          <div className="w-full flex justify-end items-start mb-4 ">
            <button onClick={handleOpen} className="px-2 py-2 bg-black font-bold bg-opacity-90 opacity-65 rounded-[3rem] border border-gray-600"> <IoMdClose /></button>
          </div>
        </div>
        <div className="flex justify-center ">
          <img src={data.image} className="lg:w-full xl:w-3/12 lg:pe-5 pb-5" alt="" />
          <div className="hidden lg:block">
            <div className="grid grid-rows-[10rem,1fr] w-full">
              <div className="w-full flex justify-end items-start">
                <button onClick={handleOpen} className="px-9 py-3 font-bold opacity-65 rounded-[3rem] border border-gray-400">Back</button>
              </div>
              <div className="">
                <Typography variant="h5" color="blue-gray" className="opacity-90 mb-2 text-3xl text-white ">
                  {data.name}
                </Typography>
                <p className="text-xl opacity-85">
                  {data.position}
                </p>
                <hr className="my-5 opacity-85" />
                <p className="opacity-50 text-xl text-justify">
                {data?.explain1}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden block text-center">
          <Typography variant="h5" color="blue-gray" className="opacity-90 mb-2 text-3xl text-white ">
            {data.name}
          </Typography>
          <p className="text-xl opacity-85">
            {data.position}
          </p>
          <hr className="my-5 opacity-85" />
          <p className="opacity-50 text-xl text-justify">
          {data?.explain1}
          </p>
        </div>
        <div className="opacity-50 text-xl text-justify">
          <p className="mt-1">{data?.explain2}</p>
          <p className="mt-5">{data?.explain3}</p>
        </div>
        <div className="lg:hidden block">
          <div className="w-full flex justify-end items-start mt-4">
            <button onClick={handleOpen} className="px-6 py-2 font-bold opacity-65 rounded-[3rem] border border-gray-800">Back</button>
          </div>
        </div>
      </Dialog>
    </>
  );
}