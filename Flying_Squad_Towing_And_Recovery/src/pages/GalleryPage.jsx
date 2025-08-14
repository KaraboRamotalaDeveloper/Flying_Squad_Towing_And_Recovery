import React, { useState, useEffect } from "react";
import GalleryModal from "../components/ui/Modals/GalleryModal";

// This is a placeholder for the GalleryModal component.
// In a real application, this would likely be in its own file.

const GalleryPage = () => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define the images for the gallery. You can replace these with your own.
  const galleryImages = [
    {
      src: "./src/assets/for-tow-truck/IMG-20250813-WA0019.jpg",
      alt: "Tow truck on the road",
    },
    {
      src: "./src/assets/for-tow-truck/IMG-20250813-WA0035.jpg",
      alt: "Roadside assistance in progress",
    },
    {
      src: "./src/assets/for-tow-truck/IMG-20250813-WA0034.jpg",
      alt: "Heavy-duty truck towing",
    },
    {
      src: "./src/assets/for-vehicle-recovery/IMG-20250813-WA0021.jpg",
      alt: "Winch-out service",
    },
    {
      src: "./src/assets/for-tow-truck/IMG-20250813-WA0032.jpg",
      alt: "Accident recovery",
    },
    {
      src: "./src/assets/for-tow-truck/IMG-20250813-WA0030.jpg",
      alt: "Accident recovery",
    },
    {
      src: "./src/assets/for-vehicle-recovery/IMG-20250813-WA0023.jpg",
      alt: "Accident recovery",
    },
    {
      src: "./src/assets/for-tow-truck/IMG-20250813-WA0029.jpg",
      alt: "Accident recovery",
    },
    {
      src: "./src/assets/for-tow-truck/IMG-20250813-WA0026.jpg",
      alt: "Accident recovery",
    },
    {
      src: "./src/assets/for-vehicle-recovery/IMG-20250813-WA0021.jpg",
      alt: "Accident recovery",
    },
    {
      src: "./src/assets/for-vehicle-recovery/IMG-20250813-WA0018.jpg",
      alt: "Accident recovery",
    },
    {
      src: "./src/assets/for-tow-truck/IMG-20250813-WA0019.jpg",
      alt: "Accident recovery",
    },
  ];

  // Logic to automatically cycle through the images every 5 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % galleryImages.length);
    }, 5000); // Change image every 5 seconds

    // Clear the interval when the component unmounts to prevent memory leaks.
    // The dependency array is correct and efficient.
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <>
      <section className="bg-gray-100 py-12 dark:bg-gray-800 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-4xl text-gray-900 dark:text-gray-100">
            Our Fleet in Action
          </h2>
          <p className="mb-8 text-base text-gray-600 dark:text-gray-400 md:mb-12 md:text-lg">
            Click on the slideshow to view our full gallery.
          </p>
          <div
            className="relative mx-auto max-w-4xl cursor-pointer overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
            onClick={() => setIsGalleryModalOpen(true)}
          >
            {/* The image is rendered here. I added a transition for a smoother fade effect. */}
            <img
              src={galleryImages[currentSlide].src}
              alt={galleryImages[currentSlide].alt}
              className="h-auto w-full object-cover transition-opacity duration-1000 ease-in-out"
              style={{ aspectRatio: "16 / 9" }}
            />
            <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
              {galleryImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        images={galleryImages}
      />
    </>
  );
};

export default GalleryPage;
