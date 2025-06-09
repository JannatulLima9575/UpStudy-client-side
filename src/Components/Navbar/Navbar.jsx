import { Link } from "react-router";
import { useState, useEffect } from "react";

// Dummy auth status (replace with real context later)
const isLoggedIn = true;

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="bg-base-100">
        <div className="flex max-w-7xl mx-auto px-4 items-center py-4">
      {/* Left side logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-primary">
          Edu<span className="text-accent">Verse</span>
        </Link>
      </div>

      {/* Center nav links */}
      <div className="hidden md:flex items-center">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">All Articles</Link></li>
          {isLoggedIn && <li><Link to="/my-articles">My Articles</Link></li>}
          {isLoggedIn && <li><Link to="/post-article">Post Article</Link></li>}
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-2">
        {/* Theme toggle */}
        <button onClick={toggleTheme} className="btn btn-sm btn-outline rounded-full">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Conditional Auth Menu */}
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li><Link to="/my-articles">My Articles</Link></li>
              <li><Link to="/post-article">Post Article</Link></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
        )}
      </div>

      {/* Mobile menu */}
      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">All Articles</Link></li>
          {isLoggedIn && <li><Link to="/my-articles">My Articles</Link></li>}
          {isLoggedIn && <li><Link to="/post-article">Post Article</Link></li>}
          <li><Link to="/about">About Us</Link></li>
          {isLoggedIn
            ? <li><a>Logout</a></li>
            : <li><Link to="/login">Login</Link></li>
          }
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Navbar;