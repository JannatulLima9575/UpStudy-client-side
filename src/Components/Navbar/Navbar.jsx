import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { useState, useEffect } from "react";
import NavbarLogo from "../../assets/logo.png";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Load saved theme
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
    <div>
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full backdrop-blur-md bg-white/70 dark:bg-black/60 shadow-md border border-gray-200 dark:border-gray-700">
        <div className="px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-black rounded-xl p-1">
            <img src={NavbarLogo} alt="EduVerse Logo" className="lg:h-10" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="hover:text-primary font-semibold">Home</Link>
            <Link to="/articles" className="hover:text-primary font-semibold">Articles</Link>
            <Link to="/about" className="hover:text-primary font-semibold">About</Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-sm w-8 rounded-full tooltip"
              data-tip={theme === "light" ? "Dark Mode" : "Light Mode"}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-circle avatar">
                  <div className="w-9 rounded-full">
                    <img
                      src={user.photoURL || "https://i.ibb.co/zf4Bxpw/avatar.png"}
                      alt={user.displayName || "User"}
                    />
                  </div>
                </div>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-3 z-[1]">
                  <li><Link to="/profile">My Profile</Link></li>
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

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-sm tooltip"
              data-tip={theme === "light" ? "Dark Mode" : "Light Mode"}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-circle"
              aria-label="Toggle Menu"
            >
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
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed top-0 mt-24 right-0 w-64 h-auto p-4 z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 shadow-md border border-gray-200 dark:border-gray-700  transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} shadow-xl`}>
        <div className="flex flex-col gap-4 mt-20">
          <Link to="/" className="hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/articles" className="hover:text-primary" onClick={() => setIsOpen(false)}>Articles</Link>
          <Link to="/about" className="hover:text-primary" onClick={() => setIsOpen(false)}>About</Link>
          {user ? (
            <>
              <Link to="/profile" onClick={() => setIsOpen(false)}>My Profile</Link>
              <Link to="/my-articles" onClick={() => setIsOpen(false)}>My Articles</Link>
              <Link to="/post-article" onClick={() => setIsOpen(false)}>Post Article</Link>
              <button onClick={() => { handleLogout(); setIsOpen(false); }} className="btn btn-sm">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-sm rounded-full" onClick={() => setIsOpen(false)}>Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm rounded-full" onClick={() => setIsOpen(false)}>Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
