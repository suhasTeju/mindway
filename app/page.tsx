"use client";
import { Category } from "@/components/category";
import { Hero } from "@/components/hero";
import { useEffect } from "react";
import "aos/dist/aos.css";
//@ts-ignore
import AOS from "aos";
import { Map } from "@/components/UI/map";
import { FeatureProduct } from "@/components/featuredProduct";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block mb-4">
        <Hero />
      </div>
      <div className="flex gap-3">
        <FeatureProduct />
      </div>
      <div className="flex gap-3">
        <Category />
      </div>

      <div className="mt-8 w-full" data-aos="fade-up">
        <div className="w-full p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Locate us </h1>
          <Map />
        </div>
      </div>
    </section>
  );
}
