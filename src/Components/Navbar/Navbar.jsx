import { Link } from "react-router";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          Edu<span className="text-primary">Verse</span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">All Articles</Link></li>
        </ul>
        <button onClick={toggleTheme} className="btn btn-sm btn-outline">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;