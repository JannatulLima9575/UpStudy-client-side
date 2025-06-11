import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import notFoundAnimation from "../../src/assets/lottiefiles/404.json";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4 py-10">
      {/* Lottie Animation */}
      <div className="max-w-md w-full">
        <Lottie animationData={notFoundAnimation} loop={true} />
      </div>

      {/* Message */}
      <h2 className="text-3xl md:text-4xl font-bold mt-6 text-primary">
        Lost in Knowledge?
      </h2>
      <p className="text-base text-gray-500 mt-2 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>

      {/* Back to Home Button */}
      <Link to="/">
        <button className="btn btn-primary px-6">Back to Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;