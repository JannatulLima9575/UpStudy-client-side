import React from "react";

const PatientSafety = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Text */}
        <div>
          <p className="text-sm tracking-widest text-gray-500">
             KNOWLEDGE SHARING PLATFORM
          </p>
          <h1 className="text-4xl font-bold text-blue-600 mt-2">
             Empowering Knowledge
          </h1>
          <p className="mt-4 text-gray-700 text-xl leading-relaxed">
            Sharing valuable insights, best practices, real-world experiences, and 
            inspiring stories to help individuals and communities grow through 
            collaboration and learning.
          </p>

          {/* Link Button */}
          <a
            href="#"
            className="mt-5 inline-flex items-center gap-1 text-blue-600 font-bold hover:underline"
          >
            CLICK HERE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/BHXwFD4C/image.png"
            alt="Patient Safety"
            className="rounded-md shadow-lg max-w-full"
          />
        </div>

      </div>
    </div>
  );
};

export default PatientSafety;