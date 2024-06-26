"use client"
import React from "react";
import {
  IconVirus,
  IconDna,
  IconHeartbeat,
  IconDroplet,
  IconBone,
  IconMicroscope,
  IconBrandAsana,
  IconBolt,
  IconLayersIntersect,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./UI/bento-grid";
import { IconChemical, IconTestTube } from "./icons";

interface Skeleton {
  url: string;
}

export function Category() {
  return (
    <div>
      <div data-aos="fade-up" className="flex justify-center items-center my-4">
        <div className="dark:text-white text-black text-2xl md:text-6xl font-bold my-16">
          {/* <TypewriterEffectSmooth words={words} /> */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-500">
            Browse by category
          </span>
        </div>
      </div>
      <BentoGrid className="max-w-7xl mx-auto cursor-pointer">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            count={item.count}
            className={
              i === 3 || i === 6
                ? "md:col-span-2 border border-gray-100"
                : "border border-gray-100"
            }
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = ({ url }: Skeleton) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
      src={url}
      className="w-full h-full"
      loading="lazy"
      style={{ objectFit: "fill" }}
      alt="clients"
    />
  </div>
);
export const items = [
  {
    title: "Hematology",
    description:
      "Examine blood, blood diseases, and the organs involved in forming blood.",
    header: <Skeleton url="exi18001.jpg" />,
    icon: <IconBone className="h-4 w-4 text-green-500" />,
    count: 5
  },
  {
    title: "Clinical Chemistry",
    description: "Analyze chemical processes and substances in the human body.",
    header: <Skeleton url="exc4001.png" />,
    icon: <IconChemical className="h-4 w-4 text-green-500" />,
    count: 3
  },
  {
    title: "CLIA",
    description: "Ensure quality standards for laboratory testing.",
    header: <Skeleton url="exi18001.jpg" />,
    icon: <IconTestTube className="h-4 w-4 text-green-500" />,
    count: 2
  },
  {
    title: "POCT",
    description: "Perform medical diagnostic testing at the point of care.",
    header: <Skeleton url="q8pro1.png" />,
    icon: <IconHeartbeat className="h-4 w-4 text-green-500" />,
    count: 2
  },
  {
    title: "Urinalysis",
    description:
      "Test and analyze urine to diagnose various medical conditions.",
    header: <Skeleton url="u36001.png" />,
    icon: <IconMicroscope className="h-4 w-4 text-green-500" />,
    count: 3
  },
  {
    title: "Asterial Blood Gas",
    description:
      "works by analysing a small blood sample taken from an artery",
    header: <Skeleton url="st200cc1.png" />,
    icon: <IconBrandAsana className="h-4 w-4 text-green-500" />,
    count: 4
  },
  {
    title: "Electrolyte",
    description:
      "works by analysing a small blood sample taken from an artery",
    header: <Skeleton url="u36001.png" />,
    icon: <IconBolt className="h-4 w-4 text-green-500" />,
    count: 3
  },
  {
    title: "Molecular",
    description:
      "Explore the molecular structure and function of biological molecules.",
    header: <Skeleton url="/exm60001.png" />,
    icon: <IconDna className="h-4 w-4 text-green-500" />,
    count: 7
  },
  {
    title: "Microbiology",
    description: "Examine and analyze microorganisms with precision.",
    header: <Skeleton url="/mReg1.jpg" />,
    icon: <IconVirus className="h-4 w-4 text-green-500" />,
    count: 1
  },

  {
    title: "Hemostasis",
    description: "Study the process of blood clotting and its disorders.",
    header: <Skeleton url="yx20001.png" />,
    icon: <IconDroplet className="h-4 w-4 text-green-500" />,
    count: 2
  },

  {
    title: "Biomaterial",
    description:
      "Investigate materials used in medical devices and prosthetics.",
    header: <Skeleton url="bioreagent1.jpg" />,
    icon: <IconMicroscope className="h-4 w-4 text-green-500" />,
    count: 1
  },
  {
    title: "Others",
    description:
      "Laboratory consumeable and others",
    header: <Skeleton url="bioreagent1.jpg" />,
    icon: <IconLayersIntersect className="h-4 w-4 text-green-500" />,
    count: 1
  },
 
];
