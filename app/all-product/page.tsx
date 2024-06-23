"use client";
import { title } from "@/components/primitives";
import { useEffect } from "react";
import "aos/dist/aos.css";
//@ts-ignore
import AOS from "aos";
import { siteConfig } from "@/config/site";
import { Product } from "@/components/UI/product";

export default function AllProductPage() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  const allProducts = siteConfig.allProducts;
  return (
    <div className="my-16">
      <div className="dark:text-white my-8 text-black text-2xl md:text-6xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-500">
          All Products
        </span>
      </div>
      {allProducts.map((item, index) => (
        <div key={index}>{<Product {...item} />}</div>
      ))}
    </div>
  );
}
