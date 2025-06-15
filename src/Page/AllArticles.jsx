import React, { useEffect, useState } from "react";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading articles:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">All Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article._id}
            className="bg-base-100 shadow-md rounded-lg p-5 border border-base-300"
          >
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{article.category}</p>
            <p className="text-gray-600 mb-3">
              {article.content.slice(0, 100)}...
            </p>
            <button className="btn btn-sm btn-primary">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;