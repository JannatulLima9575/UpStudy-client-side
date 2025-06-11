import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://your-server.com/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Failed to load categories", err));
  }, []);

  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category}`}
            className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 px-4 py-2 rounded-full hover:bg-blue-200 transition"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;