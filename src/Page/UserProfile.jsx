import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({});
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios.get(`https://up-study-server-side.vercel.app/api/users/${user.email}`).then((res) => {
        setProfile(res.data);
      });
      axios.get(`https://up-study-server-side.vercel.app/api/articles?email=${user.email}`).then((res) => {
        // console.log("📦 Articles API response:", res.data);
        setArticles(res.data);
      });
      axios.get(`https://up-study-server-side.vercel.app/api/user-comments?email=${user.email}`).then((res) => {
        setComments(res.data);
      });
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const bio = form.bio.value;

    const updatedProfile = { name, photo, bio };
    await axios.put(`/api/users/${user.email}`, updatedProfile);
    alert("Profile updated!");
  };

  return (
    <div className="max-w-5xl mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold mb-6">👤 My Profile</h2>

      <form onSubmit={handleUpdate} className="mb-10 grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          defaultValue={profile.name || user.displayName}
          className="input input-bordered"
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          defaultValue={profile.photo || user.photoURL}
          className="input input-bordered"
        />
        <textarea
          name="bio"
          placeholder="Short Bio"
          defaultValue={profile.bio}
          className="textarea textarea-bordered"
        />
        <button className="btn btn-primary w-fit">Update Profile</button>
      </form>

      <hr className="my-10" />

      <h3 className="text-xl font-semibold mb-4">📝 My Articles</h3>
      <ul className="list-disc ml-6 mb-8">
        {articles.map((a) => (
          <li key={a._id}>
            <span className="font-semibold">{a.title}</span> - {a.category}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-4">💬 My Comments</h3>
      <ul className="list-disc ml-6">
        {comments.map((c) => (
          <li key={c._id}>
            <span className="text-gray-700">{c.commentText}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;