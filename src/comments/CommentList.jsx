import React, { useEffect } from "react";
import CommentItem from "./CommentItem";


const CommentList = ({ articleId, comments, fetchComments}) => {
  
  useEffect(() => {
    fetchComments(articleId);
  }, [articleId]);

  useEffect(() => {
    console.log("Updated comments:", comments);
  }, [comments]);

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