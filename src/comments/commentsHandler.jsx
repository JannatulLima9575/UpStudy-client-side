import { useState } from "react";

export const useFetchComments = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async (articleId) => {
    try {
      const res = await fetch(
        `https://up-study-server-side.vercel.app/api/comments?articleId=${articleId}`
      );
      const data = await res.json();
      setComments(data);
      
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  return { comments, fetchComments };
};
