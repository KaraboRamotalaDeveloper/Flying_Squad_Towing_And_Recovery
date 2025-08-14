import React, { useState } from "react";
import {
  Truck,
  Phone,
  Wrench,
  Menu,
  HeartHandshake,
  ClipboardCheck,
  Newspaper,
} from "lucide-react";

const Header = ({ navigateToPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const closeAllDropdowns = () => {
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setResourcesDropdownOpen(false);
  };

  const handleNavigation = (pageKey, serviceId) => {
    navigateToPage(pageKey, serviceId);
    setIsMobileMenuOpen(false);
    closeAllDropdowns();
  };

  const { data: services } = ["Service 1", "Service 2"];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900 py-4 text-white shadow-lg md:py-6">
      <div className="container mx-auto flex items-center justify-between p-4 md:px-6 lg:px-8">
        <button
          onClick={() => navigateToPage("home")}
          className="flex items-center space-x-2 text-xl font-extrabold text-orange-500 transition-colors hover:text-orange-400 md:text-2xl"
        >
          <Truck size={28} />
          <span>F.S Towing & Recovery</span>
        </button>

        <button
          id="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-md p-2 text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          <Menu size={28} />
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-base font-medium lg:text-lg">
            <li className="group relative">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setServicesDropdownOpen(!servicesDropdownOpen);
                }}
                className="flex items-center transition-colors hover:text-orange-500"
              >
                Services
                <svg
                  className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded-md bg-white text-gray-900 shadow-lg dark:bg-gray-800 dark:text-gray-100">
                  <div className="p-2">
                    <button
                      onClick={() => handleNavigation("services")}
                      className="block w-full text-left rounded-md px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      All Services
                    </button>
                    {services &&
                      services.map((service, id) => (
                        <button
                          key={id}
                          onClick={() => handleNavigation("service-detail", id)}
                          className="block w-full text-left rounded-md px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {"Service"}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={() => navigateToPage("gallery")}
                className="transition-colors hover:text-orange-500"
              >
                Gallery
              </button>
            </li>
            <li className="group relative">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setAboutDropdownOpen(!aboutDropdownOpen);
                }}
                className="flex items-center transition-colors hover:text-orange-500"
              >
                About Us
                <svg
                  className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                    aboutDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {aboutDropdownOpen && (
                <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded-md bg-white text-gray-900 shadow-lg dark:bg-gray-800 dark:text-gray-100">
                  <div className="p-2">
                    <button
                      onClick={() => handleNavigation("about")}
                      className="block w-full text-left rounded-md px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Our Story
                    </button>
                    <button
                      onClick={() => handleNavigation("our-team")}
                      className="block w-full text-left rounded-md px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Our Team
                    </button>
                    <button
                      onClick={() => handleNavigation("testimonials")}
                      className="block w-full text-left rounded-md px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Testimonials
                    </button>
                  </div>
                </div>
              )}
            </li>
            <li className="group relative">
              <button
                onClick={() => {
                  closeAllDropdowns();
                  setResourcesDropdownOpen(!resourcesDropdownOpen);
                }}
                className="flex items-center transition-colors hover:text-orange-500"
              >
                Resources
                <svg
                  className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                    resourcesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {resourcesDropdownOpen && (
                <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded-md bg-white text-gray-900 shadow-lg dark:bg-gray-800 dark:text-gray-100">
                  <div className="p-2">
                    <button
                      onClick={() => handleNavigation("faq")}
                      className="block w-full text-left rounded-md px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      FAQ
                    </button>
                    <button
                      onClick={() => handleNavigation("blog")}
                      className="block w-full text-left rounded-md px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Blog
                    </button>
                  </div>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={() => navigateToPage("contact")}
                className="transition-colors hover:text-orange-500"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`mobile-menu-container md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="px-4 pb-4 pt-2 text-white">
          <ul className="flex flex-col space-y-2 text-lg">
            <li className="border-b border-gray-700">
              <button
                onClick={() => navigateToPage("services")}
                className="flex w-full items-center py-2"
              >
                <Wrench size={20} className="mr-3 text-orange-500" /> Services
              </button>
            </li>
            <li className="border-b border-gray-700">
              <button
                onClick={() => navigateToPage("gallery")}
                className="flex w-full items-center py-2"
              >
                <Newspaper size={20} className="mr-3 text-orange-500" /> Gallery
              </button>
            </li>
            <li className="border-b border-gray-700">
              <button
                onClick={() => navigateToPage("about")}
                className="flex w-full items-center py-2"
              >
                <HeartHandshake size={20} className="mr-3 text-orange-500" />{" "}
                About Us
              </button>
            </li>
            <li className="border-b border-gray-700">
              <button
                onClick={() => navigateToPage("faq")}
                className="flex w-full items-center py-2"
              >
                <ClipboardCheck size={20} className="mr-3 text-orange-500" />{" "}
                FAQ
              </button>
            </li>
            <li className="border-b border-gray-700">
              <button
                onClick={() => navigateToPage("blog")}
                className="flex w-full items-center py-2"
              >
                <Newspaper size={20} className="mr-3 text-orange-500" /> Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateToPage("contact")}
                className="flex w-full items-center py-2"
              >
                <Phone size={20} className="mr-3 text-orange-500" /> Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
