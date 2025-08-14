import React, { useState, useEffect } from "react";
import { CheckCircle, Shield, Truck, Anchor } from "lucide-react";

// This component uses a simple image slideshow with a floating animation.
const VehicleRecoveriesPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define an array of placeholder images for the slideshow, focused on recovery.
  const images = [
    "https://placehold.co/1000x600/10b981/ffffff?text=Winch-Out+Service",
    "https://placehold.co/1000x600/f87171/ffffff?text=Accident+Recovery+in+Action",
    "https://placehold.co/1000x600/3b82f6/ffffff?text=Vehicle+Recovery+Expertise",
  ];

  // Logic to automatically cycle through the images every 5 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    // Clear the interval when the component unmounts to prevent memory leaks.
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Professional Vehicle Recovery
          </h1>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            When you're in a tough spot, our expert vehicle recovery services
            are here to help. We specialize in safely retrieving vehicles from
            challenging situations, ensuring a fast and damage-free process.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Shield className="text-yellow-500 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Safety First
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our top priority is a safe and secure recovery for your vehicle
                and all involved.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Anchor className="text-blue-500 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Specialized Equipment
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We use state-of-the-art winches and specialized tools for every
                recovery scenario.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Truck className="text-green-500 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Expert Team
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our operators are trained to handle complex recoveries with
                skill and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slideshow and Precautionary Measures Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Slideshow Section */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <style>
              {`
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                  100% { transform: translateY(0px); }
                }
              `}
            </style>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Vehicle recovery in action ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out rounded-2xl
                  ${
                    index === currentImageIndex
                      ? "opacity-100 animate-[float_3s_ease-in-out_infinite]"
                      : "opacity-0"
                  }
                `}
              />
            ))}
            {/* Manual controls for the slideshow */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300
                    ${
                      index === currentImageIndex
                        ? "bg-blue-500"
                        : "bg-white bg-opacity-50 hover:bg-opacity-80"
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Precautionary Measures Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Our Recovery Process
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Your safety and the integrity of your vehicle are our top
              priorities. We follow a detailed process to ensure every recovery
              is handled professionally and without causing further damage.
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Situation Assessment:
                  </strong>{" "}
                  A thorough evaluation of the scene to determine the safest and
                  most effective recovery strategy.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Specialized Equipment:
                  </strong>{" "}
                  Use of a variety of tools, including heavy-duty winches and
                  rigging, to perform the recovery.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Damage Prevention:
                  </strong>{" "}
                  Careful placement of hooks and straps to ensure no further
                  damage is done to your vehicle during the recovery.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Efficient Execution:
                  </strong>{" "}
                  Our team works quickly to get your vehicle back on solid
                  ground and ready for the next steps.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehicleRecoveriesPage;
