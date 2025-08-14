import React from "react";
import { Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold md:text-4xl">Contact Us</h2>
        <p className="mx-auto mb-8 max-w-2xl text-base text-gray-600 dark:text-gray-400 md:text-lg">
          Need immediate assistance? Give us a call or chat with our assistant.
        </p>
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
          <div className="w-full rounded-full bg-slate-900 p-4 text-white shadow-xl dark:bg-gray-800 md:w-auto md:p-6">
            <Phone
              size={24}
              className="mx-auto mb-2 text-orange-500 md:size-32"
            />
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 md:text-sm">
              Call Us 24/7
            </p>
            <a
              href="tel:5551234567"
              className="text-xl font-bold text-white transition-colors hover:text-orange-500 md:text-2xl"
            >
              (555) 123-4567
            </a>
          </div>
          <div className="w-full rounded-full bg-slate-900 p-4 text-white shadow-xl dark:bg-gray-800 md:w-auto md:p-6">
            <MapPin
              size={24}
              className="mx-auto mb-2 text-orange-500 md:size-32"
            />
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 md:text-sm">
              Our Address
            </p>
            <p className="text-md font-bold text-white">
              123 Towing Blvd, Metropolis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
