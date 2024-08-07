"use client";

import { useEffect, useState, Suspense } from "react";
import { siteConfig } from "@/config/site";
import { Product } from "@/components/UI/product";
import "aos/dist/aos.css";
//@ts-ignore
import AOS from "aos";
import { useSearchParams, usePathname } from "next/navigation";

function ProductListContent() {
  const [category, setCategory] = useState<string | null>(null);
  const [catProducts, setCatProducts] = useState([]);
  const [extra, setExtra] = useState([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const hashCategory = window?.location?.hash?.toString().replace("#", "").replaceAll("%20", " ");
    if (hashCategory) {
      setCategory(hashCategory);
    }
  }, [searchParams, pathname]);

  useEffect(() => {
    if (category) {
      const data = siteConfig.productCategory.find(
        (pr) => pr.title === category
      )
      const subProduct = data?.subProducts;
      //@ts-ignore
      const extra = data?.extra || []
      //@ts-ignore
      setExtra(extra)
      //@ts-ignore
      setCatProducts(subProduct);
    }
  }, [category]);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
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
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-500">
          {category} Equipments
        </span>
      </div>
      {catProducts?.map((item, index) => (
        <div key={index}>
          {
            //@ts-ignore
            <Product {...item} />
          }
        </div>
      ))}
      {
      extra.map((item, index) => (
        <div key={index}>
          {
            //@ts-ignore
            <img data-aos="fade-up" src={item.image} key={index} alt={item.title} className="w-full h-auto" />
          }
        </div>
      ))
      }
    </div>
  );
}

export default function ProductList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductListContent />
    </Suspense>
  );
}
