import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryModal = ({ isOpen, onClose, images }) => {
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentGalleryImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentGalleryImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-2 sm:p-4">
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-50 text-white transition-colors hover:text-orange-500 md:right-4 md:top-4"
          aria-label="Close gallery"
        >
          <X size={28} />
        </button>
        <div className="relative w-full max-w-3xl lg:max-w-5xl">
          <img
            src={images[currentGalleryImage].src}
            alt={images[currentGalleryImage].alt}
            className="h-auto w-full max-h-[80vh] rounded-xl object-contain shadow-2xl transition-transform duration-300"
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-1 text-white transition-colors hover:bg-opacity-75 sm:left-4 sm:p-2"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-1 text-white transition-colors hover:bg-opacity-75 sm:right-4 sm:p-2"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="mt-4 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentGalleryImage(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                index === currentGalleryImage ? "bg-orange-500" : "bg-gray-500"
              }`}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
