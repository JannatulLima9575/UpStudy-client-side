import React from 'react';

const EventsSection = () => {
    return (

        <section className="bg-base-200 py-12 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>

    <div className="space-y-6">
      {/* <!-- Event Item --> */}
      <div className="flex items-center">
        {/* <!-- Date Box --> */}
        <div className="flex flex-col justify-center items-center w-16 h-16 bg-blue-600 rounded-md text-white font-bold text-center mr-4 flex-shrink-0">
          <span className="text-lg">12</span>
          <span className="text-sm">Aug</span>
        </div>
        {/* <!-- Event Details --> */}
        <div>
          <h3 className="text-lg font-semibold hover:text-blue-400 cursor-pointer transition">NAP Expo 2025</h3>
          <p className="text-sm text-gray-400">Lusaka, Zambia</p>
        </div>
      </div>

      {/* <!-- Event Item --> */}
      <div className="flex items-center">
        <div className="flex flex-col justify-center items-center w-16 h-16 bg-blue-600 rounded-md text-white font-bold text-center mr-4 flex-shrink-0">
          <span className="text-lg">2</span>
          <span className="text-sm">Sep</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold hover:text-blue-400 cursor-pointer transition">
            UNESCO-UNFCCC Webinar Series: How can change agents...
          </h3>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>

      {/* <!-- Event Item --> */}
      <div className="flex items-center">
        <div className="flex flex-col justify-center items-center w-16 h-16 bg-blue-600 rounded-md text-white font-bold text-center mr-4 flex-shrink-0">
          <span className="text-lg">16</span>
          <span className="text-sm">Sep</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold hover:text-blue-400 cursor-pointer transition">
            Twenty-eighth meeting of the Adaptation Committee (AC28)
          </h3>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>

      {/* <!-- Event Item --> */}
      <div className="flex items-center">
        <div className="flex flex-col justify-center items-center w-16 h-16 bg-blue-600 rounded-md text-white font-bold text-center mr-4 flex-shrink-0">
          <span className="text-lg">21</span>
          <span className="text-sm">Oct</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold hover:text-blue-400 cursor-pointer transition">
            UNESCO-UNFCCC Webinar Series: Getting ready for COP 30
          </h3>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>

      {/* <!-- Event Item --> */}
      <div className="flex items-center">
        <div className="flex flex-col justify-center items-center w-16 h-16 bg-blue-600 rounded-md text-white font-bold text-center mr-4 flex-shrink-0">
          <span className="text-lg">10</span>
          <span className="text-sm">Nov</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold hover:text-blue-400 cursor-pointer transition">
            2025 UN Climate Change Conference (COP30)
          </h3>
          <p className="text-sm text-gray-400">Belém, Brazil</p>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default EventsSection;