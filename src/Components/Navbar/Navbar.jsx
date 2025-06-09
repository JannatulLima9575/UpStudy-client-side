import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    signOutUser().then(() => console.log("Logged out"));
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full backdrop-blur-md bg-white/70 dark:bg-black/60 shadow-md border border-gray-200 dark:border-gray-700">
      <div className="px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Edu<span className="text-accent">Verse</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="hover:text-primary font-semibold">Home</Link>
          <Link to="/articles" className="hover:text-primary font-semibold">Articles</Link>
          <Link to="/about" className="hover:text-primary font-semibold">About</Link>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="btn btn-sm  w-8 rounded-full">
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-circle avatar">
                <div className="w-9 rounded-full">
                  <img src={user.photoURL || "https://i.ibb.co/zf4Bxpw/avatar.png"} alt="User" />
                </div>
              </div>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-3 z-[1]">
                <li><Link to="/my-articles">My Articles</Link></li>
                <li><Link to="/post-article">Post Article</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-sm rounded-full">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm rounded-full">Register</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="btn btn-ghost btn-sm">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/articles" className="hover:text-primary">Articles</Link>
            <Link to="/about" className="hover:text-primary">About</Link>
            {user ? (
              <>
                <Link to="/my-articles">My Articles</Link>
                <Link to="/post-article">Post Article</Link>
                <button onClick={handleLogout} className="btn btn-sm">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline btn-sm rounded-full">Login</Link>
                <Link to="/register" className="btn btn-primary btn-sm rounded-full">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;