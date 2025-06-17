import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ articleId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await fetch(`https://up-study-server-side.vercel.app/api/comments?articleId=${articleId}`);
    const data = await res.json();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, [articleId]);

  return (
    <div className="mt-6 space-y-4">
      {comments.length === 0 && <p className="text-gray-500">No comments yet.</p>}
      {comments.map((comment) => (
        <CommentItem
          key={comment._id}
          comment={comment}
          onCommentDeleted={fetchComments}
          onLiked={fetchComments}
        />
      ))}
    </div>
  );
};

export default CommentList;