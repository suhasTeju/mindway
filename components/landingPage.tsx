"use client";
import "aos/dist/aos.css";
//@ts-ignore
import AOS from "aos";
import { useEffect } from "react";
import { Hero } from "@/components/hero";
import dynamic from "next/dynamic";
import { Stats } from "./UI/stats";
import ImageCarousel from "./UI/image-slider";
import { Category } from "./category";
import { Certified } from "./certified";
import GradualSpacing from "./UI/gradual-spacing";

// Dynamically import the Map component with no SSR
const Map = dynamic(() => import("@/components/UI/map"), { ssr: false });

export const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <div className="inline-block mb-4">
        <Hero />
      </div>
      <div>
        <Certified />
      </div>
      {/* <div className="flex gap-3">
        <ImageCarousel />
      </div> */}
      <div className="flex gap-3">
        <Category />
      </div>
      <div data-aos="fade-up">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="We Provide"
          duration={5}
        />
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="Application &"
          duration={5}
        />

        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="Service Support"
          duration={5}
        />
      </div>
      <div className="flex gap-3 w-full">
        <Stats />
      </div>

      <div className="mt-8 w-full" data-aos="fade-up">
        <div className="w-full p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-500">
              Locate us
            </span>
          </h1>
          <Map />
        </div>
      </div>
    </>
  );
};
