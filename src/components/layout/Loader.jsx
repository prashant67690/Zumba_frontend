import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Loader = () => {
  const options = {
    initial: {
      x:"-100%",
      opacity: 0,
    },
    animate: {
      x:"0%",
      opacity: 1,
    },
  };
  return (
    <div className="loader">
      <IoFastFoodOutline />

      <div>
        <motion.p {...options}>Loading...</motion.p>
      </div>
    </div>
  );
};

export default Loader;