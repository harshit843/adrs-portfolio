import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-500">
          ADRS
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
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
        </div>

      </div>
    </nav>
  );
}