import React from "react";
import { Wrench, Car, Truck, Anchor, PhoneCall } from "lucide-react";

// This is a reusable component for each service card.
// It takes an icon, title, and description as props.
const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-blue-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-center text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

const ServicesPage = () => {
  // Define the array of services with their details and icons.
  const services = [
    {
      icon: <PhoneCall size={48} />,
      title: "24/7 Emergency Towing",
      description:
        "Available around the clock for any vehicle emergency, from accidents to breakdowns. We'll be there when you need us most.",
    },
    {
      icon: <Wrench size={48} />,
      title: "Roadside Assistance",
      description:
        "Quick help for common problems like flat tires, dead batteries, lockouts, and running out of fuel. Get back on the road fast.",
    },
    {
      icon: <Car size={48} />,
      title: "Accident Recovery",
      description:
        "Professional and safe recovery services for vehicles involved in accidents. We handle the process with care and efficiency.",
    },
    {
      icon: <Truck size={48} />,
      title: "Heavy-Duty Towing",
      description:
        "Specialized towing for larger vehicles like trucks, buses, and RVs. Our equipment can handle the big jobs.",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold md:text-4xl text-gray-900 dark:text-gray-100">
          Our Services
        </h2>
        <p className="mb-8 text-base text-gray-600 dark:text-gray-400 md:mb-12 md:text-lg max-w-2xl mx-auto">
          At Fast Squad Tow And Recovery, we offer a comprehensive range of
          services to get you and your vehicle out of a tough spot, anytime,
          anywhere.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Map over the services array to render each service item */}
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
