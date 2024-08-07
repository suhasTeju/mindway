"use client";

import { IconFileDownload } from "@tabler/icons-react";
import Link from "next/link";
import { BorderBeam } from "./border-beam";

interface ProductProps {
  category: string;
  itemName: string;
  highlightPoints: string[];
  description: string;
  imgSrc: string;
  totalReview: string;
  fileLink?: string;
}

export const Product = ({
  category,
  itemName,
  highlightPoints,
  description,
  imgSrc,
  totalReview,
  fileLink,
}: ProductProps) => {
  const download = () => {
    window.open(fileLink)
  }
  return (
    <>
      <section className="relative sm:py-8 py-10" data-aos="fade-up">
        <div
          data-aos="fade-up"
          className="w-full mx-auto px-4 sm:px-6 lg:px-0 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] py-6 rounded-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
            <div className="img">
              <div className="relative img-box h-full max-lg:mx-auto">
                <img
                  src={imgSrc}
                  alt={itemName}
                  style={{objectFit: 'contain'}}
                  className="w-full h-full object-cover sm:w-[330px] sm:h-[210px] md:w-full md:h-full lg:ml-auto"
                />
                {totalReview == "0" && (
                  <div className="absolute top-3 right-5 z-10">
                    <button className="relative px-2 rounded-xl border border-neutral-500 text-black bg-white hover:bg-gray-100 transition duration-200">
                      Coming Soon
                      <BorderBeam size={60} duration={4} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
              <div className="data w-full max-w-xl">
                <p className="text-lg font-medium leading-8 text-green-600 mb-4">
                  {category}
                </p>
                <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                  {itemName}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  
                </div>
                <p className="text-gray-500 text-base font-normal mb-5">
                  {description}
                </p>
                <ul className="grid gap-y-4 mb-8">
                  {highlightPoints.map((points, index) => (
                    <li className="flex items-center gap-3" key={index}>
                      <div className="w-6 h-6 flex-shrink-0">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#16A349" />
                          <path
                            d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                            stroke="white"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <span className="font-normal text-base text-gray-900">
                        {points}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3">
                  {fileLink && (
                    <button onClick={download}  className="flex gap-2 group transition-all duration-500 p-4 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300">
                      <IconFileDownload /> Broucher
                    </button>
                  )}
                  <a href="/contact">
                    <button className="text-center w-full px-5 py-4 rounded-[100px] bg-green-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                      Get Quota
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
