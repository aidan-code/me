"use client";

import React from "react";
import { motion } from "motion/react";
import memoji from "../../../public/memoji.webp";
import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";

const hero = () => {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col items-center md:flex-row gap-10 justify-between w-full">
        {/* <p>I am</p> */}
        <Meteors number={20} />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          <h1 className=" w-full font-light pointer-events-none bg-linear-to-b from-white to-gray-300/80 bg-clip-text md:text-start text-5xl md:text-8xl leading-none whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10 text-center">
            Ademola <br />
            <span className="font-bold">Adegbamigbe</span>
          </h1>
          <p className="text-center md:text-start w-full text-gray-300">
            a multifaceted creative professional with a unique blend of skills that bring ideas to
            life
          </p>
        </motion.div>
        <div>
          <Image src={memoji} alt="memoji" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default hero;
