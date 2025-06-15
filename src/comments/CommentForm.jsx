import { useState } from "react";

const CommentForm = ({ articleId, onCommentAdded }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const comment = {
      articleId,
      userId: "123", // তোমার auth থেকে এভাবে পাঠাবে
      userName: "Demo User",
      userPhoto: "https://i.pravatar.cc/150?img=12",
      commentText,
    };

    const res = await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("access-token")}` // যদি প্রোটেক্টেড হয়
      },
      body: JSON.stringify(comment),
    });

    if (res.ok) {
      setCommentText("");
      if (onCommentAdded) onCommentAdded(); // রিফ্রেশ
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Write a comment..."
        required
      ></textarea>
      <button type="submit" className="btn btn-primary mt-2">
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;