import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://your-backend-url.com/articles/categories")
      .then(res => setCategories(res.data));
  }, []);

  return (
    <div className="my-10 px-4">
      <h2 className="text-2xl font-bold mb-4">🗂 Browse by Category</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map(cat => (
          <Link
            to={`/category/${cat}`}
            key={cat}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;