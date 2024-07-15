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
import { siteConfig } from "@/config/site";

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
            //@ts-ignore
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
      style={{ objectFit: "contain" }}
      alt="clients"
    />
  </div>
);
const getProductCount = ( category : string) => {
  return siteConfig.productCategory.find (item => item.title === category)?.subProducts?.length
}
export const items = [
  {
    title: "Hematology",
    description:
      "Examine blood, blood diseases, and the organs involved in forming blood.",
    header: <Skeleton url="/hematcat.jpg" />,
    icon: <IconBone className="h-4 w-4 text-green-500" />,
    count: getProductCount("Hematology")
  },
  {
    title: "Clinical Chemistry",
    description: "Analyze chemical processes and substances in the human body.",
    header: <Skeleton url="biochemcat.jpg" />,
    icon: <IconChemical className="h-4 w-4 text-green-500" />,
    count: getProductCount("Clinical Chemistry")
  },
  {
    title: "CLIA",
    description: "Ensure quality standards for laboratory testing.",
    header: <Skeleton url="/CLIA.jpg" />,
    icon: <IconTestTube className="h-4 w-4 text-green-500" />,
    count: getProductCount("CLIA")
  },
  {
    title: "POCT Fluorescence Immunoassay Analyzer",
    description: "Perform medical diagnostic testing at the point of care.",
    header: <Skeleton url="/POCT.jpg" />,
    icon: <IconHeartbeat className="h-4 w-4 text-green-500" />,
    count: getProductCount("POCT")
  },
  {
    title: "Urinalysis",
    description:
      "Test and analyze urine to diagnose various medical conditions.",
    header: <Skeleton url="/Urine 01.jpg" />,
    icon: <IconMicroscope className="h-4 w-4 text-green-500" />,
    count: getProductCount("Urinalysis")
  },
  {
    title: "Arterial Blood Gas",
    description:
      "works by analysing a small blood sample taken from an artery",
    header: <Skeleton url="abg.jpg" />,
    icon: <IconBrandAsana className="h-4 w-4 text-green-500" />,
    count: getProductCount("Arterial Blood Gas")
  },
  {
    title: "Electrolytes",
    description:
      "works by analysing a small blood sample taken from an artery",
    header: <Skeleton url="prochem1001.webp" />,
    icon: <IconBolt className="h-4 w-4 text-green-500" />,
    count: getProductCount("Electrolytes")
  },
  {
    title: "Molecular",
    description:
      "Explore the molecular structure and function of biological molecules.",
    header: <Skeleton url="/Molicular.jpg" />,
    icon: <IconDna className="h-4 w-4 text-green-500" />,
    count: getProductCount("Molecular")
  },
  {
    title: "Microbiology",
    description: "Examine and analyze micro-organisms with precision.",
    header: <Skeleton url="/Micro biology.jpg" />,
    icon: <IconVirus className="h-4 w-4 text-green-500" />,
    count: getProductCount("Microbiology")
  },

  {
    title: "Hemostasis",
    description: "Study the process of blood clotting and its disorders.",
    header: <Skeleton url="hemostiscat.jpg" />,
    icon: <IconDroplet className="h-4 w-4 text-green-500" />,
    count: getProductCount("Hemostasis")
  },
  {
    title: "Others",
    description:
      "Laboratory Consumables",
    header: <Skeleton url="bioreagent1.jpg" />,
    icon: <IconLayersIntersect className="h-4 w-4 text-green-500" />,
    count: getProductCount("Others")
  },
 
];
