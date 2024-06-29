"use client"
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IconCircle, IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react';

const featuredProductList = [
  {
    src: "/prochem2001.webp",
    title: "Prochem PA-200",
    subtitle: "Promea’s PA 200 is a is a compact, simple, and reliable semi-automated analyzer",
    link: "/all-product",
    alt: "Hematology Analyzer",
  },
  {
    src: "/getin11601.jpg",
    title: "Getein 1160",
    subtitle: "Getein 1160 is a multi-channel analyzer which has 4 incubation channels and 1 emergency test channel.",
    link: "/all-product",
    alt: "Getein 1160",
  },
  {
    src: "/st200ccabgem1.jpg",
    title: "ST-200 CC ABGEM",
    subtitle: "This next-generation Hybrid device represents a significant advance in efficiency and accuracy",
    link: "/all-product",
    alt: "ST 200 CC Smart",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation(); // Controls for animation

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProductList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredProductList.length) % featuredProductList.length);
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
    <div data-aos="fade-up" className="relative overflow-hidden w-full max-w-8xl mx-auto border border-gray-100 rounded-2xl">
      <motion.div
        className="flex transition-transform"
        animate={controls}
        initial={{ x: '0%' }}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        transition={{ ease: "easeInOut", duration: 0.2 }} 
      >
        {featuredProductList.map((product, index) => (
          <div key={index} className="max-w-full flex-shrink-0 max-w-full">
          <img src={product.src} alt={product.alt} className="w-full h-64 md:object-contain sm:object-cover md:h-90" />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.subtitle}</p>
            <a href={product.link} className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700">
              Explore more product <IconArrowNarrowRight className="ml-2" />
            </a>
          </div>
        </div>
        
        ))}
      </motion.div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={handlePrev} className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200">
          <IconArrowNarrowLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={handleNext} className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200">
          <IconArrowNarrowRight size={24} />
        </button>
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredProductList.map((_, index) => (
          <button key={index} onClick={() => handleDotClick(index)} className="focus:outline-none">
            <IconCircle
              size={16}
              className={`${
                index === currentIndex ? 'text-blue-500' : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow-lg">
        {currentIndex + 1} / {featuredProductList.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
