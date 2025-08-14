import React from "react";

const ErrorMessage = ({ message }) => (
  <div className="flex items-center justify-center p-8 text-center text-red-500">
    <p className="text-lg font-medium">{message}</p>
  </div>
);

export default ErrorMessage;
