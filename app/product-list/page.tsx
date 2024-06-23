"use client";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Product } from "@/components/UI/product";
import "aos/dist/aos.css";
//@ts-ignore
import AOS from "aos";

export default function ProductList() {
  const [category, setCategory] = useState<string | null>(null);
  const [catProducts, setCatProducts] = useState([]);

  useEffect(() => {
    if (window?.location?.hash) {
      setCategory(window?.location?.hash?.toString().replace("#", ""));
    }
  }, []);

  useEffect(() => {
    if (category) {
      const data = siteConfig.productCategory.find(
        (pr) => pr.title === category
      )?.subProducts;
      //@ts-ignore
      setCatProducts(data);
      console.log(data, "data");
    }
  }, [category]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="my-16">
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
