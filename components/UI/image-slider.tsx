"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  IconCircle,
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import { BorderBeam } from "./border-beam";

const featuredProductList = [
  {
    src: "/prochem2001.webp",
    title: "Prochem PA-200",
    subtitle:
      "Promea’s PA 200 is a is a compact, simple, and reliable semi-automated analyzer",
    link: "/all-product",
    alt: "Hematology Analyzer",
  },
  {
    src: "/getin11601.jpg",
    title: "Getein 1160",
    subtitle:
      "Getein 1160 is a multi-channel analyzer which has 4 incubation channels and 1 emergency test channel.",
    link: "/all-product",
    alt: "Getein 1160",
  },
  {
    src: "/st200ccabgem1.jpg",
    title: "ST-200 CC ABGEM",
    subtitle:
      "This next-generation Hybrid device represents a significant advance in efficiency and accuracy",
    link: "/all-product",
    alt: "ST 200 CC Smart",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation(); // Controls for animation

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % featuredProductList.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuredProductList.length) %
        featuredProductList.length
    );
  };

  //@ts-ignore
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Trigger animation when currentIndex changes
  React.useEffect(() => {
    controls.start({ x: `-${currentIndex * 100}%` });
  }, [currentIndex, controls]);

  return (
    // <div data-aos="fade-up" className="relative overflow-hidden w-full max-w-8xl mx-auto border border-gray-100 rounded-2xl">
    //   <motion.div
    //     className="flex transition-transform"
    //     animate={controls}
    //     initial={{ x: '0%' }}
    //     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    //     transition={{ ease: "easeInOut", duration: 0.2 }}
    //   >
    //     {featuredProductList.map((product, index) => (
    //       <div key={index} className="max-w-full flex-shrink-0 max-w-full">
    //       <img src={product.src} alt={product.alt} className="w-full h-64 md:object-contain sm:object-cover md:h-90" />
    //       <div className="p-4 bg-white">
    //         <h2 className="text-xl font-semibold">{product.title}</h2>
    //         <p className="text-gray-600">{product.subtitle}</p>
    //         <a href={product.link} className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700">
    //           Explore more product <IconArrowNarrowRight className="ml-2" />
    //         </a>
    //       </div>
    //     </div>

    //     ))}
    //   </motion.div>
    //   <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
    //     <button onClick={handlePrev} className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200">
    //       <IconArrowNarrowLeft size={24} />
    //     </button>
    //   </div>
    //   <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
    //     <button onClick={handleNext} className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200">
    //       <IconArrowNarrowRight size={24} />
    //     </button>
    //   </div>
    //   <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
    //     {featuredProductList.map((_, index) => (
    //       <button key={index} onClick={() => handleDotClick(index)} className="focus:outline-none">
    //         <IconCircle
    //           size={16}
    //           className={`${
    //             index === currentIndex ? 'text-blue-500' : 'text-gray-300'
    //           }`}
    //         />
    //       </button>
    //     ))}
    //   </div>
    //   <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow-lg">
    //     {currentIndex + 1} / {featuredProductList.length}
    //   </div>

    // </div>

    <div className="max-w-2xl mx-auto md:max-w-4xl">
      <div
        id="default-carousel"
        className="relative rounded-lg overflow-hidden shadow-lg"
        data-carousel="static"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-80 md:h-96" data-carousel-inner>
          {/* <!-- Item 1 --> */}
          {featuredProductList.map((item) => {
            return (
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
                key={item.title}
                onClick={
                () => window.open("/all-product", '_self')
                }
              >
                <img
                  src={item.src}
                  className="object-cover w-full h-full md:h-fit-content"
                  alt={item.alt}
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-l md:text-xl dark:text-gray-800">
                  {/* {item.title} */}
                  <button className="flex items-center gap-2 relative px-2 rounded-xl border border-neutral-500 text-black-300 bg-white hover:bg-gray-100 transition duration-200">
                    Explore More{" "}
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    <BorderBeam size={60} duration={4} />
                  </button>
                </span>
              </div>
            );
          })}
        </div>
        {/* <!-- Slider indicators --> */}
        <div
          className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"
          data-carousel-indicators
        >
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          data-carousel-prev
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          data-carousel-next
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      <p className="mt-5 text-center font-semibold text-gray-700 dark:text-gray-300">
      From cutting-edge analyzers to essential lab consumables, our products are designed to enhance diagnostic accuracy and efficiency.
      </p>
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </div>
  );
};

export default ImageCarousel;
