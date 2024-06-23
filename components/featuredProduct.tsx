"use client";
import React from "react";
import { FeatureCard } from "./UI/featureCard";

const featuredProductList = [
  {
    src: "/prochem2001.webp",
    title: "Prochem PA-200",
    subtitle: "Promea’s PA 200 is a is a compact, simple, and reliable semi-automated biochemistry analyzer proficient in performing tests on whole blood, serum, plasma, and urine as a samples",
    link: "/",
    alt: "Hematology Analyzer",
  },
  {
    src: "/prochem1001.webp",
    title: "Prochem-PA100",
    subtitle:
      "The Promea PA100 Electrolyte Analyzer is a cutting-edge device designed to accurately measure and analyze various essential parameters in a wide range of specimens, including Whole Blood, Serum, Plasma, and Urine.",
    link: "/",
    alt: "Prochem-PA100",
  },
  {
    src: "/st200cc1.png",
    title: "ST 200 CC Smart Blood Gas Analyzer",
    subtitle:
      "This next-generation Hybrid device represents a significant leap forward in efficiency, accuracy, and connectivity for critical blood gas and electrolyte analysis",
    link: "/",
    alt: "ST 200 CC Smart",
  },
];

export const FeatureProduct = () => {
  return (
    <div className="flex-column" data-aos="fade-up">
      <div className="dark:text-white text-black text-2xl md:text-6xl font-bold my-16">
        {/* <TypewriterEffectSmooth words={words} /> */}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-500">
          Featured Products
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center">
        {featuredProductList.map((item, index) => (
          <div key={item.alt} className="p-4">
            <FeatureCard {...item} customHeight={index === 2} />
          </div>
        ))}
      </div>
    </div>
  );
};
