"use client";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Product } from "@/components/UI/product";

export default function ProductPage() {
  const [product, setProduct] = useState(null);

  const allProducts = siteConfig.productCategory.flatMap(
    //@ts-ignore
    (item) => item?.subProducts
  );

  useEffect(() => {
    // Check if window and router are defined to ensure we're on the client-side
    if (
      typeof window !== "undefined" &&
      window.location &&
      window.location.search
    ) {
      const queryString = window.location.search; // "?key1=value1&key2=value2"

      // Create a new URLSearchParams object
      const urlParams = new URLSearchParams(queryString);
      const params = {};

      // Iterate over each parameter using forEach or for...of loop
      //@ts-ignore
      for (const [key, value] of urlParams) {
        //@ts-ignore
        params[key] = value;
      }
      

      const productKey = Object.values(params)[0];

      if (productKey) {
        const foundProduct = allProducts.find(
          //@ts-ignore
          (product) => product.itemName === productKey
        );

        if (foundProduct) {
          //@ts-ignore
          setProduct(foundProduct);
        }
      }
    }
  }, []);

  if (!product) return null; // Handle case where product is not found

  return (
    //@ts-ignore
    <Product {...product} />
  );
}
