const FaqPage = () => (
  <section className="bg-gray-100 py-12 dark:bg-gray-800 md:py-24">
    <div className="container mx-auto px-4 text-center">
      <h2 className="mb-4 text-2xl font-bold md:text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto mt-8 max-w-3xl space-y-4 text-left">
        <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700 md:p-6">
          <h3 className="mb-2 text-lg font-bold md:text-xl">
            How long does it take for a tow truck to arrive?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Our average response time is between 20-30 minutes, but this can
            vary depending on your location and current traffic conditions. We
            always strive to get to you as quickly as possible.
          </p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700 md:p-6">
          <h3 className="mb-2 text-lg font-bold md:text-xl">
            Do you offer roadside assistance 24/7?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Yes, we operate 24 hours a day, 7 days a week, including holidays.
            You can call our hotline anytime for immediate service.
          </p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700 md:p-6">
          <h3 className="mb-2 text-lg font-bold md:text-xl">
            Can you tow my car to a specific mechanic?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Absolutely. Just let our dispatcher know the address, and we'll take
            your vehicle wherever you need it to go.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FaqPage;
