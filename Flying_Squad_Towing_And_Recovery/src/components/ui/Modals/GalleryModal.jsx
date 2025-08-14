import React, { useState, useEffect } from "react";

const GalleryModal = ({ isOpen, onClose, images }) => {
  const [currentModalSlide, setCurrentModalSlide] = useState(0);

  if (!isOpen) {
    return null;
  }

  // Handlers for navigating the slideshow within the modal
  const handleNext = () => {
    setCurrentModalSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentModalSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
      <div className="relative max-w-5xl w-full h-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white text-3xl font-bold p-2 bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 transition-opacity"
        >
          &times;
        </button>

        {/* Previous button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 text-white text-4xl p-2 bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 transition-opacity"
        >
          &#10094;
        </button>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 text-white text-4xl p-2 bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 transition-opacity"
        >
          &#10095;
        </button>

        {/* Slideshow image */}
        <img
          src={images[currentModalSlide].src}
          alt={images[currentModalSlide].alt}
          className="max-h-full max-w-full m-auto object-contain rounded-lg shadow-2xl"
        />

        {/* Image count */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-semibold bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full">
          {currentModalSlide + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
