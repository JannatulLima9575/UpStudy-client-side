import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const handleLogout = () => {
    signOutUser().then(() => console.log("Logged out"));
  };

  return (
    <div className="bg-base-100 shadow">
      <div className="max-w-7xl mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Edu<span className="text-accent">Verse</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>

          {/* If user is logged in */}
          {user ? (
            <>
              {/* Avatar dropdown */}
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL || "https://i.ibb.co/zf4Bxpw/avatar.png"} alt="User" />
                  </div>
                </div>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-3 z-[1]">
                  <li><Link to="/my-articles">My Articles</Link></li>
                  <li><Link to="/post-article">Post Article</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              </div>
            </>
          ) : (
            // If not logged in
            <>
              <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;