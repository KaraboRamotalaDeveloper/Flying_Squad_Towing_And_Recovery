import React from "react";

const OurTeamPage = () => (
  <section className="bg-gray-100 py-12 dark:bg-gray-800 md:py-24">
    <div className="container mx-auto px-4 text-center">
      <h2 className="mb-4 text-2xl font-bold md:text-4xl">Meet Our Team</h2>
      <p className="mx-auto max-w-4xl text-base text-gray-600 dark:text-gray-400 md:text-lg">
        Our dedicated team of professionals is ready to help you 24/7.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-8">
        <div className="w-full rounded-lg bg-white p-4 text-center shadow-lg dark:bg-gray-800 sm:w-64">
          <img
            src="https://placehold.co/150x150/e2e8f0/64748b?text=Joe"
            alt="Team member Joe Smith, Founder & Lead Driver"
            className="mx-auto mb-4 rounded-full"
          />
          <h3 className="mb-1 text-xl font-bold">Joe Smith</h3>
          <p className="text-sm text-orange-500 md:text-base">
            Founder & Lead Driver
          </p>
          <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 md:text-sm">
            With over 20 years of experience, Joe is the heart of our operation.
          </p>
        </div>
        <div className="w-full rounded-lg bg-white p-4 text-center shadow-lg dark:bg-gray-800 sm:w-64">
          <img
            src="https://placehold.co/150x150/e2e8f0/64748b?text=Jane"
            alt="Team member Jane Doe, Service Manager"
            className="mx-auto mb-4 rounded-full"
          />
          <h3 className="mb-1 text-xl font-bold">Jane Doe</h3>
          <p className="text-sm text-orange-500 md:text-base">
            Service Manager
          </p>
          <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 md:text-sm">
            Jane ensures every customer gets the fast, friendly service they
            deserve.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OurTeamPage;
