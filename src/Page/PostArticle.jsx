// PostArticle.jsx
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const PostArticle = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const articleData = {
      ...data,
      authorEmail: user?.email,
      authorName: user?.displayName || "Anonymous",
      authorPhoto: user?.photoURL || null,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:3000/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      const result = await res.json();

      if (result.insertedId) {
        Swal.fire("✅ Success!", "Your article has been posted.", "success");
        reset();
      }
    } catch (error) {
      Swal.fire("❌ Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="min-h-screen pt-28 items-center bg-base-200 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-base-100 p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-center">Post New Article</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="label">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="input input-bordered w-full"
              placeholder="Enter article title"
            />
          </div>

          <div>
            <label className="label">Category</label>
            <select {...register("category", { required: true })} className="select select-bordered w-full">
              <option value="">Select a category</option>
              <option value="React">React</option>
              <option value="Firebase">Firebase</option>
              <option value="Node.js">Node.js</option>
              <option value="MongoDB">MongoDB</option>
            </select>
          </div>

          <div>
            <label className="label">Content</label>
            <textarea
              {...register("content", { required: true })}
              className="textarea textarea-bordered w-full h-40"
              placeholder="Write your article here..."
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Post Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostArticle;