import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* LOGO (CLICKABLE) */}
        <h1
          onClick={handleLogoClick}
          className="text-2xl font-bold text-purple-500 cursor-pointer"
        >
          ADRS
        </h1>

        {/* LINKS */}
        <div className="flex gap-6 text-sm font-medium items-center">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-gray-300 hover:text-purple-400"
          }>
            Home
          </NavLink>

          <NavLink to="/services" className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-gray-300 hover:text-purple-400"
          }>
            Services
          </NavLink>

          <NavLink to="/products" className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-gray-300 hover:text-purple-400"
          }>
            Products
          </NavLink>

          <NavLink to="/workshops" className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-gray-300 hover:text-purple-400"
          }>
            Workshops
          </NavLink>

          <NavLink to="/gallery" className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-gray-300 hover:text-purple-400"
          }>
            Gallery
          </NavLink>

          <NavLink to="/careers" className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-gray-300 hover:text-purple-400"
          }>
            Careers
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-gray-300 hover:text-purple-400"
          }>
            Contact
          </NavLink>

          {/* AUTH BUTTON */}
          {user ? (
            <button
              onClick={logout}
              className="ml-4 px-4 py-1.5 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="ml-4 px-4 py-1.5 rounded-md bg-purple-500 text-white hover:bg-purple-600 transition"
            >
              Login
            </NavLink>
          )}
        </div>

      </div>
    </nav>
  );
}