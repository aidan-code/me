"use client";

import React from "react";
import { motion } from "motion/react";

export const About = () => {
  return (
    <div className="w-full   flex items-center  justify-start text-justify  my-10">
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-gray-300 text-center md:text-justify"
      >
        I’m a frontend developer passionate about building user-centric solutions that just work —
        beautifully and reliably across devices. My focus is on responsive design, accessibility,
        performance optimization, and smooth integrations that elevate the entire product. I thrive
        in cross-functional squads, shipping impactful features end-to-end, but hey, I still carve
        out time to teach students how to code and bring their ideas to life.
      </motion.p>
    </div>
  );
};
