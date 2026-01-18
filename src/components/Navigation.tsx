"use client";
import React from "react";
import { BoltIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useText } from "@/context/TextContext";

export const Navigation = () => {
  const { showEditor } = useText()
  return (
    <nav className="sticky top-0 w-full  flex items-center justify-center bg-black z-1000000000000">
      <div className=" w-full md:w-[80%] border-white/10 py-5 px-2 flex justify-between items-center">
        <div className="relative w-fit flex  items-end">
          <div className="border-2 border-white h-10 w-9 absolute "></div>
          <h1 className="text-sm font-bold text-center text-white bg-black m-2 z-50">ademola.</h1>
        </div>

        <div className="flex gap-3">
          <button className="text-white font-bold text-sm bg-[#495F41] px-4 py-2 rounded flex items-center justify-between cursor-pointer" onClick={() => showEditor()}>
            <BoltIcon className="h-5" />
            <span className="hidden md:block text-nowrap">Tell me what you want to build</span>
          </button>
          <Link href="mailto:ademadegbamigbe@gmail.com" className="text-white font-bold text-sm flex items-center justify-between px-4 py-2 rounded gap-2">
            <EnvelopeIcon className="h-5" />
            <span className="text-nowrap">Email</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
