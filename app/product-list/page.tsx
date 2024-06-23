"use client";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Product } from "@/components/UI/product";
import "aos/dist/aos.css";
//@ts-ignore
import AOS from "aos";
import { useSearchParams, usePathname } from "next/navigation";

export default function ProductList() {
  const [category, setCategory] = useState<string | null>(null);
  const [catProducts, setCatProducts] = useState([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (window?.location?.hash) {
      setCategory(
        window?.location?.hash?.toString().replace("#", "").replace("%20", " ")
      );
    }
  }, [searchParams, pathname]);

  useEffect(() => {
    if (category) {
      const data = siteConfig.productCategory.find(
        (pr) => pr.title === category
      )?.subProducts;
      //@ts-ignore
      setCatProducts(data);
    }
  }, [category]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, [searchParams]);

  return (
    <div className="my-16">
      <div className="dark:text-white my-8 text-black text-2xl md:text-6xl font-bold">
        {/* <TypewriterEffectSmooth words={words} /> */}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-500">
          {category} Equipments
        </span>
      </div>
      {catProducts.map((item, index) => (
        <div key={index}>
          {
            //@ts-ignore
            <Product {...item} />
          }
        </div>
      ))}
    </div>
  );
}