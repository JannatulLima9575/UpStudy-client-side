import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-edu-bg text-edu-primary py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Success Stories
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-base-200 p-6 rounded-xl border-edu-border shadow-lg hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <img
                src="https://i.ibb.co.com/GvKKPfJp/image.png"
                alt="Sarah Ahmed profile"
                className="w-14 h-14 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">Sarah Ahmed</h3>
                <p className="text-edu-muted text-sm">Frontend Developer</p>
              </div>
            </div>
            <p className="text-edu-secondary text-sm">
              "Eduverse helped me transition into a tech career with hands-on
              projects and amazing mentors."
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-base-200 p-6 rounded-xl border-edu-border shadow-lg hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <img
                src="https://i.ibb.co.com/qM6CTPYJ/image.png"
                alt="John Rahman profile"
                className="w-14 h-14 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">John Rahman</h3>
                <p className="text-edu-muted text-sm">Data Analyst</p>
              </div>
            </div>
            <p className="text-edu-secondary text-sm">
              "The webinars were game-changing! I landed my first job thanks to
              the learning path."
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-base-200 p-6 rounded-xl border-edu-border shadow-lg hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <img
                src="https://i.ibb.co.com/q3R0fvq6/image.png"
                alt="Maya Islam profile"
                className="w-14 h-14 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">Maya Islam</h3>
                <p className="text-edu-muted text-sm">UI/UX Designer</p>
              </div>
            </div>
            <p className="text-edu-secondary text-sm">
              "From zero to portfolio-ready in just 6 months. Highly recommend
              Eduverse!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;