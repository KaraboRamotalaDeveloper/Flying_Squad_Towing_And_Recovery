import React, { useState, useEffect } from "react";
import { CheckCircle, Shield, Clock } from "lucide-react";

// This component uses a simple image slideshow with a floating animation.
const TowTruckPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define an array of placeholder images for the slideshow.
  // You can replace these with your own images.
  const images = [
    "./src/assets/for-tow-truck/IMG-20250813-WA0019.jpg",
    "./src/assets/for-tow-truck/IMG-20250813-WA0026.jpg",
    "./src/assets/for-tow-truck/IMG-20250813-WA0029.jpg",
    "./src/assets/for-tow-truck/IMG-20250813-WA0030.jpg",
    "./src/assets/for-tow-truck/IMG-20250813-WA0032.jpg",
    "./src/assets/for-tow-truck/IMG-20250813-WA0034.jpg",
    "./src/assets/for-tow-truck/IMG-20250813-WA0035.jpg",
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
            Expert Tow Truck Services
          </h1>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            When you need reliable and powerful towing for your truck, you can
            count on Fast Squad Tow And Recovery. We specialize in heavy-duty
            towing with the equipment and expertise to handle any job safely and
            efficiently.
          </p>
        </div>
      </section>

      {/* Success and Efficiency Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <CheckCircle className="text-green-500 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Proven Success
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our team has a track record of successfully towing a wide range
                of trucks, from small commercial vehicles to large semi-trucks,
                in all conditions.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Clock className="text-blue-500 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Convenient and Efficient
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We pride ourselves on our swift response times and efficient
                service, minimizing your downtime and getting you back on
                schedule as quickly as possible.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Shield className="text-yellow-500 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Expertise You Can Trust
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our tow truck operators are highly trained and certified to
                handle complex towing situations with the utmost care and
                professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slideshow and Precautions Section */}
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
                alt={`Tow truck in action ${index + 1}`}
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
              Precautionary Measures
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Your safety and the integrity of your vehicle are our top
              priorities. We adhere to a strict set of safety protocols to
              ensure a secure towing process.
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Vehicle Inspection:
                  </strong>{" "}
                  A thorough pre-towing inspection to identify potential risks
                  and choose the correct towing method.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Proper Securing:
                  </strong>{" "}
                  We use high-quality straps and winches to securely fasten the
                  vehicle, preventing movement during transport.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Traffic Management:
                  </strong>{" "}
                  Our team sets up safety cones and markers to protect both our
                  operators and other drivers on the road.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle
                  className="text-blue-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Continuous Monitoring:
                  </strong>{" "}
                  We monitor the towed vehicle throughout the journey to ensure
                  everything remains stable and secure.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TowTruckPage;
