import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 text-lg mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="text-blue-600 hover:text-blue-800 underline text-base font-medium"
      >
        ← Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
