import { useState } from "react";

const CommentForm = ({ articleId, fetchComments }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const comment = {
      articleId,
      userId: "123",
      userName: "Demo User",
      userPhoto: "https://i.pravatar.cc/150?img=12",
      commentText,
    };

    const res = await fetch("https://up-study-server-side.vercel.app/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(comment),
    });

    if (res.ok) {
      setCommentText("");
      fetchComments(articleId); 
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