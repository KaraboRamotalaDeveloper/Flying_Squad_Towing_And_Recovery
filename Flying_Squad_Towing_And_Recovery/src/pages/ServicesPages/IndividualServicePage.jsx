import React from "react";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import ErrorMessage from "../../components/ui/ErrorMessage";

const IndividualServicePage = ({ serviceId }) => {
  const {
    data: service,
    isLoading,
    error,
  } = useFetchStrapi(fetchServiceById, serviceId);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={`Error: ${error.message}`} />;
  if (!service) return <ErrorMessage message="Service not found." />;

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold md:text-4xl">
          {service.attributes.title}
        </h2>
        <div className="mx-auto max-w-4xl">
          <p className="text-base text-gray-600 dark:text-gray-400 md:text-lg">
            {service.attributes.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndividualServicePage;
