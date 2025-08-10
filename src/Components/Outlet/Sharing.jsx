import React from "react";

const Sharing = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center py-6">
      <div className="text-center p-8">
        {/* Small Heading */}
        <p className="text-xl tracking-widest text-gray-500">WE INVITE YOU TO</p>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-blue-600 mt-2 mb-2">start sharing</h1>

        {/* Description */}
        <p className="mt-3 text-xl text-gray-700 max-w-2xl mx-auto">
          Patient Safety Improvements, Experiences, Best Practices and Patient Stories with the
          Global Patient Safety Community today
        </p>

        {/* Button */}
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1 text-blue-600 font-bold hover:underline"
        >
          CLICK TO SHARE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Sharing;