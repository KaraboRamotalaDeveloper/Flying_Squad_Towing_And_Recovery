import React, { useState } from "react";
import {
  Truck,
  Phone,
  MapPin,
  Wrench,
  BatteryCharging,
  Star,
  BadgeCheck,
  X,
  MailIcon,
} from "lucide-react";

// This is the main App component for the towing company website.
// It's a single-page application with different sections for services,
// about us, testimonials, and contact information.

function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // A simple modal to show a message, replacing a native alert.
  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          {children}
        </div>
      </div>
    );
  };

  const services = [
    {
      name: "Emergency Towing",
      description:
        "24/7 rapid response for accidents, breakdowns, or vehicle recovery.",
      icon: <Truck className="text-orange-500" size={48} />,
    },
    {
      name: "Flat Tire Service",
      description:
        "On-the-spot tire changes to get you back on the road quickly and safely.",
      icon: <Wrench className="text-orange-500" size={48} />,
    },
    {
      name: "Jump Start & Battery",
      description:
        "Don't get stranded with a dead battery. We provide fast jump starts.",
      icon: <BatteryCharging className="text-orange-500" size={48} />,
    },
    {
      name: "Fuel Delivery",
      description:
        "Run out of gas? We'll deliver fuel directly to your location, anytime.",
      icon: <MapPin className="text-orange-500" size={48} />,
    },
  ];

  const testimonials = [
    {
      text: "Fast and professional service! They arrived within 20 minutes and had my car towed safely.",
      author: "Jane D.",
    },
    {
      text: "The driver was friendly and helped me with a flat tire late at night. Lifesaver!",
      author: "Mark T.",
    },
    {
      text: "Very reliable and transparent pricing. I highly recommend them for any roadside assistance.",
      author: "Carlos R.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative flex min-h-[60vh] items-center justify-center bg-[url('./assets/IMG-20250813-WA0022.jpg')] bg-cover bg-center bg-no-repeat text-white">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container relative z-10 mx-auto p-8 text-center">
            <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
              Reliable Long & Short Distance Towing
            </h1>
            <p className="mb-8 text-xl md:text-2xl">
              24/7 service, fast response,insurance approved and professional
              care when you need it most.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center rounded-full bg-orange-500 px-8 py-4 text-lg font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              <Phone className="mr-3 transition-transform group-hover:-rotate-6" />
              Call Now: (+27) 72-3668-009
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Our Services
            </h2>
            <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
              We offer a wide range of services to get you out of a tough spot.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800"
                >
                  <div className="mb-4 flex justify-center text-orange-500">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-slate-900 py-16 text-white md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mb-12 text-lg text-gray-400">
              We are committed to providing the best roadside assistance.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center p-6 text-center">
                <BadgeCheck className="mb-4 text-orange-500" size={64} />
                <h3 className="mb-2 text-xl font-bold">
                  Reliable & Trustworthy
                </h3>
                <p className="text-gray-400">
                  Our team is highly trained and dedicated to providing honest
                  and reliable service.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 text-center">
                <Phone className="mb-4 text-orange-500" size={64} />
                <h3 className="mb-2 text-xl font-bold">24/7 Availability</h3>
                <p className="text-gray-400">
                  We are available around the clock, every day of the year, for
                  your peace of mind.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 text-center">
                <Star className="mb-4 text-orange-500" size={64} />
                <h3 className="mb-2 text-xl font-bold">Fast Response Time</h3>
                <p className="text-gray-400">
                  We prioritize getting to your location as quickly as possible
                  to minimize your wait.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-16 dark:bg-gray-800 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What Our Customers Say
            </h2>
            <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-1 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-700"
                >
                  <p className="mb-4 italic text-gray-700 dark:text-gray-300">
                    "{testimonial.text}"
                  </p>
                  <p className="text-sm font-bold text-orange-500">
                    - {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Contact Us</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Need immediate assistance? Give us a call or send us a message.
              We're here to help.
            </p>
            <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
              <div className="rounded-full bg-slate-900 p-6 text-white shadow-xl dark:bg-gray-800">
                <MailIcon size={32} className="mx-auto mb-2 text-orange-500" />
                <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Our Email
                </p>
                <p className="text-md font-bold text-white">
                  SURENFLYINGSQUAD@GMAIL.COM
                </p>
              </div>

              <div className="rounded-full bg-slate-900 p-6 text-white shadow-xl dark:bg-gray-800">
                <Phone size={32} className="mx-auto mb-2 text-orange-500" />
                <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Call Us 24/7
                </p>
                <a
                  href="tel:5551234567"
                  className="text-2xl font-bold text-white transition-colors hover:text-orange-500"
                >
                  (+27) 72-3668-009
                </a>
              </div>
              <div className="rounded-full bg-slate-900 p-6 text-white shadow-xl dark:bg-gray-800">
                <MapPin size={32} className="mx-auto mb-2 text-orange-500" />
                <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
                  Our Address
                </p>
                <p className="text-md font-bold text-white">
                  33 Glenaire Avenue, Brindhaven, Verulam,KwaZulu-Natal, 4339
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* A simple modal for showing contact info on button click */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Contact Us!
        </h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          For immediate assistance, please call us:
        </p>
        <a
          href="tel:5551234567"
          className="inline-flex items-center rounded-md bg-orange-500 px-6 py-3 text-lg font-bold text-white shadow-md transition-colors hover:bg-orange-600"
        >
          <Phone className="mr-2" /> (555) 123-4567
        </a>
      </Modal>
    </div>
  );
}

export default Homepage;
