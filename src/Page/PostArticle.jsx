// PostArticle.jsx
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const PostArticle = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const categoryThumbnails = {
    React: "data:image/png;base64,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",
    Firebase: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbilz9pg5y8l7t9te1818.png",
    "Node.js": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLYSbNSx7jk-QpJVq-akrj3uk3sjPYpDz8Q&s",
    MongoDB: "https://media.licdn.com/dms/image/v2/D4D12AQETgv5fMiYEXA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677609185621?e=2147483647&v=beta&t=Ora_YKTAmDz3efeDirq2YQ7INd_unqaFZ13TheQc_60",
    Technology: "data:image/jpeg;base64,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",
  };

  

  const onSubmit = async (data) => {
    const defaultThumbnail = categoryThumbnails[data.category] || "https://i.ibb.co/YyW9qfY/default-thumbnail.jpg";
    const tagsArray = data.tags ? data.tags.split(",").map(tag => tag.trim()) : [];

    const articleData = {

      title: data.title,
      content: data.content,
      category: data.category,
      tags: tagsArray,
      thumbnail: data.thumbnail || defaultThumbnail,
      authorEmail: user?.email,
      authorName: user?.displayName || "Anonymous",
      authorPhoto: user?.photoURL || null,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("https://up-study-server-side.vercel.app/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      const result = await res.json();

      if (result.insertedId) {
        Swal.fire("Success!", "Your article has been posted.", "success");
        reset();
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
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
              <option value="Technology">Technology</option>
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

          <div>
            <label className="label">Tags (comma separated)</label>
            <input
              type="text"
              {...register("tags")}
              className="input input-bordered w-full"
              placeholder="e.g. hooks, state, useEffect"
            />
          </div>

          <div>
            <label className="label">Thumbnail URL (optional)</label>
            <input
              type="text"
              {...register("thumbnail")}
              className="input input-bordered w-full"
              placeholder="Paste image URL or leave blank for default"
            />
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