"use client";

import { Play } from "lucide-react";
import { BoltIcon, EnvelopeIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const Dock = () => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white/10 py-2 px-4 rounded-xl flex justify-between items-center gap-5 border border-white/20  backdrop-blur-md z-50">
      <div className="flex item-center  justify-between gap-5">
        <EnvelopeIcon className="w-8 h-8 " />
        <PhoneIcon className="w-8 h-8 " />
        <BoltIcon className="w-8 h-8 " />
      </div>
      <div className="border-l border-white/50 px-2">
        <PlayCircleIcon className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Dock;
