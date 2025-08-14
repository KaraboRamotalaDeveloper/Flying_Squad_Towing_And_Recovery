import React from "react";
import { Phone, MapPin, MailIcon } from "lucide-react";
import ContactForm from "../components/ContactForm.jsx";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* ContactForm is now the first child */}
      <ContactForm />

      {/* This new container holds the contact info and is styled as a card */}
      <div className="mt-8 max-w-3xl w-full bg-slate-800 text-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-center text-2xl font-bold text-white mb-6">
          Contact Details
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Phone information */}

          <div className="flex-1 text-center">
            <MailIcon size={32} className="mx-auto mb-2 text-orange-500" />
            <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
              Our Email
            </p>
            <a
              href="mailto:SURENFLYINGSQUAD@GMAIL.COM"
              className="mt-1 block text-lg font-bold text-white transition-colors hover:text-orange-500"
            >
              SURENFLYINGSQUAD@GMAIL.COM
            </a>
          </div>

          <div className="flex-1 text-center">
            <Phone size={48} className="mx-auto mb-4 text-orange-500" />
            <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
              Call Us 24/7
            </p>
            <a
              href="tel:+27723668009"
              className="mt-1 block text-lg font-bold text-white transition-colors hover:text-orange-500"
            >
              (+27) 72-3668-009
            </a>
          </div>

          {/* Address information */}
          <div className="flex-1 text-center">
            <MapPin size={48} className="mx-auto mb-4 text-orange-500" />
            <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
              Our Address
            </p>
            <p className="mt-1 block text-lg font-bold text-white">
              33 Glenaire Avenue, Brindhaven, Verulam,KwaZulu-Natal, 4339
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
