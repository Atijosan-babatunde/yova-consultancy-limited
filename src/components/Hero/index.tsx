"use client";

import React, { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/images/hero/slide1.jpg",
    title: "Expert Business Analysis",
    subtitle: "Helping you navigate digital transformation seamlessly.",
  },
  {
    image: "/images/hero/herothree.jpg",
    title: "Industry-Focused Solutions",
    subtitle: "Finance, Sales, Telecoms and Technology Consultancy.",
  },
  {
    image: "/images/hero/slide3.jpg",
    title: "Trusted Government Partner",
    subtitle: "Supporting bids and tenders for public sector success.",
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-center bg-cover flex items-center justify-center transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 relative" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Overlay (allow clicks to pass through) */}
          <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

          {/* Content */}
          {index === current && (
            <div className="relative z-10 p-8 rounded-lg max-w-3xl text-center text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl">{slide.subtitle}</p>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-3 text-2xl z-20 active:scale-95 transition-all"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-3 text-2xl z-20 active:scale-95 transition-all"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroBanner;
