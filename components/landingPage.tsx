"use client";
import "aos/dist/aos.css";
//@ts-ignore
import AOS from "aos";
import { useEffect } from "react";
import { Category } from "@/components/category";
import { Hero } from "@/components/hero";
import { FeatureProduct } from "@/components/featuredProduct";
import dynamic from "next/dynamic";
import { Stats } from "./UI/stats";

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
      <div className="flex gap-3">
        <FeatureProduct />
      </div>
      <div className="flex gap-3">
        <Category />
      </div>

      <div className="flex gap-3">
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
