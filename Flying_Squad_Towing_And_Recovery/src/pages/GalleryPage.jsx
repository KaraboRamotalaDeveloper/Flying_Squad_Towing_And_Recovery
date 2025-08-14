import React from "react";
import GalleryModal from "../components/ui/Modals/GalleryModal.jsx";
const GalleryPage = () => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % galleryImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length, setCurrentSlide]);

  return (
    <>
      <section className="bg-gray-100 py-12 dark:bg-gray-800 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-4xl">
            Our Fleet in Action
          </h2>
          <p className="mb-8 text-base text-gray-600 dark:text-gray-400 md:mb-12 md:text-lg">
            Click on the slideshow to view our full gallery.
          </p>
          <div
            className="relative mx-auto max-w-4xl cursor-pointer overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
            onClick={() => setIsGalleryModalOpen(true)}
          >
            <img
              key={currentSlide}
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
                      ? "bg-orange-500 scale-125"
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
