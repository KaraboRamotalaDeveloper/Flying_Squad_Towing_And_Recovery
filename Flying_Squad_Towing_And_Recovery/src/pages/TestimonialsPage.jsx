import React from "react";

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

const TestimonialsPage = () => (
  <section className="py-12 md:py-24">
    <div className="container mx-auto px-4 text-center">
      <h2 className="mb-4 text-2xl font-bold md:text-4xl">
        What Our Customers Say
      </h2>
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-1 md:grid-cols-3 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-100 p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-700 md:p-6"
          >
            <p className="mb-4 italic text-sm text-gray-700 dark:text-gray-300 md:text-base">
              "{testimonial.text}"
            </p>
            <p className="text-xs font-bold text-orange-500 md:text-sm">
              - {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsPage;
