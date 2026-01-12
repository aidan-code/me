"use client";

import React from "react";
import Image from "next/image";
import porsche from "../../../public/Porsche.jpg";
import js from "../../../public/logos/stacks/js.svg";

export const Extras = () => {
  return (
    <div className="my-24">
      <h1 className="w-full text-center pointer-events-none bg-linear-to-b from-white to-gray-300/80 bg-clip-text  text-4xl leading-none whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10 font-bold my-10">
        Here is a little more about me
      </h1>
      <div className="grid  grid-cols-3 gap-5 ">
        <div className="w-full h-fit relative col-span-2 ">
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-linear-to-b from-black/0 to-black  ">
            <p className="text-5xl font-bold absolute bottom-10 left-5 z-10 ">Interests</p>
          </div>
          <Image
            src={porsche}
            alt="extra"
            width={600}
            height={600}
            className="rounded object-cover h-full w-full"
          />
        </div>

        <div className="w-full bg-[#495F41] rounded relative flex flex-col justify-end  p-5">
          <p className="text-2xl">Learning:</p>
          <h3 className="text-start font-bold text-5xl">
            The Complete JavaScript Course 2025: From Zero to Expert!
          </h3>
          <div className="absolute w-[150px] h-[150px] top-10 left-[80%]">
            <Image
              src={js}
              alt="extra"
              width={600}
              height={600}
              className="rounded object-fit h-full w-full"
            />
          </div>
        </div>
        <div className="h-full relative w-full grid grid-cols-3 gap-5 col-span-3">
          <div className="h-full ">
            <p className="text-white text-3xl">Experience</p>
            <iframe
              data-testid="embed-iframe"
              //   style="border-radius:12px"
              src="https://open.spotify.com/embed/playlist/4dUG1pEBj1bYJAo5l8LHHn?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              //   allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="h-full">
            <p className="text-white text-3xl">Chill</p>
            <iframe
              data-testid="embed-iframe"
              //   style="border-radius:12px"
              src="https://open.spotify.com/embed/playlist/6dI2f9C2w6DnH6Sv0IeEDT?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              //   allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="h-full ">
            <p className="text-white text-3xl">Artists</p>
            <iframe
              data-testid="embed-iframe"
              //   style="border-radius:12px"
              src="https://open.spotify.com/embed/artist/1ukmGETCwXTbgrTrkRDnmn?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              //   allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
