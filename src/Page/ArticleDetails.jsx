import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentForm from "../comments/CommentForm";
import CommentList from "../comments/CommentList";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [likes, setLikes] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);

  useEffect(() => {
    // Fetch article details
    fetch(`http://localhost:3000/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLikes(data.likes || 0);
      })
      .catch((err) => console.error("Failed to fetch article", err));

    // Fetch comments count
    fetchCommentsCount();
  }, [id]);

  const fetchCommentsCount = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/comments`);
      const comments = await res.json();
      const count = comments.filter((c) => c.articleId === id).length;
      setCommentsCount(count);
    } catch (err) {
      console.error("Failed to fetch comments", err);
    }
  };

  // Like button handler
  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/articles/${id}/like`, {
        method: "PATCH",
      });
      const data = await res.json();
      setLikes(data.likes);
    } catch (err) {
      console.error("Failed to like article", err);
    }
  };

  if (!article) return <p className="text-center pt-28">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 py-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

      <div className="flex items-center gap-3 mb-2">
        {article.author_photo && (
          <img
            src={article.author_photo}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
        )}
        <div>
          <p className="font-medium text-gray-800">{article.author_name}</p>
          <p className="text-sm text-gray-500">
            {new Date(article.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-1">
        Category: <span className="font-semibold">{article.category}</span>
      </p>

      {article.tags?.length > 0 && (
        <p className="text-sm text-gray-600 mb-4">
          Tags:{" "}
          {article.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-block mr-2 bg-base-200 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </p>
      )}

      {article.thumbnail && (
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-auto mb-4 rounded-lg"
        />
      )}

      <div className="prose max-w-full mb-6">
        <p>{article.content}</p>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <button onClick={handleLike} className="btn btn-outline btn-sm">
          ❤️ Like ({likes})
        </button>
        <span className="text-sm text-gray-600">
          💬 {commentsCount} comment{commentsCount !== 1 ? "s" : ""}
        </span>
      </div>

      <hr className="my-6" />

      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <CommentForm articleId={id} onCommentAdded={fetchCommentsCount} />
      <CommentList articleId={id} />
    </div>
  );
};

export default ArticleDetails;