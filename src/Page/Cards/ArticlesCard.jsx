import React from "react";
import { Link } from "react-router";

const ArticlesCard = ({ article }) => {
  const {
    _id,
    title,
    content,
    author_name,
    author_photo,
    thumbnail,
    createdAt,
  } = article;

  return (
    <div className="bg-base-100 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col max-h-[80vh]">
      {/* Article Thumbnail */}
      <img
        src={thumbnail || "https://i.ibb.co/YyW9qfY/default-thumbnail.jpg"}
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />

      {/* Article Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
          {content}
        </p>

        {/* Author Info */}
        <div className="flex items-center justify-between text-sm mt-auto">
          <div className="flex items-center gap-2">
            <img
              src={author_photo || "https://i.ibb.co/YyW9qfY/default-user.png"}
              alt={author_name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-medium">{author_name}</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400">
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </div>

        {/* Read More Button */}
        <Link
          to={`/articles/${_id}`} 
          className="mt-4 text-blue-600 font-semibold hover:underline transition duration-200 inline-block"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default ArticlesCard;