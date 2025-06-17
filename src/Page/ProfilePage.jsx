import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (user?.email) {
      //  Load user info
      fetch(`/api/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setUserInfo(data);
        })
        .catch(err => console.error("User info fetch error:", err));

      // Load articles
      fetch(`/api/articles?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          console.log("✅ Articles API response:", data);

          if (Array.isArray(data)) {
            setArticles(data);
          } else if (Array.isArray(data.articles)) {
            setArticles(data.articles);
          } else {
            setArticles([]);
          }
        })
        .catch(err => {
          console.error("Articles fetch error:", err);
          setArticles([]);
        });

      // ✅ Load comments
      fetch(`/api/user-comments?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setComments(data);
          } else if (Array.isArray(data.comments)) {
            setComments(data.comments);
          } else {
            setComments([]);
          }
        })
        .catch(err => {
          console.error("Comments fetch error:", err);
          setComments([]);
        });
    }
  }, [user]);

  return (
    <div className="max-w-5xl mx-auto pt-24 px-4">
      {/* 🧑 User Info */}
      <div className="text-center">
        <img
          src={userInfo.photoURL || user?.photoURL}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-xl font-bold mt-3">{userInfo.name || user?.displayName}</h2>
        <p className="text-gray-500">{userInfo.email || user?.email}</p>
      </div>

      {/* 📚 Articles Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">My Articles</h3>
        {Array.isArray(articles) && articles.length > 0 ? (
          <ul className="space-y-2">
            {articles.map((article) => (
              <li key={article._id || article.id} className="p-4 border rounded">
                <h4 className="font-bold">{article.title}</h4>
                <p className="text-sm text-gray-500">{article.category}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No articles found.</p>
        )}
      </div>

      {/* 💬 Comments Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">My Comments</h3>
        {Array.isArray(comments) && comments.length > 0 ? (
          <ul className="space-y-2">
            {comments.map((comment) => (
              <li key={comment._id || comment.id} className="p-4 border rounded">
                <p className="text-gray-600">{comment.comment || comment.commentText}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments found.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;