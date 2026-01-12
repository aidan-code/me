"use client";

import {
  CodeBracketIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Bento = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* <h1 className="text-center font-bold text-3xl">Projects</h1> */}
      <div className=" grid grid-cols-3 gap-4 w-full h-full">
        <div className="bg-black rounded-3xl p-5 overflow-hidden relative flex flex-col items-center border  border-white/15">
          <WrenchScrewdriverIcon className="text-white/10  h-30 md:h-80 absolute bottom-0 md:-bottom-30 left-0" />
          <h1 className="text-white font-bold text-8xl ">10</h1>
          <div className=" h-full justify-end flex flex-col">
            <h2 className="text-white font-bold md:text-5xl fl">Skills</h2>
            {/* <p>Crafting seamless, responsive experiences</p> */}
          </div>
        </div>
        <div className="bg-black rounded-3xl p-5 overflow-hidden relative flex flex-col items-center border  border-white/15">
          <CodeBracketIcon className="text-white/10 h-30 md:h-80 absolute bottom-0 md:-bottom-30 left-0" />
          <h1 className="text-white font-bold text-8xl ">7</h1>
          <div className=" h-full justify-end flex flex-col">
            <h2 className="text-white font-bold md:text-5xl fl">Projects</h2>
            {/* <p>from Conception to completions </p> */}
          </div>
        </div>
        <div className="bg-black rounded-3xl p-5 overflow-hidden relative flex flex-col items-center border border-white/15">
          <UserCircleIcon className="text-white/10  h-30 md:h-80 absolute bottom-0 md:-bottom-30 left-0" />
          <h1 className="text-white font-bold text-8xl ">3</h1>
          <div className=" h-full justify-end flex flex-col">
            <h2 className="text-white font-bold md:text-5xl fl">Teams</h2>
            {/* <p>from Conception to completions and Team Participation </p> */}
          </div>
        </div>
        <div className="bg-black rounded-3xl"></div>
      </div>
    </div>
  );
};

export default Bento;
