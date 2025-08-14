import React, { useState } from "react";

const ContactForm = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [photo, setPhoto] = useState(null);

  // State for UI feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState({
    message: "",
    type: "", // 'success' or 'error'
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form behavior
    setIsSubmitting(true);
    setSubmissionStatus({ message: "", type: "" });

    // In a real application, you would send the form data to a backend server here.
    // The browser cannot send an email directly for security reasons.
    // This fetch call is a placeholder for a real API endpoint.

    // Simulating a backend API call with a delay
    setTimeout(() => {
      console.log("Simulating form submission...");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Enquiry:", enquiry);
      console.log("Photo:", photo ? photo.name : "No photo uploaded");

      // Assume the submission was successful
      setSubmissionStatus({
        message: "Thank you! Your message has been sent successfully.",
        type: "success",
      });
      setIsSubmitting(false);

      // Reset the form fields
      setName("");
      setEmail("");
      setEnquiry("");
      setPhoto(null);

      // Clear status message after 5 seconds
      setTimeout(() => setSubmissionStatus({ message: "", type: "" }), 5000);
    }, 2000); // Simulate a 2-second network request
  };

  return (
    <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200 ">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Get In Touch With Us
        </h1>
        <p className="mt-2 text-gray-600">
          We'd love to hear from you. Please fill out the form below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
          />
        </div>

        {/* Enquiry/Description Field */}
        <div>
          <label
            htmlFor="enquiry"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Issue / Description / Enquiry
          </label>
          <textarea
            id="enquiry"
            name="enquiry"
            rows="4"
            value={enquiry}
            onChange={(e) => setEnquiry(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
          ></textarea>
        </div>

        {/* Photo Upload (Optional) */}
        <div>
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Attach a Photo of an issue you have (Optional)
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer transition duration-150 ease-in-out"
          />
        </div>

        {/* Status Message Container */}
        {submissionStatus.message && (
          <div
            className={`text-center transition-opacity duration-300 ease-in-out p-3 rounded-md ${
              submissionStatus.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {submissionStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white transition duration-150 ease-in-out ${
              isSubmitting
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
