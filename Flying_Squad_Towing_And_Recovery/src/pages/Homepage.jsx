import React, { useState } from "react";
import { Phone, Star, BadgeCheck } from "lucide-react";
import Modal from "../components/ui/Modals/Modal";

const Homepage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center justify-center bg-[url('https://placehold.co/1920x1080/0f172a/94a3b8?text=Tow+Truck')] bg-cover bg-center bg-no-repeat text-white">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container relative z-10 mx-auto p-4 text-center md:p-8">
          <h1 className="mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl">
            Reliable Towing & Roadside Assistance
          </h1>
          <p className="mb-8 text-base md:text-xl lg:text-2xl">
            24/7 service, fast response, and professional care when you need it
            most.
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="group inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-base font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 md:px-8 md:py-4 md:text-lg"
          >
            <Phone
              className="mr-2 transition-transform group-hover:-rotate-6 md:mr-3"
              size={20}
            />
            Call Now: (555) 123-4567
          </button>
        </div>
      </section>
      <section className="bg-slate-900 py-12 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mb-8 text-base text-gray-400 md:mb-12 md:text-lg">
            We are committed to providing the best roadside assistance.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-4 text-center md:p-6">
              <BadgeCheck className="mb-4 text-orange-500" size={56} />
              <h3 className="mb-2 text-xl font-bold">Reliable & Trustworthy</h3>
              <p className="text-sm text-gray-400 md:text-base">
                Our team is highly trained and dedicated to providing honest and
                reliable service.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 text-center md:p-6">
              <Phone className="mb-4 text-orange-500" size={56} />
              <h3 className="mb-2 text-xl font-bold">24/7 Availability</h3>
              <p className="text-sm text-gray-400 md:text-base">
                We are available around the clock, every day of the year, for
                your peace of mind.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 text-center md:p-6">
              <Star className="mb-4 text-orange-500" size={56} />
              <h3 className="mb-2 text-xl font-bold">Fast Response Time</h3>
              <p className="text-sm text-gray-400 md:text-base">
                We prioritize getting to your location as quickly as possible to
                minimize your wait.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      >
        <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100 md:text-2xl">
          Contact Us!
        </h3>
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300 md:text-base">
          For immediate assistance, please call us:
        </p>
        <a
          href="tel:5551234567"
          className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-base font-bold text-white shadow-md transition-colors hover:bg-orange-600 md:px-6 md:py-3 md:text-lg"
        >
          <Phone className="mr-2" size={20} /> (555) 123-4567
        </a>
      </Modal>
    </>
  );
};

export default Homepage;
