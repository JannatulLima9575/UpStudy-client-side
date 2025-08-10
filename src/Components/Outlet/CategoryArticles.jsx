import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticlesCard from "../../Page/Cards/ArticlesCard";

const CategoryArticles = () => {
  const { categoryName } = useParams(); 
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://up-study-server-side.vercel.app/api/articles?category=${categoryName}`)
      .then(res => res.json())
      .then(data =>{ setArticles(data);console.log(data)});

  }, [categoryName]);

  return (
    <div className="my-8 pt-28 max-w-7xl mx-auto">
      <div className="">
      <h2 className="text-4xl font-bold mb-6">
        Articles in "{categoryName}" Category
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticlesCard key={article._id} article={article} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default CategoryArticles;