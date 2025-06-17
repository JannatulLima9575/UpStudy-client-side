import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContext";

const MyArticles = () => {
  const { user } = useContext(AuthContext);
const userEmail = user?.email;

  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);

  useEffect(() => {
    if (!userEmail) return;
    fetch(`https://up-study-server-side.vercel.app/api/articles?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch(() => toast.error("Failed to load articles"));
  }, [userEmail]);

  const handleDelete = async (id) => {
    toast.info("Deleting...");
    try {
      const res = await fetch(`https://up-study-server-side.vercel.app/api/articles/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ authorEmail: userEmail }),
      });
      const result = await res.json();

      if (result.success) {
        toast.success("Article deleted!");
        setArticles((prev) => prev.filter((article) => article._id !== id));
      } else {
        toast.error(result.message || "Failed to delete article.");
      }
    } catch {
      toast.error("Delete failed.");
    }
  };

  const openEditModal = (article) => setEditingArticle(article);
  const closeEditModal = () => setEditingArticle(null);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedArticle = {
      authorEmail: userEmail,
      title: form.title.value,
      content: form.content.value,
      category: form.category.value,
      tags: form.tags?.value ? form.tags.value.split(",").map((t) => t.trim()) : [],
      thumbnail: form.thumbnail?.value || "",
    };

    try {
      const res = await fetch(
        `https://up-study-server-side.vercel.app/api/articles/${editingArticle._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedArticle),
        }
      );
      const result = await res.json();

      if (result.success) {
        toast.success("Article updated!");
        setArticles((prev) =>
          prev.map((a) =>
            a._id === editingArticle._id ? { ...a, ...updatedArticle } : a
          )
        );
        closeEditModal();
      } else {
        toast.error(result.message || "Update failed.");
      }
    } catch {
      toast.error("Update failed.");
    }
  };

  return (
    <div className="my-14 px-4 min-h-[80vh] pt-24 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">My Articles</h2>

      {articles.length === 0 ? (
        <p className="text-center">No articles found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article._id}>
                  <td>{article.title}</td>
                  <td>{article.category}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => openEditModal(article)}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(article._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editingArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Edit Article</h3>
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label className="block mb-1 font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={editingArticle.title}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-3">
                <label className="block mb-1 font-medium">Content</label>
                <textarea
                  name="content"
                  defaultValue={editingArticle.content}
                  required
                  rows={5}
                  className="textarea textarea-bordered w-full"
                />
              </div>
              <div className="mb-3">
                <label className="block mb-1 font-medium">Category</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={editingArticle.category}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-3">
                <label className="block mb-1 font-medium">Tags (comma separated)</label>
                <input
                  type="text"
                  name="tags"
                  defaultValue={editingArticle.tags?.join(", ")}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-3">
                <label className="block mb-1 font-medium">Thumbnail URL</label>
                <input
                  type="text"
                  name="thumbnail"
                  defaultValue={editingArticle.thumbnail || ""}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button type="button" onClick={closeEditModal} className="btn btn-outline">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyArticles;