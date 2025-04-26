import React from "react";


import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
const Slide = ({ image, text1, text2,text3}) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[32rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-gray-900/70 flex justify-start">
        <div className=" text-white md:px-10 flex-1 mt-36 font">
            <h1 className="md:px-12">{text3}</h1>
          <motion.h1
          
            className="text-[#b1d6f2] text-start text-3xl  lg:text-5xl font-bold "
          >
            {text1}
          </motion.h1>

          <h1 className="text-white text-start px-5 my-5">{text2}</h1>
        </div>
      </div>
    </div>
  );
};

export default Slide;
