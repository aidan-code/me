"use client";
import React from "react";
import { BoltIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 w-full  flex items-center justify-center bg-black">
      <div className="w-[80%] border-white/10 py-5 px-2 flex justify-between items-center">
        <div className="relative w-fit flex  items-end">
          <div className="border-2 border-white h-10 w-9 absolute "></div>
          <h1 className="text-sm font-bold text-center text-white bg-black m-2 z-50">ademola.</h1>
        </div>

        <div className="flex gap-3">
          <button className="text-white font-bold text-sm bg-[#495F41] px-4 py-2 rounded flex items-center justify-between">
            <BoltIcon className="h-5" />
            <span className="text-nowrap">Hire me</span>
          </button>
          <button className="text-white font-bold text-sm flex items-center justify-between px-4 py-2 rounded gap-2">
            <EnvelopeIcon className="h-5" />
            <span className="text-nowrap">Email</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
