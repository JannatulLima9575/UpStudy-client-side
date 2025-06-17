import React from "react";

const CommentItem = ({ comment, onCommentDeleted, onLiked }) => {
  const handleLike = async () => {
    await fetch(`https://up-study-server-side.vercel.app/api/comments/${comment._id}/like`, {
      method: "PATCH",
    });
    onLiked();
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure to delete?");
    if (!confirm) return;
    await fetch(`https://up-study-server-side.vercel.app/api/comments/${comment._id}`, {
      method: "DELETE",
    });
    onCommentDeleted();
  };

  return (
    <div className="border p-3 rounded bg-gray-50">
      <div className="flex items-center gap-2 mb-1">
        <img src={comment.userPhoto} className="w-8 h-8 rounded-full" alt="User" />
        <strong>{comment.userName}</strong>
      </div>
      <p className="mb-2">{comment.commentText}</p>

      <div className="flex items-center gap-3 text-sm text-gray-500">
        <button onClick={handleLike} className="hover:text-blue-500">
          ❤️ {comment.likes}
        </button>
        <button onClick={handleDelete} className="hover:text-red-500">
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default CommentItem;