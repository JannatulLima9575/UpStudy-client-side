import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  // Fetch categories from the server
  useEffect(() => {
    fetch("https://up-study-server-side.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Failed to load categories", err));
  }, []);

  return (
    <div className="my-6 bg-base-200 py-16">
      <h2 className="text-4xl text-center font-bold mb-4">Categories</h2>
      <p className="text-center text-xl text-gray-600 mb-4">
        Click a category to explore articles related to that topic.
      </p>
      <div className="flex flex-wrap justify-center gap-3 pt-7">
        {categories.length === 0 ? (
          <p className="text-gray-500">No categories found.</p>
        ) : (
          categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${encodeURIComponent(category)}`}
              className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 px-4 py-2 rounded-full hover:bg-blue-200 transition"
            >
              {category}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoriesList;