"use client";
import React from "react";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { BackgroundGradient } from "./background-gradient";

interface FeatureCardProps {
  src: string;
  title: string;
  subtitle: string;
  link: string;
  alt: string;
  customHeight?: boolean;
}

export function FeatureCard({
  title,
  subtitle,
  link,
  src,
  alt,
  customHeight,
}: FeatureCardProps) {
  const handler = () => {
    // window.open(link, "_self");
  };
  
  return (
    <div style={{ position: "relative" }}>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={src}
          alt={alt}
          width="400"
          height="250"
          className="object-contain"
          style={{
            height: customHeight ? "150px" : "auto",
          }}
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {subtitle}
        </p>
        <a href="/contact">
          <button
            onClick={handler}
            className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-black-800"
          >
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-4 py-2 text-white">
              Get Quota
            </span>
          </button>
        </a>
      </BackgroundGradient>
      <div style={{ position: "absolute", top: 12, zIndex: 99, right: 20 }}>
        <button className="px-2 rounded-xl border border-neutral-500 text-black-300 bg-white hover:bg-gray-100 transition duration-200">
          Featured
        </button>
      </div>
    </div>
  );
}
