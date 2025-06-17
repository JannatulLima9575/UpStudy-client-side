import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`/api/users/${user.email}`)
        .then(res => res.json())
        .then(data => setUserInfo(data));

      fetch(`/api/articles?email=${user.email}`)
        .then(res => res.json())
        .then(data => setArticles(data));

      fetch(`/api/user-comments?email=${user.email}`)
        .then(res => res.json())
        .then(data => setComments(data));
    }
  }, [user]);

  return (
    <div className="max-w-5xl mx-auto pt-24 p-6">
      <div className="text-center">
        <img src={userInfo.photoURL} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
        <h2 className="text-xl font-bold mt-3">{userInfo.name}</h2>
        <p className="text-gray-500">{userInfo.email}</p>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">My Articles</h3>
        <ul className="space-y-2">
          {articles.map(article => (
            <li key={article._id} className="p-4 border rounded">
              <h4 className="font-bold">{article.title}</h4>
              <p className="text-sm text-gray-500">{article.category}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">My Comments</h3>
        <ul className="space-y-2">
          {comments.map(comment => (
            <li key={comment._id} className="p-4 border rounded">
              <p className="text-gray-600">{comment.commentText}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;