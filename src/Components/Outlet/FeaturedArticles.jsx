import React, { useEffect, useState } from "react";
import ArticlesCard from "../../Page/Cards/ArticlesCard";

const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/featured")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching featured articles:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading featured articles...</p>;

  return (
    <div className="my-8 py-20">
      <h2 className="text-3xl font-bold mb-4 text-center">
        📌 Featured Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6 md:p-0 md:pt-10 p-3">
        {articles.map((article) => (
          <ArticlesCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;