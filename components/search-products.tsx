"use client";
import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { siteConfig } from "@/config/site";
import { IconSearch } from "@tabler/icons-react";
import { SearchIcon } from "./icons";

const products = siteConfig.productCategory.flatMap(
  //@ts-ignore
  (item) => item?.subProducts
);

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

   //@ts-ignore
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = products.filter((product) =>
      //@ts-ignore
      product.itemName.toLowerCase().includes(value)
    );
    //@ts-ignore
    setFilteredProducts(filtered);
  };
  //@ts-ignore
  const navigateToProduct = (product) => {
    window.open(`/product?=${encodeURIComponent(product.itemName)}`, "_self");
  };

  // Utility function to truncate text based on character limit
  //@ts-ignore
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    } else {
      return text;
    }
  };

  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen p-4">
      <Popover as="div" className="relative">
        <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Click here to search..."
            startContent={
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            // disabled
            type="search"
          />
        </PopoverButton>
        <PopoverPanel
          className="absolute left-1/4 sm:left-1/4 md:left-1/4 z-10 mt-5 flex  max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
          role="tabpanel"
          aria-labelledby="search-products"
          style={{ minHeight: "20rem" }} // Set a minimum height for consistent display
        >
          <div className="w-full flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4 max-h-80 overflow-y-scroll w-full">
              <Input
                aria-label="Search"
                classNames={{
                  inputWrapper:
                    "bg-gray-100 rounded-md px-4 py-2 w-full min-w-[15rem]",
                  input: "text-sm outline-none",
                }}
                placeholder="Start typing ..."
                value={searchTerm}
                onChange={handleSearch}
                type="search"
                startContent={<IconSearch />}
              />
              {filteredProducts.length === 0 ? (
                <p className="text-gray-500 w-[15rem] text-sm py-2">
                  start typing to see results.
                </p>
              ) : (
                filteredProducts.map((product) => (
                  <div
                   //@ts-ignore
                    key={product.id}
                    className="bg-white border border-gray-200 rounded-md p-4 my-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => navigateToProduct(product)}
                  >
                    <p className="text-gray-900 font-semibold">
                      {
                        //@ts-ignore
                        truncateText(product.itemName, 18)
                      }
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
}
