import React from "react";

const topics = [
  "JavaScript",
  "React",
  "Firebase",
  "MongoDB",
  "Tailwind CSS",
  "Data Structures",
  "Algorithms",
  "Web Security",
  "TypeScript",
  "Authentication",
];

const PopularTopics = () => {
  return (
    <section className="bg-base-200 text-base-content py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Popular Topics</h2>
        <p className="mb-10 text-gray-500 dark:text-gray-400">
          Explore trending topics in our knowledge community.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic, index) => (
            <span
              key={index}
              className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTopics;