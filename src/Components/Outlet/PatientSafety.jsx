import React from "react";

const PatientSafety = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Text */}
        <div>
          <p className="text-sm tracking-widest text-gray-500">
            WORLD HEALTH ORGANIZATION
          </p>
          <h1 className="text-4xl font-bold text-blue-600 mt-2">
            Patient Safety
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Focusing on patient safety and health care systems linkages to
            eliminate preventable harm to improve patient safety and health
            outcomes at the point of care.
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Nurse_with_patient.jpg/640px-Nurse_with_patient.jpg"
            alt="Patient Safety"
            className="rounded-md shadow-lg max-w-full"
          />
        </div>

      </div>
    </div>
  );
};

export default PatientSafety;