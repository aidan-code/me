"use client";

import React from "react";
import { projects } from "@/resources/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Project = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className={`flex flex-col gap-5 my-24 overflow-hidden ${
        showMore ? "h-full" : "h-[800px]"
      } relative`}
    >
      <h3 className="w-full text-center pointer-events-none bg-linear-to-b from-white to-gray-300/80 bg-clip-text  text-4xl leading-none whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10 font-bold ">
        Projects
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`h-auto flex flex-col items- p-5  gap-5 w-full  border-white/10  rounded-md border cursor-pointer ${
              projects.length % 3 === 0 ? "null" : "last:col-span-1 "
            }`}
          >
            {/* <iframe src={project.Link} className="h-[100px] w-[100px] bg-white"></iframe> */}
            <div className="w-[50%] flex  border-white/10 h-full justify-">
              <Image
                src={project.logo}
                alt={project.Title}
                className="h-[100px] w-[100px] bg-white rounded-full"
              />
            </div>

            <div className="w-full flex flex-col justify-start gap-3">
              <h2 className="text-3xl font-bold">{project.Title}</h2>
              <p>{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.technology?.map((item, index) => (
                  <p
                    key={index}
                    className="text-white border border-white/15 rounded p-1 text-[11px] bg-white/10"
                  >
                    {item}
                  </p>
                ))}
              </div>
              {/* {project.team && <p>Team : {project.team?.join(", ")}</p>} */}
              <p className="font-bold">Role : {project.Role?.join(", ")}</p>
              <div className="flex gap-2 my-5">
                <Link
                  href={project.Link}
                  className="bg-white  px-4 py-1 rounded-md text-black cursor-pointer  "
                >
                  visit
                </Link>
                <button className="bg-[#495F41] px-4 py-1 rounded-md text-white cursor-pointer">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showMore ? null : (
        <div className="h-[300px] w-full blur backdrop-blur-sm absolute bottom-0 left-0 right-0 bg-black/10 z-50 drop-shadow-md"></div>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className={`${
          showMore
            ? "font-bold"
            : "absolute bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-md text-white cursor-pointer z-50"
        }`}
      >
        {showMore ? "See less" : "See more"}
      </button>
    </div>
  );
};

export default Project;
