import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const CategoryArticles = () => {
  const { name } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/articles${name}`)
      .then(res => setArticles(res.data));
  }, [name]);

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Articles in "{name}"</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map(article => (
          <div key={article._id} className="p-4 border rounded-md shadow">
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-gray-600">{article.content.slice(0, 100)}...</p>
            <a href={`/article/${article._id}`} className="text-blue-500 mt-2 inline-block">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryArticles;