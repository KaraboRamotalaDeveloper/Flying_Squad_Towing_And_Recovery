import React from "react";
import LoadingSpinner from "../../components/ui/LoadingSpinner.jsx";
import ErrorMessage from "../../components/ui/ErrorMessage.jsx";

const ServicesPage = ({ navigateToPage }) => {
  const { data: services, isLoading, error } = useFetchStrapi(fetchServices);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={`Error: ${error.message}`} />;

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold md:text-4xl">Our Services</h2>
        <p className="mb-8 text-base text-gray-600 dark:text-gray-400 md:mb-12 md:text-lg">
          We offer a wide range of services to get you out of a tough spot.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="cursor-pointer rounded-xl bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800 md:p-6"
              onClick={() => navigateToPage("service-detail", service.id)}
            >
              <div className="mb-4 flex justify-center text-orange-500">
                <Wrench className="text-orange-500" size={48} />
              </div>
              <h3 className="mb-2 text-lg font-bold md:text-xl">
                {service.attributes.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                {service.attributes.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
