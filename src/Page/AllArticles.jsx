import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [allTags, setAllTags] = useState([]);

  const fetchArticles = () => {
    setLoading(true);
    const params = new URLSearchParams();

    if (selectedCategory) params.append("category", selectedCategory);
    if (selectedTag) params.append("tag", selectedTag);

    fetch(`https://up-study-server-side.vercel.app/api/articles?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading articles:", error);
        setLoading(false);
      });
  };

  // Load articles initially and when filter changes
  useEffect(() => {
    fetchArticles();
  }, [selectedCategory, selectedTag]);

  // Optional: Load all unique tags (for dropdown)
  useEffect(() => {
    fetch("https://up-study-server-side.vercel.app/api/tags")
      .then((res) => res.json())
      .then((data) => setAllTags(data))
      .catch((err) => console.error("Failed to load tags", err));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 py-80">
      <h2 className="text-3xl font-bold text-center mb-8">All Articles</h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select select-bordered w-full max-w-xs"
          defaultValue=""
        >
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          {/* if need more category then add here */}
        </select>

        <select
          onChange={(e) => setSelectedTag(e.target.value)}
          className="select select-bordered w-full max-w-xs"
          defaultValue=""
        >
          <option value="">All Tags</option>
          {allTags.map((tag, i) => (
            <option key={i} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {articles.length === 0 ? (
        <p className="text-center">No articles found.</p>
      ) : (
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
              <Link to={`/articles/${article._id}`}>
                <button className="btn btn-sm btn-primary">Read More</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllArticles;