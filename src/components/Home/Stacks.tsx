"use cleint";

import React from "react";
import Image from "next/image";
import css from "../../../public/logos/stacks/css3.svg";
import html from "../../../public/logos/stacks/html5.svg";
import js from "../../../public/logos/stacks/js.svg";
import ts from "../../../public/logos/stacks/typescript.svg";
import tailwind from "../../../public/logos/stacks/tailwind.svg";
import react from "../../../public/logos/stacks/react.svg";
import next from "../../../public/logos/stacks/next.svg";
import node from "../../../public/logos/stacks/node.svg";
import Python from "../../../public/logos/stacks/python.svg";

export const Stacks = () => {
  const logos = [
    { logo: html, name: "html" },
    { logo: css, name: "css" },
    { logo: tailwind, name: "tailwind" },
    { logo: js, name: "js" },
    { logo: ts, name: "ts" },
    { logo: react, name: "react" },
    { logo: next, name: "next" },
    { logo: node, name: "node" },
    { logo: Python, name: "Python" },
  ];
  return (
    <div className="rounded flex flex-wrap gap-10 justify-around my-24 bg-white/10 p-10 lg:rounded-xl backdrop-blur-md">
      {logos.map((logo, index) => (
        <div
          className={` rounded-full ${
            logo?.name === "next" ? "bg-white border border-white" : "bg-transparent"
          }`}
          key={index}
        >
          <Image
            // key={index}
            src={logo.logo}
            alt={logo.name}
            className={`h-10 w-10 md:w-20 md:h-20 `}
          />
        </div>
      ))}
    </div>
  );
};
