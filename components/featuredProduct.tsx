import React from "react";
import { FeatureCard } from "./UI/featureCard";

const featuredProductList = [
  {
    src: "/u36001.png",
    title: "Urinalysis Hybrid System",
    subtitle: "An integrated system for upgrading your lab urinalysis solution",
    link: "/",
    alt: "urinalysis",
  },
  {
    src: "/yx20001.png",
    title: "Automated Blood Coagulation Analyzer",
    subtitle:
      "Integrating Mechanical and Optical Coagulation Analysis Platform in clotting method.",
    link: "/",
    alt: "Blood Coagulation",
  },
  {
    src: "/exc4001.png",
    title: "Chemistry Analyzer",
    subtitle:
      "An automated floor-standing chemistry analyzer customized for medium throughput laboratories.",
    link: "/",
    alt: "Analyzer",
  },
];

export const FeatureProduct = () => {
  return (
    <div className="flex-column" data-aos="fade-up">
      <div className="dark:text-white text-black text-2xl md:text-6xl font-bold mt-4">
        {/* <TypewriterEffectSmooth words={words} /> */}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-500">
          Featured Products
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center">
        {featuredProductList.map((item) => (
          <div key={item.alt} className="p-4">
            <FeatureCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};
